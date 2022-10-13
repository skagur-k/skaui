---
uuid: 20220607153814
created: 2022-06-07T15:38:14
last-modified: 2022-06-07T15:38:14
alias:
---

# [[Java Concurency]]

📑 **Tags**:  #note

<iframe width="560" height="315" src="https://www.youtube.com/embed/eKWjfZ-TUdo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/nhYIEqt-jvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Java Synchronized Blocks

Java `synchronized` block marks a method or a block of code as *synchronized*. Synchronized blocks can onlly be executed a **single thread at a time**.

`Synchronized` was the first mechanism for synchronizing access to objects shared by multiple threads.

```ad-attention
`synchronized` mechanism is not advanced enough.
Jaava 5 got a whole set of [concurrency utility classes](https://docs.oracle.com/javase/7/docs/api/java/util/concurrent/package-summary.html) to grant more fine-grained concurrency control.

```

 All synchronized blocks synchronized on same objects can only have one thread executing at the same time. All other threads trying to access the same object are blocked until the thread exits the synchronized blocks.
 
 ```java
public class MyCounter{
	private int count = 0;
	
	public synchronized void add(int value){
		this.count += value;
	}
	// this method is now synchronized with regards to the instance owning the method (MyCounter instance)
}
```
 
Only one synchronized block can be executed at the same time for each instance of the class.

## Synchronized Static Methods

Syncrhonizd static methods are synchronized on the class object of the class the method belings to: **MyCounter class**. Since only one class object exists in the JVM per class, only one thread can execute inside a static synchronized method in the same class.

> Thread that is holding the lock of the synchronized block can reenter the block (i.e. recursive call to the method that has synchronized block)

# Java Volatile Keyword

![[Pasted image 20220607173908.png]]

`volatile` keyword is used to mark a variable as "being stored in main memory". Every read of volatile variable will be read from the main memory, not from the CPU cache. And all the writes will be written to the main memory, not just to the CPU cache.

`volatile` keyword guarantees the visibility of changes to variables across threads. ==With non-volatile variables, they are not guaranteed when JVM will read data from the main memory into CPU caches, or writes data from CPU to main memory.== This poses synchronization issues.

## Full Volatile Visibility Guarantee

`volatile` visibility guarantee actually goes beyond the variable itself:

- If *Thread A* writes to a `volatile` variable and *Thread B* subsequently reads the same volatile variable, all variables visible to *Thread A* before writing the volatile variable will also be visible to *Thread B* after it has read the volatile variable.
- If *Thread A* reads a `volatile` variable, then all variables visible to *Thread A* when reading the `volatile` variable will also be re-read from main memory.

### Example

```java
public class MyClass {
    private int years;
    private int months
    private volatile int days;

    public void update(int years, int months, int days){
        this.years  = years;
        this.months = months;
        this.days   = days;
    }
	
	
	public int totalDays() {
		int total = this.days;
		total += months * 30;
		total += years * 365;
		return total;
	}
}
```

The `update()` method writes three variables. The `volatile` keyword of `days` guarantees that other two variables to be written to main memory as well.

The `totalDays()` ethod reads 3 variables. The `volatile` keyword of `days` guarantees that the other two variables re-read from the main memory as well.

Refer to [[Java Happens Before Guarantee]] for more detail.
 
---
## 🔎 References

- [Java Synchronized Block](https://jenkov.com/tutorials/java-concurrency/synchronized.html)
- [Java Volatile KeyWord](https://jenkov.com/tutorials/java-concurrency/volatile.html)
## 📇 Additional Metadata

- 🗂 Type:: #type/note
