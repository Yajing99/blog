# HTML5拖拽拖放
## 效果图
注：本人是用react编写的拖拽拖放交换位置代码，所以就不贴我的代码了，下面附上了原生js编写的代码，核心代码是一样的(((*°▽°*)八(*°▽°*)))♪
![image](https://github.com/Yajing99/blog/blob/master/images/draggable.gif)
## 设置节点可拖拽
默认不可拖拽：
```html
<div draggable="false"></div>
```
改为可拖拽：
```html
<div draggable="true"></div>
```

## 了解拖放事件
**在被拖动的元素上触发**
(1) dragstart
(2) drag
(3) dragend
**在放置目标上触发**
(1) dragenter
(2) dragover
(3) dragleave或drop

## 写代码
**注：需重写dragenter和dragover事件默认行为才能把任何元素变成有效的放置目标（亲测只取消dragover事件默认行为也是可以的🤔🤔）**
```html
<div draggable = "true"  id = "one">...</div>
<div draggable = "true"  id = "two">...</div>
<div draggable = "true"  id = "three">...</div>

<script>
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var eDrag;

    one.ondragover = function(e) {
        e.preventDefault();
    }
    two.ondragover = function(e) {
        e.preventDefault();
    }
    three.ondragover = function(e) {
        e.preventDefault();
    }   
    one.ondrag = function(e) {
        eDrag = e.target.id;   
    }
    two.ondrag = function(e) {
        eDrag = e.target.id;   
    }
    three.ondrag = function(e) {
        eDrag = e.target.id;   
    }
    one.ondrop = function(e) {
        if(eDrag) {
            e.target.parentNode.appendChild(document.getElementById(eDrag));
        }
    }
    two.ondrop = function(e) {
        if(eDrag) {
            e.target.parentNode.appendChild(document.getElementById(eDrag));
        }
    }
    three.ondrop = function(e) {
        if(eDrag) {
            e.target.parentNode.appendChild(document.getElementById(eDrag));
        }
    }
</script>
```

