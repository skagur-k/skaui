---
uuid: 20220606130155
created: 2022-06-06T13:01:55
last-modified: 2022-06-06T13:01:55
alias:
- Memory Management
- Garbage Collection

---

# [[Memory Management in Java]]

📑 **Tags**:  #note #memory-management #javascript #nodejs

Every Application needs proper memory management. Memory management provides ways to dynamically *allocate* memory chunks for programs, and *free* them when they are no longer needed.

Application-level memory management can be *manual* or *automatic*. Automatic memory management involves garbage collectore.

In manual memory management, it is the responsibility of the developer to free up unused memory. Languages have low-level management primitives like `malloc()` and `free()`. Manual memory management can introduce several major bugs to the application:
- **Memory Leaks**: used memory is never freed up.
- **Wild/dangling pointers**: object is deleted but the pointer is reused.


## MEMORY LIFECYCLE

![[Pasted image 20220606155948.png]]

The compiler and the OS work together to take care of most of the memory management.

When code is compiled, the compiler examines primitive data types and calculate ahead of time how much memory will be needed.

This required amount is allocated to the program in the call **stack space**

-   Functions get called, memory is added on top of the existing memory.
-   When terminated, they are removed in a LIFO order.

When functions call other functions, each gets its own stack space when called. → keeps all local memories there. → freed up when done.

### Dynamic Allocation

The program explicitly asks the OS for the right amount of memory at *run-time*. This memory is assigned to the **heap space**. 

![[Pasted image 20220606160210.png]]


## Runtime Data Area

![[Pasted image 20220607014153.png]]

All threads share **Heap** and **Method Area**.
Each thread has its own **Stack, PC Register & Native Method Stacks**

**PC  Registers**: Generated when thread is spawned. PC Registers record what instruction the corresponding thread has to execute.

> JVM runs in a Stacks-Based way. JVM does not execute instructions directly in the CPU, but pops `operands` from a designated memory space: ==PC Registers==

**Method Area**: During program execution, when a class is used, JVM parses and analyses corresponding `.class` file and stores `local variables`, `method code`, etc in Method Area. Method Area gets created during JVM start-up; generally part of Heap area.

```ad-important
Method area is a logical part of the heap area.
Allocated for class structures, method data and constructor field data, and for interfaces or special method used in class

```


`Method Area` contains per-class elements like:

- Type Information 
	- Class & Interface Information: name, type, modifiers (public / abstract / final) 
- Runtime Constant Pool
	- Type, Field, Method's entire `Symbolic Reference`
- Field Information
	- Field Type
	- Field modifier (public/private/protected/static/final/volatile/transient)
- Method Information
	- Method Name, Return Type, Parameters & Type, Modifiers, byteCode, Stack Frame's Operand Stack & Local Variable Section
- Class Variable (`Static` keyword)
	- All instances share class variables, and can access without instanciating
	- The variable belongs to class, not the instance
	- Variables are allocated memory before using the class
	- `final class` variables become constants and are copied into Runtime Constant Pool

### Heap 

Objects that are created/instanciated with the `new` keyword are stored in Heap. Programs allocate Heap memory abundantly and is the only memory space subject to Garbage Collection.

- Heap is allocated for all class intances and array.
- JVM provides user control to initiailize or vary the size of heap. When `new` keyword is used, object is assigned a space in heap, but reference exists in the stack frame of the method that used the keyword.
- There exists one and only one heap for a running JVM Pocess.

Java implicitly or explicitly extends the class from Object.class. This means that every class we create is a collection of objects. We can not use a method or variable unless we instanciate the object on to the heap memory using the `new` keyword.

```java
Scanner sc = new Scanner(System.in);
// this creates object of Scanner class and allocates in in heap.
// the reference `sc` lives in the stack
```

To access same variable or object from all the threads, we can initialize them  as `static`. They are stored in a special area called `Permanent Generation (PermGen)`, or `MetaSpace (Java 8)`


#### Java 7 HotSpot JVM
```
<----- Java Heap ----->             <--- Native Memory --->
+------+----+----+-----+-----------+--------+--------------+
| Eden | S0 | S1 | Old | Permanent | C Heap | Thread Stack |
+------+----+----+-----+-----------+--------+--------------+
                        <--------->
                       Permanent Heap
```

#### Java 8 HotSpot JVM
```
<----- Java Heap -----> <--------- Native Memory --------->
+------+----+----+-----+-----------+--------+--------------+
| Eden | S0 | S1 | Old | Metaspace | C Heap | Thread Stack |
+------+----+----+-----+-----------+--------+--------------+
```

![[Pasted image 20220607130619.png]]

1. **Young Generation**(Nuersery): All the new objects are allocated here. Whenever this memory gets filled, [[Garbage Collection|Minor Garbage Collection]] is performed. This is called *Minor Garbage Collection*
2. **Old Generation**: All objects that survived *Eden* & *Survivor* garbage collection is stored in this area. When this memory gets filled, Major Garbage Collection is Performed

#### Permanent Generation to Metaspace

**PermGen Memory**: Special space in Java Heap which is separated from the main memory where all the *static content* is stored. It also stores application metadata required by the JVM. Garbage Collection is also performed in PermGen. String Pool was also part of PermGen befoe Java 7.

==Method Area== is a part of space in PermGen and is used to store the class structure and the code for methods and constructors.

The biggest disadvantage of PermGen was that the size was fixed. ==(default size of PermGen is 64 MB on 32-bit JVM & 82 MB on the 64-bit version)==. Because of this the JVM had to frequently perform Garbage Collection whenever this memory was filled up, which is a very costly operation.

Because of this, `PermGen` was completely removed since Java 7, and was replaced with `MetaSpace` from Java 8

`MetaSpace` grows automatically by default, and garbage collection is triggered when the class metadata reaches its maximum metapace size.

**Key Differences between PermGen and MetaSpace**

| Permgen                        | MetaSpace                                              |
| ------------------------------ | ------------------------------------------------------ |
| It is removed from Java 8      | It is introduced in Java 8                             |
| Has fixed maximum size         | auto increases its size depending on the underlying OS |
| Contiguous Heap Memory         | Native Memory (provided by the OS)                     |
| Inefficient Garbage Collection | Efficient garbage collection                           |
|                                |                                                        |



Since Java8, the Permanent Generation in JVM's runtime data area has been changed to MetaSpace. *Metaspace, unlike Permgen, does not live in Heap area, but in Native Memory Area.*

Terms used interchangebly with *Metaspace*: `Native Area` `Native Memory` `Off-Heap` `Non-Heap` `Direct Memory`

Meta space is not controlled by the JVM, but is controlled by the underlying OS. Therefore, the developer does not have worry about the sufficient memory allocation (maximum heap size), and about Out Of Memory Error. 


### JVM Stacks

JVM Stack is a memory space where it's used for Thread control. Stack is created every thread spawn and is filled up as methods are invoked. When a method is called, the method and the method information is stored in the stack and is removed from the stack point when the method returns.

==Since all threads share heap memory, you must architect the program in a thread safe way.== Take a closer look at multithreading in this note: [[Multithreading in Java]]

---
## 🔎 References

- [Node JS at Scale](https://resources.risingstack.com/Node.js+at+Scale+Vol.+2+-+Node.js+Under+the+Hood.pdf)

## 📇 Additional Metadata

- 🗂 Type:: #type/note
