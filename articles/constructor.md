# constructor

### 由对象字面量引发对`constructor`属性的思考
![image](https://github.com/Yajing99/blog/blob/master/images/constructor/1%E9%97%AE%E9%A2%98%E6%80%9D%E8%80%83.png)

太奇怪了，这里的变量`obj`我记得不是没有原型的嘛，难道它自身就有`constructor`属性？

（驳自身就有`constructor`属性想法）引用MDN上的一句话：
>所有对象都会从它的原型上继承一个 `constructor` 属性


忽而又想到了`Object.create()`方法，实践一下：
![image](https://github.com/Yajing99/blog/blob/master/images/constructor/2%E5%BC%95%E5%8F%91%E5%AF%B9Object.create%E7%9A%84%E6%80%9D%E8%80%83.png)

又懵了== 但是倒是想起来了`__proto__`!

**`__proto__`指向该对象的原型**，下面这样就没错了，完美的解释了上面的`constructor`属性为什么指向了`Object`(～￣▽￣)→))*￣▽￣*)o

![image](https://github.com/Yajing99/blog/blob/master/images/constructor/3%E5%AF%B9%E9%97%AE%E9%A2%981%E7%90%86%E8%A7%A3.png)
![image](https://github.com/Yajing99/blog/blob/master/images/constructor/%E5%AF%B9%E8%B1%A1%E5%AD%97%E9%9D%A2%E9%87%8Fconstructor%E6%8C%87%E5%90%91%E8%A7%A3%E9%87%8A.png)
obj本身无`constructor`，通过`__proto__`找到自己的原型后，发现自己的原型上有`constructor`属性于是便有了答案
 


但是为什么上面的`Object.create()`方法中明明是基于已有的Object来创建一个新对象，这怎么还和`Function`扯上了关系呢？
先来看看`Object.create()`方法的用处：
>红书上说：ES5新增的`Object.create()`方法规范化了原型式继承，即借助原型可以基于已有的对象创建新对象同时还不必因此自定义类型，道格拉斯·克罗克福德给出了如下函数：
```javascript 
function object(o) {
	function F() {}
	F.prototype = o;
	return new F();
}
```
很好的解释了上面的`objcreate.__proto__ === Object`答案是`true`是正确的。
下面我们可以来画一张图来解释上面的情况：

![image](https://github.com/Yajing99/blog/blob/master/images/constructor/%E5%AF%B9object.create%E8%A7%A3%E9%87%8A.png)

### 补充+说明
1. `objcreate.prototype.__proto__`为空等于null
2. `Object.create()`方法创建一个新对象是通过现有的对象来提供新对象的`__proto__` 
3. 通过对象字面量创建的对象没有原型，包括箭头函数、对象实例也是一样没有原型