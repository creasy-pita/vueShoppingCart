# myshoppingcart

### 2020年1月20日

#### 通过添加的插件 EndWebpackplugin 的 注册方法到 shouldemit钩子函数  来访问 htmlwebpackplugin  修改template 属性（及模板路径） 后并没有改变 lib  方式build的 模板路径即还是原来的 \node_modules\@vue\cli-service\lib\commands\build\demo-lib-js.html

#### vue.config.js 中在加入一个新的htmlwepackplugin， 用新的模板输出新的demo.html 达到预期的效果


### 2020年1月7日

#### vue 实现 shoppingcart 组件的练习
#### 用于熟悉vue2,vue3 -cli 创建project 的过程和 默认产生的工程文件结构
#### 多环境用途的配置方式，本例中增加 预览环境的用途
	'config 中增加 preview.index.js;  增加预览模式的构建 在package.json中script中增加内容，目的是增加打包的环境变量为preview build:preview": "cross-env webpack_config=preview node  
#### library 并publish 到 private repository 的 配置修改

