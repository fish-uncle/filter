import { CesiumPopupAction, CesiumPopup, CesiumPopupPositionUtil } from 'cesium-popup-es6'
import Factory from '@/core/Base/factory'

const action: CesiumPopupAction = {
	contextDisabled: true,
}
/**
 * @description 自定义广告牌
 */
export default class MapMarker extends Factory<MapMarker> {
	viewer

	constructor(viewer) {
		super()
		this.viewer = viewer
	}

	load(position, html) {
		const positionUtil = new CesiumPopupPositionUtil(this.viewer)
		let cartesian3: any = null
		if (position instanceof window.Cesium.Cartesian2) {
			cartesian3 = positionUtil.cartesian2ToCartesian3(position)
		} else {
			cartesian3 = positionUtil.lnglatToCartesian3(position.longitude, position.latitude, 0)
		}

		return new CesiumPopup(
			this.viewer,
			{
				position: cartesian3,
				html,
				className: 'j-marker',
			},
			action,
		)
	}
}
