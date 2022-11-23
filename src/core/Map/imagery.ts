import Factory from '@/core/Base/factory'

const tianMapToken = '74b4cdbecdf732263523a8b1a1763f65'

/**
 * @description 图层
 */
export default class MapImagery extends Factory<MapImagery> {
	// 图层 MapBox 图层
	// imageryProviderMapBox = new window.Cesium.MapboxStyleImageryProvider({
	// username: '17300910282',
	// styleId: 'ckogh4uja1n7s19qrxtmyifz9',
	// accessToken: 'pk.eyJ1IjoiMTczMDA5MTAyODIiLCJhIjoiY2tjbHQ4MTNvMjJpcjJybnFzZXA0b3h5ayJ9.yt6viGGa7AHs9Mk04OqzPw',
	// username: '6j',
	// styleId: 'cl74j2e5b000115rvka91x9zg',
	// accessToken: 'pk.eyJ1IjoiNmoiLCJhIjoiY2w2ZjBheWh0MDEwZTNqbWpvdXNqenBkMSJ9.Szh_MSx30b_YRpO7Z8iqiA',
	// })
	imageryProviderTianMap1 = new window.Cesium.WebMapTileServiceImageryProvider({
		url: `https://t0.tianditu.gov.cn/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=${tianMapToken}`,
		layer: 'tdtImgLayer',
		style: 'default',
		format: 'image/jpeg',
		tileMatrixSetID: 'GoogleMapsCompatible', //使用谷歌的瓦片切片方式
		show: true,
	})
	imageryProviderTianMap2 = new window.Cesium.WebMapTileServiceImageryProvider({
		url: `http://t0.tianditu.gov.cn/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=${tianMapToken}`,
		layer: 'tdtCiaLayer',
		style: 'default',
		format: 'image/jpeg',
		tileMatrixSetID: 'GoogleMapsCompatible',
		show: true,
	})
	// imageryProviderAMap =new window.Cesium.UrlTemplateImageryProvider({
	// 	url: "http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
	// 	minimumLevel: 3,
	// 	maximumLevel: 18
	// })

	constructor() {
		super()
	}
}
