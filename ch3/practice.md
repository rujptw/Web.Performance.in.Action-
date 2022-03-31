##  css 优化
### 写短属性，并在项目中保持一致
    1. 例如border，background，margin，padding，font 
    2. [可以短写的属性:](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#tricky_edge_cases)
    3. [参考链接:](https://blog.csdn.net/qq_35718410/article/details/81223793)
    4. 例子: font:12px bold;background: #ccc url('../test.png')
   
### 使用DRY原则
    1. 运用方式:不要重复声明选择器,使用公共样式来代替需要重复声明的样式，
### 去除未使用的css，去除冗余的样式
    1. 使用uncss,vue-clearcss及其他工具去除未使用的样式
    2. 使用csscss来检测是否重复声明了样式，从而合并样式


