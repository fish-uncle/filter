## 大屏优化建议

* ### 常规建议
  * 使用 webm 替换 gif 动画
  * 减少 dom 嵌套层级
  * 使用 css 动画替换 js 动画
  * 使用 webp 替换 png
  * translate3d(0, 0, 0) 开启 chrome 硬件加速

* ### 网络方面
  * 开启 https http2
  * 使用 cdn
  * 封装 http 类，http 请求接口进行一次过滤，防止网络堵塞时，切换Router/Tab时，防止多次重复请求
  * http 类，缓存上一次请求，设置 1d 过期，仅首次接口使用缓存数据，保证数据较快展示


* ### Cesium
  * Cesium 在 Vue 中使用，需要挂载到全局对象中，Vue的数据劫持，cesium对象绑定在Vue的data中时数据会被劫持监听，当加载数据量过大时，劫持的数据也增加导致浏览器内存消耗严重

  * 修改 Cesium 源码 [throttleRequestByServer](http://support.supermap.com.cn/DataWarehouse/WebDocHelp/iPortal/webgl/docs/Documentation/throttleRequestByServer.html)，cesium 本身对瓦片加载和地形加载做了节流，同时向单个服务器打开的最大请求数为6个
  [基于cesium 1.96.0 修改后的 cesium ](http://10.200.1.145/framework/web/es-lab/es-cesium)

* ### 数据处理
  * 大体量的 geojson 文件建议
    * 拆多个 geojson
    * 转 3dtiles 方式进行加载
    * 删除无用字段
    * 下调坐标精度，小数点后面保留7位
  * 缓存
    * 启用PWA 缓存瓦片、geojson等其他数据
