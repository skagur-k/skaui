---
uuid: 20220608160656
created: 2022-06-08T16:06:56
last-modified: 2022-06-08T16:06:56
alias:
---

# [[Blocking Queue]]

📑 **Tags**:  #note

A *Blocking Queue* is a queue data structure that **blocks** when you try to dequeue from it and if the queue is empty, or if you try to enqueue to it and the queue is full.

A thread that is trying to dequeue from the empty queue is blocked until another thread inserts an item into the queue.

A thread that is trying to enqueue to the queue that is full is blocked until another thread dequeues an item from the queue.

![[Pasted image 20220608160904.png]]

## Blocking Queue Implementation

```java
public class BlockingQueue {

  private List queue = new LinkedList();
  private int  limit = 10;

  public BlockingQueue(int limit){
    this.limit = limit;
  }


  public synchronized void enqueue(Object item)
  throws InterruptedException  {
    while(this.queue.size() == this.limit) {
      wait();
    }
    this.queue.add(item);
    if(this.queue.size() == 1) {
      notifyAll();
    }
  }


  public synchronized Object dequeue()
  throws InterruptedException{
    while(this.queue.size() == 0){
      wait();
    }
    if(this.queue.size() == this.limit){
      notifyAll();
    }

    return this.queue.remove(0);
  }

}
```






---
## 🔎 References

- 

## 📇 Additional Metadata

- 🗂 Type:: #type/note
