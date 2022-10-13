---
uuid: 20220608134101
created: 2022-06-08T13:41:01
last-modified: 2022-06-08T13:41:01
alias:
---

# [[Process & Thread]]

📑 **Tags**:  #note


## Thread Pooling

*Thread Pool* is a pool of threads that can be reused to execute tasks, so that each thread may execute more than one task. This reduces the overhead of creating new threads everytime you need to execute a task.

Using a thread pool makes it easier to control how many theads are active at a time. Each thread consumes a certain amount of resources. Therefore, if you have too many threads active at the same time, it may slow down the system. If too much memory is consumed by the threads, the operating system starts swapping RAM out to disk. (To reduce this overhead, Javascript adopted Single Threading. [[Event Loop & Asynchronous  IO]])

![[Pasted image 20220608160543.png]]

Instead of creating a new thread for each task, tasks are initially inserted into a Blocking Queue. When a new task is inserted, one of the idle thread dequeues the item from the queue and execute it. The rest of the idle threads wil wait until new task is inserted into the queue.

Thread pools are usually used in multi-threaded servers. Connections arriving at the server over the network is wrapped as a task and are passed into the thread pool. Threads in the pool will dequeue the tasks from the queue and handle the connections concurrently.



---
## 🔎 References

- 

## 📇 Additional Metadata

- 🗂 Type:: #type/note
