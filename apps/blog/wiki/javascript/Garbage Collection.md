---
title: 'Garbage Collection'
date: '2022-06-04'
category: 'Javascript'
github: 'https://github.com/skagur-k'
---

# [[Garbage Collection]]

📑 **Tags**: #note #garbage-collection #memory-management #javascript

## Garbage Collection Methods

==Definitions:==

- **Resident Set Size**: portion of memory occupied by a process that is held in the Ram
  - the code itself,
  - the stack,
  - the heap
- **Stack**: Contains primitive types and references to objects
- **Heap**: Stores reference types, like objects, strings or closures
- **Shallow size of an object**: size of memory that is held by the object itself.
- **Retained size of an object**: size of the memory that is freed up once the object is deleted along with its dependent objects.

Garbage collection is the process of reclaiming the memory occupied by objects that are no longer in use by the application. Memory allocation is cheap while it is expensive to collect when the memory pool is exhausted.

Objects that are unreachable from the root node are candidates for garbage collection.

_The Heap_ has two main segments: **New Space** and **Old Space**. New space is where new allocations are happening; fast to collect garbage and has size of _1-8 MBs_. Objects living in the New Space are called Young Generation.

**Old Space** is where objects that survive the collector in the New Space are promoted into. They are called Old Generation. Allocation in the old space is fast, but collection is expensive; hence, the collection is infrequently performed.

```ad-faq
title: Why is garbage collection expensive?
V8 Javascript engine employs a **stop-the-world** garbage collector mechanism. The program stops execution while garbage collection is in progress.

```

Collection in the Old Space will only perform once it is getting exhausted. The V8 Engine uses two different collection algorithms:

- **Scavenge Collection**: fast and runs on the Young Generation
- **Mark and Sweep Collection**: slower and runs on the old generation.

The job of _Garbage Collector_ is to reclaim memory occupied by unused objects. High-level languages are embed with this _Garbage Collector_. It tracks memory allocation and uses in order to find no-longer needed allocated memory and automatically frees it.

```ad-warning
However, knowing whether some piece of memory is needed is undecidable. GC, therefore uses *Approximation*

```

#### Memory References

Garbage Collection algorithms rely on **references**. An object is said to reference other object if the former has an access to the latter (implicit/explicit).

- Reference to prototype -> Implicit Reference
- Reference to its properties' values -> Explicit Reference

Reference-counting garbage collection

An object is considered "garbage collectible" if there are **zero** references pointing to it.

**Cycles create problems —** ex. Two objects are created and reference one another → cycle.

They will go out of scope after the function call but reference-counting algorithm considers them as garbage-non-collectible.

```js
function f() {
	var o1 = {}
	var o2 = {}
	o1.p = o2 // o1 references o2
	o2.p = o1 // o2 references o1. This creates a cycle.
}

f()
```

![[Pasted image 20220606160757.png]]

#### Mark-and-sweep algorithm

This algorithm determines whether the object is reachable.

**3-steps:**

1.  Roots: global variables which get referenced in the code. A complete list of all roots gets built by the garbage collector (i.e "window" object)
2.  Algorithm inspects all roots and their children and marks them as active. Anything that a root caannot reach will be marked as garbage.
3.  Garbage collector frees all unreached memory pieces and returns them to the OS

![[Pasted image 20220606160710.png]]

**Counter intuitive behavior of Garbage Collectors**

Garbage Collectors are non-determinism → Can't tell when a collection will be performed.

---

## 🔎 References

-

## 📇 Additional Metadata

- 🗂 Type:: #type/note
