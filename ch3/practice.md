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

### 分割css
    1. 通过技术手段（例如谷歌分析），来确定用户最常访问以及偶尔访问的网站，将偶尔访问的的页面的css从整个css分割出来，提升首页的访问速度
    2. 或者根据整个网站页面的相似度进行分割，如果整体的网页，例如一级二级页面都是相同的的话，不用分割也行，但是如果有有特殊的页面，就可以把它的css分割出来

### 部分引入css框架
    1. 整体的css框架可能包含项目中并不需要的东西，这样你可以引入部分你所需要的css部分，减少项目体积。
### 手机优先
    1. 原因:使用移动设备的人越来越多，提供良好的移动端网页服务体验，能够更好的获取流量和获客
    2. 移动端优先优势:1. 项目的css复杂度较小，能够较好地扩展到pc端和平板上
    3. 使用媒体查询、em、rem 来进行响应式设计
    4. 需要使用的meta:<meta name="viewport" content="width=device-width,initial-scale=1"> 
    5. 谷歌修改了搜索排名的机制，对手机友好的网站排行会更靠前
    6. (使用谷歌提供的手机友好评测工具，来确保应用对手机端友好)['https://www.google.com/webmasters/tools/mobile-friendly/']
### 提升css的性能
    1. 在css中避免使用@import,因为@import引入的css文件不会和link标签引入的css一样，并行下载，它只会在有@import的开始下载，scss等预编译器的@import与css的@import不同。
    2. 使用link将引入的css放入header标签内,link标签能够并行下载。
    3. 第二点能够避免`fouc`也将是无样式闪烁问题的出现。
    4. 使用更快的选择器:标签、class、后代选择器更快。
    5. 使用`flexbox`布局，性能比传统布局更好，也更易写。


