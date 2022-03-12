# vuemall

> 纯vue写了个商场项目练手用的，不过也学到的很多项目的知识

#### 技术栈

> vue+elementui+axios

## 目录结构

```
├── vue.config.js        // 跨域配置
├── package.json       // 项目配置文件
├── public      
│   ├── images         // 图片资源
│   ├── index.html     // 入口文件
├── src                // 生产目录
│   ├── api         // axios接口管理
│   ├── assets         // 图片资源
│   ├── components     // 各种组件
│   ├── pages          // router页面
│   ├── router          // router配置项
│   ├── store          // vuex配置项
│   ├── utils          // 工具（这里只用了uuid
│   ├── App.vue         // 主页面 
│   └── main.js        // 组件等各种全局配置
```



## 功能

#### 浏览

上面封装header组件

中间使用swiper

下面封装重复使用的footer组件

![avator](screenShots\image-20220312123217404.png)



#### 搜索

利用路由传参，传递表单参数进行路由跳转，跳转到search页面进行参数接受根据参数来显示页面

![avator](screenShots\image-20220312123640720.png)

#### 注册与登录

注册，获取数据，使用vuex管理数据并dispatch上传用户信息的方法,该方法发送post用户信息给服务器

![avator](screenShots\image-20220312124158568.png)

登录

和注册类似

![avator](screenShots\image-20220312124311034.png)

#### 购买

物品页面 正常获取数据展示到页面，输入框进行限制，非数字直接变成0，加入购物车上传数据到服务器，通过uuid进行标识，或者已经登录的使用token

![avator](screenShots\image-20220312124534254.png)

数据确认页面，类似京东，把上个页面的数据传给这个页面，为后续准备，查看物品详情可以返回上个页面，去购物车结算 直接去购物车页面

![avator](screenShots\image-20220312125458878.png)

购物页面通过向服务器请求来获取，每次修改都会发送数据。所以进行节流优化

![avator](screenShots\image-20220312125807834.png)

## 使用步骤

#### 安装

```
npm install
```

#### 启动服务器
```
npm run serve
```

