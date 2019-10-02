/*考虑全面版 instanceof的实现*/
//红书上关于instanceof描述是：
//如果变量是给定引用类型的实例，那么instanceof操作符就会返回true;
//所有引用类型的值都是Object的实例，因此在检测一个引用类型值和Object构造函数时instanceof操作符始终会返回true

function instanceOf(left, right) {
    if(typeof left != 'object' && typeof left != 'function' || left === null) {
        return false;
    }
    while(left.__proto__) {
        if(left.__proto__ === right.prototype) {
            return true;
        }
        left.__proto__ = left.__proto__.__proto__;
    }
    return false;
}