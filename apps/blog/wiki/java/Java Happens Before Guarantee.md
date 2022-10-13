---
uuid: 20220607150044
created: 2022-06-07T15:00:44
last-modified: 2022-06-07T15:00:44
alias:
---

# [[Java Happens Before Guarantee]]

📑 **Tags**:  #note

The *Java Happens Before Guarantee* is a set of rules that govern how the Java VM an CPU is allowed to reorder instructions for performance gains. This is centered around access to `volitile`
 variables and variables accessed within the `synchronized blocks`.
 
 ## Instruction Reordering
 
 Modern CPUs have ability to run instructions in parellel if they do not depend on each other. The following two instructions do not depend on each other. Therefore they can run in parellel.
 
 ```java
a = b + c;
d = e + f;
// the two instructions do not depend on each other
 ```

The following two can not easily run in parelle because they depend on each other.

```java
a = b + c;
d = a + e;

// the two instructions depend on each other.
```

Imagine the instructions above were part of a larger isntruction:

```java
a = b + c;
d = a + e;

l = m + n; 
y = x + z;

// They can be reordered as such:
a = b + c;

l = m + n;
y = x + z;

d = a + e;

```

The first three instructions can run in parellel. And as soon as the first three finishes, the last fourth instruction can be executed.

Reordering instructions is allowed for the JVM and the CPU as long as the semantics of the program do not change. ==The end result has to be the same as if the instructions were executed in the exact order in the source code.==

Instruction reordering poses some challenges in multithreaded, multi CPU system.

### The Java `Volatile` Write Visibility Guarantee

`volatile` variables are guaranteed to be written directly to main memory. And all variables visible to the thread writing to the volitile variable will also get synchronized to main memory.

For example:
```java
this.nonVolatileVarA = 34;
this.nonVolatileVarB = new String("Text");
this.volatileVarC    = 300;
```

When the third instruction writes to the volatile variable, the values of the two non-volatile variables will also be synchronized to main memory. (Because they are visible to the thread when writing to the volatile variable.)

### The Java `Volatile` Read Visibility Guarantee

```java
c = other.volatileVarC;
b = other.nonVolatileB;
a = other.nonVolatileA;
```

The first instruction reads variable directly from the main memory. The following two instructions will also get refreshed read from the main memory.

### Volatile is Not Always Enough.

Although `volatile` keyword guarantees direct read/write from/to the main memory, more than one thread could be writing to the same volatile variable. The short time gap in between the reading of the `volatile`
 variable and writing of its new value could cause [[Java Concurency|race conditions]] with multiple threads
 
 ![[Pasted image 20220608124949.png]]
 
 When two or more threads are sharing a variable, using `volatile` could not be enough. You should use `synchronized` block to guarantee that the reading and writing of the variable is atomic. You need to use this block to create a [[Synchronization| Critical Section]]
 
 ```ad-info
 title: Critical Section
 Critical Section is a block of code where you modify variables that are shared by more than one threads. 
 여러 개의 쓰레드가 수행되는 시스템에서 각 쓰레드들이 공유하는 데이터(변서, 테이블 ,파일 등) 을 변경하는 코드 영역을 임계구역이라 한다
 ```
 
 As an alternative to `synchronized` blocks, you can use `java.util.concurrent` package. (`AtomicLong` or `AtomicReference`)
 
 ### Performance Issues of `Volatile`

Reading from and writing to the main memory is an extremely expensive task, and is much more expensive than accessing the CPU cache. Hence, you should only use `volatile` or `synchronized` blocks when you really need them.

![[Pasted image 20220608125344.png]]

### The Java Synchronized Visibility Guarantee

#### Java Synchronizeed Entry Visibility Guarantee

When a thread enters a `synchronized` block, all variables visible to the thread are refreshed from the main memory.

#### Java Synchronizeed Entry Visibility Guarantee

When a thread exits a `synchronized` block, all variables visible to the thread are written back to the main memory.

**Example**

```java
public class ValueExchanger {
    private int valA;
    private int valB;
    private int valC;

    public void set(Values v) {
        this.valA = v.valA;
        this.valB = v.valB;

        synchronized(this) {
            this.valC = v.valC;
        }
		// the flushing of the variables happens here.
    }

    public void get(Values v) {
        synchronized(this) {
            v.valC = this.valC;
        }
        v.valB = this.valB;
        v.valA = this.valA;
    }
}
```

In the `set()` method, the syncrhonized block will guarantee that all the writes to be synchronize to main memory after being updated. The flushing of the variables happens after the `synchronized` block. This is why it is placed last in the method. 

In the `get()` method the synchronized block is placed at the beginning of the method, which guarantees the re-read of the variable from the main memory. When the thread calling `get()` enters the `synchronized` block, all variables are refetched from the main memory. This is why it is place at the beginning of the method.

### Java Synchronized Happens Before Guarantee

#### Java Synchronized Block Beginning Happens Before Guarantee

When a thread enters a `synchronized` block, all variables visible to the thread will be refreshed from the main memory. For this to work, none of the read of the variables can be reordered to be placed *before* the beginning of the synchronized block. If placed before the block, you would lose the guarantee that the variable will be up-to-date with regards to the main memory.

#### Java Synchronized Block End Happens Before Guarantee

The end of a `synchronized` block provides the visibility guarantee that all changed variables will be written back to the main memory when the block exits.

For this to work, none of the writes to the variables should be reordered to appear after the synchronized block. You would lose the guarantee of the variable values being written back to the main memory.


---
## 🔎 References

- [Jenkov.com](https://jenkov.com/tutorials/java-concurrency/volatile.html)

## 📇 Additional Metadata

- 🗂 Type:: #type/note
