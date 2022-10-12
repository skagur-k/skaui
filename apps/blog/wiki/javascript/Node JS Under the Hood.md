---
uuid: 20220606115052
created: 2022-06-06T11:50:52
last-modified: 2022-06-06T11:50:52
alias:
---

# [[Node JS Under the Hood]]

📑 **Tags**:  #note #javascript #nodejs

The most important thing is that the Operating System (OS) does not know `Javascript` or `Node.JS`. It only understands `C++`.

Take a look at the image below:

![[Pasted image 20220606115319.png]] 

*There are three realms in the Node.JS Application:*
1. `Javascript` code that we write.
2. `V8` (Developed by Google) that compiles `Javascript` code directly to native `C++` code.
	1. `libuv` is a multi-platform C++ library that provides support for [[Event Loop & Asynchronous  IO]] I/O based operations like file system, networking and concurrency.
3. `Node JS` works as an interface that executes the code in `C++` and allows access to the API of `libuv` and `v8` libraries. 

![[Pasted image 20220606120319.png|500]]

## Deep dive

![[Pasted image 20220606120508.png]]

1. `lib` is where we get access to while developing applications.
	- contains all of the JS definitions of all the functions and modules that are required in the projects -- **JS side of the node project**
2. `src` is the **C++** world which uses `libuv` and `v8` libraries.
	- C++ implementation of all the functions. Node pulls tools in the libuv and project and flushes out the actual implementation.

### `pbkdf2` Crypto Library  (lib)

```js

const { pbkdf2: _pbkdf2 } = internalBinding('crypto');  
  
function pbkdf2(password, salt, iterations, keylen, digest, callback) {  
	if (typeof digest === 'function') {  
	callback = digest;  
	digest = undefined;  
	}  
  
	({ password, salt, iterations, keylen, digest } =  
	check(password, salt, iterations, keylen, digest));  
  
	if (typeof callback !== 'function')  
	throw new ERR_INVALID_CALLBACK(callback);  
	//calling the src c++ version of pbkdf2  
	handleError(_pbkdf2(keybuf, password, salt, iterations, digest, wrap),  
	digest);  
}

```

![[Pasted image 20220606121047.png]]

`process.binding` bridges Javascript world to the C++ code.

### C++ version of the crypto library (src)

```cpp node_crypto.cc
inline void PBKDF2(const FunctionCallbackInfo<Value>& args) {  
	auto rv = args.GetReturnValue();  

	CHECK(args[4]->IsString()); // digest_name  
	std::unique_ptr<PBKDF2Job> job(new PBKDF2Job(env));  

	env->PrintSyncTrace();  
	job->DoThreadPoolWork();  
	rv.Set(job->ToResult());  
}  
env->SetMethod(target, "pbkdf2", PBKDF2);  
env->SetMethod(target, "generateKeyPairRSA", GenerateKeyPairRSA);

```

> [!summary]
> The `PBKDF2` method in the `node_crypto.cc` C++ file in src directory is called by the `pbkdf2` of the lib directory.
> SetMethod is exporting the method pbkdf2 as `PBKDF2` to the outside world. 


## `libuv` & `v8` libraries

```cpp
using v8::Array;  
using v8::Boolean;  
using v8::Exception;  
using v8::External;  
using v8::False;  
using v8::Function;  
using v8::Int32;  
using v8::String;  
  
#include <uv.h>  
  
int main() {  
	loop = uv_default_loop();  

	uv_tcp_t server;  
	uv_tcp_init(loop, &server);  

	struct sockaddr_in bind_addr = uv_ip4_addr("0.0.0.0", 7000);  
	uv_tcp_bind(&server, bind_addr);  
	int r = uv_listen((uv_stream_t*) &server, 128, on_new_connection);  
	if (r) {  
		fprintf(stderr, "Listen error!\n");  
		return 1;  
	}  
	return uv_run(loop, UV_RUN_DEFAULT);  
}
```

This `libuv` snippet is initializing new tcp connection. It is importing `C++` definition of JS objects (Array, Boolean). The V8 translates JS objects into `C++`  equivalents.

---

## 📇 Additional Metadata

- 🗂 Type:: #type/note
- 🔎 References
	- [Node.JS Under the Hood](https://betterprogramming.pub/learn-node-js-under-the-hood-37966a20e127)
	- 