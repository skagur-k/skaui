---
uuid: 20220608125718
created: 2022-06-08T12:57:18
last-modified: 2022-06-08T12:57:18
alias:
---

# [[Synchronization]]

📑 **Tags**:  #note

![[Pasted image 20220608133706.png]]

## Mode, Space, Context

- **Mode**: user & kernel mode
- **Space**
	- Kernel Space: System wide & shared by all processes
		- Kernel Segment (kernel code, data structure, kernel address map)
	- User Space: per process & private
		- User area, text, data, stack, shared memory region
- **Execution Context**
	- Process Context: kernel executes on behalf of a process (system call)
	- System Context: kernel executes system-wide task (disk or network interrupt handling)

### User Mode

- User mode is restricted mode of operation; applications run in user mode. When starting a user process, the operating system creates a process for it and provides a private [[Virtual Memory|virtual [memory]] space] for it. The application is isolated from other processes and is does not affect other programs when it crashes.

## User Mode Synchronization

- [[Java Concurency|Volatile]]
- [[Java Concurency|Synchronization Block]]

 ```ad-info
 title: Critical Section
 Critical Section is a block of code where you modify variables that are shared by more than one threads. 
 여러 개의 쓰레드가 수행되는 시스템에서 각 쓰레드들이 공유하는 데이터(변서, 테이블 ,파일 등) 을 변경하는 코드 영역을 임계구역이라 한다
 ```
 
 ==Critical Section should allow one and only one thread within the same process to access the variable.== Since **Critical Section** is a user mode synchronization mechanism, it is light and fast compared to *kernel mode synchronization*.
 
 It does not have to do *context switching* between user mode and kernel mode. But there is context switching between threads. The first thread obtains a `lock` through `EnterCriticalSection`. Other threads that try to access same data `wait()`s, until the first thread releases the `lock` through `LeaveCriticalSection`. The waiting thread has to pass CPU resource to other thread; this is where *Context Switching* happens.
 
```ad-question
title: Can context switch take place while in a critical section?
No, a context switch can happen almost anywhere. While it's generally a good idea to hold locks for as brief a time as possible, you wouldn't want your entire machine to lock just because one process had as many threads holding locks as there are cores, waiting for something to happen, would you?

The point of a lock is to prevent code which might interfere with the code in the lock from being executed - it's not to stop _all_ other code from being executed, in every process in the system. (A context switch to a different process is still a context switch, after all.)

[StackOverflow](https://stackoverflow.com/questions/3103578/can-context-switch-take-place-while-in-a-critical-section)

```

 
 
 The most representative synchronization primitives are **mutexes, semaphores and condition variables.**


### Kernel Mode

Kernel most is unrestricted mode. Core Operating System components run in kernel mode. CPU may perform any operation allowed by the architecture; any instruction may be executed, any I/O operations initiated, any area of memory accessed, etc.

## Kernel Mode Synchronization

![[Pasted image 20220608144602.png]]

![[Pasted image 20220608144744.png]]

### Mutex

**Mutex**, or mutual exclusion, is a locking mechanisms to fullfil synchronization in kernel level. In essence, Mutex prevents other threads, other than the thread actually using the resource, from accessing the critical section. Other threads must `wait` until the resource is freed from the `lock`. 

==One and only one thread can use the resource under Mutex==. If a thread *owns* the `lock` of a particular resource, other threads must wait until the `lock` is *released*. 

Technically, a *mutex* is a global object in your application, shared across multiple threads.

*Critical Section* oversees synchronization of threads within **one process**. *Mutex* oversees synchronization of threads of **multiple processes**.

```
wait (mutex); 
// other threads wait until this thread finishes operation
…..
Critical Section
…..
signal (mutex);
// other threads are signaled that this thread has finished using it.
```

#### Reentrant Mutex

In normal mutex operations, trying to lock an already locked resource causes error. *Reentrant mutex* allows this. A thread can `lock` a resource multiple times by recursively calling a function, without `unlocking` the resource. ==However, no other threads can access this resource until all the locks have been released.== This mechanism is difficult to implement and is prone to errors.

#### Reader/Writer Mutex

**Reader/Writer Mutex** allows multiple *concurrent* reads, but *exclusive* writes from a single thread to a particular resource. To modify a resource, the thread must acquire an exclusive write lock to the resource.

![[Pasted image 20220608155146.png]]

![[Pasted image 20220608155249.png]]


### Semaphore

**Semaphore** is similar to *Mutex*, but it permits preassigned number of threads (of different processes) to access the resource (One or more). *Semaphore* is a signaling mecahnism. A thread that is waiting on a semphore can be ==signaled== by other thread. A Semaphore is a synchronization primitive that orchestrates threads: ==which one starts first , how many threads can access a resource, etc.==. Think of it as a traffic light for threads.

Technically, *Semaphore* is a global object shared across multiple threads that contains *numeric counter* managed by two functions: one that increases counter (**P**), and one that decreases it (**V**). Modern implementations use a more friendly names for those functions: `wait` and `signal`.

![[Pasted image 20220608151031.png]]

![[Pasted image 20220608151041.png]]

The counter determines the maximum number of threads that can access a resource. The thread that wants to access the resource calls `wait`:
- If the counter is *greater than zero*, the thread can proceed. The counter gets reduced by one, and the thread runs. When it's done, it calls `signal` which increases the process by 1.
- If the counter is *equal to zero*, the thread cannot proceed. (==The counter essentially means the remaining number of threads that can access the resource.==). The thread is put to sleep by the operating system and will wake up when the counter becomes greater than zero. (This is when other thread calls `signal`).

==An implementation with no busy waiting requires an integer value (Semaphore Value) and a pointer to the next process in the waiting list.== The list consists of processes that are put to sleep on the *wait* for operatiaon. The kernel uses two additional operations: `block` and `wakeup`.

Unlike *mutex*, any thread can release *semaphores*, not only the thread that initially acquired it. 

By combining multiple semaphores together, you can solve thread ordering problems:
- Thread that renders a web page in the browser must start after the thread that downloads the HTML files from the internet.
- Thread A would notify Thread B when it's done, so that B can wake up and proceed with its job:  [[Synchronization#In Order Execution using Semaphores|In Order Execution]] and [[Synchronization#Producer-Consumer Problem|Producer-Consumer Problem]]. 

> There are two types of semaphores: *Binary Semaphore* and *Counting Semaphore*. ==Binary Semaphore is pretty much similar to *Mutex*.== The difference is that the *Mutex* is a locking mechanism while *semaphore* is a signaling mechanism. Also, in *Mutex*, only the thread that `locked` the resource can release the lock. In *Semaphore*, any thread can release the semaphore.

### Busy Waiting

**Busy Waiting** (also known as *Spinning/Busy Looping*) is a synchronization technique in which a task is constantly checking for a condition to be satisfied before executing.

There are two approaches to waiting in Operating System:
- Task continously check for the condition to be satisfied while *consuming the processor* -> **Busy Waiting**
- A process can wait without consuming the processor. The process is alerted when the condition is satisfied (**sleeping waiting**)

==Busy Waiting is used in Mutex and Sleep Waiting is used in Semaphores==

#### Problem with Busy Waiting

Busy waiting can be inefficient because the looping procedure can waste CPU resources, and the system is left idle while waiting. A workaround solution for this inefficiency is implementing a delay function:

![[Pasted image 20220608150530.png]]

After the sleep time has elapsed, and the condition is still not satisfied, the sleep duration is incremented and the task falls into an *inactive* state.


![[Pasted image 20220608150007.png]]


Although it is iniefficient, *Busy Waiting* may be desirable if the waiting time is short and insignificant. It may be beneficial for impelmenting *spinlocks*. Spinlock enforces a spin/waiting loop on a process that is trying to access a shared resource. 

### In Order Execution using Semaphores

We can achieve in-order excution of code fragments using *Semaphore*. We set the initiala value of the *semaphore to 0*.

![[Pasted image 20220608151805.png]]

![[Pasted image 20220608151810.png]]

We can guarantee that *Process 1* only runs after *Process 0* finishes executing.
- *Process 1* goes to sleep because the Semaphore count value is set to 0.
- Once *Process 0* finishes, it will increment the count value by 1, signaling *Process 1* to run.

### Producer-Consumer Problem

![[Pasted image 20220608152412.png]]

Initially `S` is set to 0. As the producer pupts an item into the buffer, the semaphore is increased by 1 by the `signal` operation. With the signal, the consumer consumes an item and decrements the semaphore by 1 by the `wait` operation. When the consumer finishes the last item in the buffer, it is put into sleep by the `wait` operation (`S` is set to 0).
 
#### Bounded Buffer Producer-Consumer Problem

On top of the solution above, we can force the producer to sleep if the buffer is full by adding two more semaphores.

![[Pasted image 20220608152852.png]]


If the `empty` semaphore becomes 0, the producer goes to sleep since there are no more empty cells in the buffer.
The *Producer* waits on semaphore `S` befeore accessing the buffer. If another process is already waiting, it goes to sleep.
After producing an item, it signals the `full` semaphore, waking up any consumer that is waiting.

If the `full` semaphore is 0, there is no item to be consumed in t he buffer. The *Consumer* is put to sleep.
If semaphore `S` is 0, there is another process already accessing the buffer. The *Consumer* is put to sleep until it is signaled to wake up.
Finally, the `empty` semaphore wakes up any semaphore that has something to put into the buffer, and the *Consumer* consumes the item.

==This ensures that the *Producer* sleeps until there is a slot available in the buffer, and *Consumer* also sleeps until there are items to consume.==


**Producer**
- *Producer*: produces an item.
- `wait(empty)`: decrements number of available cell by 1.
- `wait(S)`: 0 (prevents concurrent access)
- *Producer* puts the item into the buffer.
- `signal(S)`: releases the buffer.
- `signal(full)`: increments number of cells full by 1.

**Consumer**
- *Consumer*: `wait(full)` to wait for the item to be filled by the *Producer*. If available, decrement the number of cells full by 1.
- `wait(S)`: gains access to the buffer and decrements the semaphore by 1.
- *Consumer*: consumes the next item from the buffer.
- `signal(S)`: releases the access to the buffer and increments the semaphore by 1.
- `signal(emtpy)`: increments the number of remaining number of cells in the buffer by 1.
- *Consumer* consumes the item.


---

## 🔎 References

- [Internal Pointers](https://www.internalpointers.com/post/introduction-thread-synchronization)
- [BaelDung](https://www.baeldung.com/cs/semaphore)

## 📇 Additional Metadata

- 🗂 Type:: #type/note
