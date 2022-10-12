---
uuid: 20220607130438
created: 2022-06-07T13:04:38
last-modified: 2022-06-07T13:04:38
alias:
---

# [[Multithreading in Java]]

📑 **Tags**:  #note #java #memory #multithreading

 <iframe width="560" height="315" src="https://www.youtube.com/embed/LCSqZyjBwWA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Hardware Memory Architecture

Modern hardware memory architecture is somewhat dfiferent from the internal Java memory model. Refer to the following diagram:

![[Pasted image 20220607142829.png]]

A modern computer often has 2 or more CPUs and CPUs may have multiple cores. And there may be more than one thread running simultaniously within each core. Each CPU core is capable of running one thread at a time. If a Java application is multithreaded, then more than one thread per CPU may be running simultiniousy (*concurrently*) inside the Java application.

Each CPU contains a set of registers (in-CPU memory). CPUs can perform much faster on these operations than it can perform on main memory. Each CPU may also have a CPU cache memory layer. Cache Memory may be faster than the main memory but is slower than the registers within CPU.

Tyepically, when a CPU needs to access main memory, it will read part of the main memory and load it onto the cache. It may even read from the cache and load to the register to perform an operation on it. 

>When the CPU needs to write the result back to the main memory, the CPU will have to flush the data from the register to the cache memory. And eventually the data will have to be flushed from the cache to the main memory.

The CPU will flush the cache memory into the main memory when it has to store something else.

## Bridging the gap between Java Memory Model and The Hardware Architecture

![[Pasted image 20220607143634.png]]

The hardware memory architecture does not distinguish between thread stacks and heap. They are just chunk of memory data residing in the main memory. Parts of the thread stacks and heap may be pressent in CPU caches and in registers.

When objects anad variables can be stored in different memory areas in the computer, certain problems may arise: 
1. Visibility of thread updates (writes) to shared variables.
2. Race conditions when reading, checking and writing shared variables.

### Visibility of Shared Objects

If two or more threads are sharing an object without proper thread-safe synchronizations (use of either `volatile` declaration or synchronization block), updates to the shared object made by one thread might not be visible to other threads.

- Imagine the shared object is stored in the main memory.
- A thread running on *CPU-1* reads the object into the CPU-cache.
- *CPU-1* makes changes to the mobject. The object has not yet been flushed from the cache to the main memory; hence the changes made to the shared object is not yet visible to other threads.
- Threads might end up having their own copies of the object in a different CPU cache.
 
![[Pasted image 20220607144143.png]]

To solve this issue, we can use Java's `volatile` keyword. This makes sure that the given variable is read directly from main memory and always written back to main memory when it is updated.

### Race Conditions

If two or more threads share an objeect, and more than one thread updates variables in the object, **race conditions** may occur. 

- Imagine *Thread A* reads the variable `count` of the object into the CPU cache.
- Imagine *Thread B* does the same.
- *Thread A* increments the variable by 1, and *Thread B* does the same. `count` has been incremented twice.
- But in reality `count` has been incremented only by 1.
- The two operations have been carried out concurrently, without any proper syncrhonization.

![[Pasted image 20220607144559.png]]

==To solve this problem, you can use `Java synchronization block`. This guarantees that only one thread can enter a given critical section of the code at any given time.== It also guarantees that variables accessed inside the block will be read in from the main memory and when the thread exits the synchronized block, all updated variables will be flushed into the main memory, regardless of the `volatile` keyword..

---
## 🔎 References

- [Java  Memory Model](https://jenkov.com/tutorials/java-concurrency/java-memory-model.html#java-memory-model-tutorial-video)

## 📇 Additional Metadata

- 🗂 Type:: #type/note
