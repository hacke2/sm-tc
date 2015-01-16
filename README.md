sm-tc.js
-----------------------------------------

>sm-template-convert author:xingmling.wang@shenma-inc.com


很多同学喜欢讲模板写在JS里面便于缓存，
HTML模板弄到JS有两种方式：

 1.字符串
 2.数组


数组的可维护行好，一般都会使用,但手动吧HTML转为数组很痛苦

所以我写了个插件sm-tc,就是把html转为js数组的

 使用方法：
```shell
node sm-tc
输入要转的html文件名(不写.html)
输入要生成的js文件名(不写.js)
  输出完成
```
`注意事项`：需依赖prompt.js，已在git同目录下