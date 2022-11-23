/**
 * @description 模糊圆
 */
class CircleBlurMaterialProperty {
	constructor(options) {
		this._definitionChanged = new window.Cesium.Event()
		this._color = undefined
		this._speed = undefined
		this.color = options.color
		this.speed = options.speed
	}

	get isConstant() {
		return false
	}

	get definitionChanged() {
		return this._definitionChanged
	}

	getType(time) {
		return window.Cesium.Material.CircleBlurMaterialType
	}

	getValue(time, result) {
		if (!window.Cesium.defined(result)) {
			result = {}
		}

		result.color = window.Cesium.Property.getValueOrDefault(this._color, time, Cesium.Color.RED, result.color)
		result.speed = window.Cesium.Property.getValueOrDefault(this._speed, time, 10, result.speed)
		return result
	}

	equals(other) {
		return (
			this === other ||
			(other instanceof CircleBlurMaterialProperty &&
				window.Cesium.Property.equals(this._color, other._color) &&
				window.Cesium.Property.equals(this._speed, other._speed))
		)
	}
}

Object.defineProperties(CircleBlurMaterialProperty.prototype, {
	color: Cesium.createPropertyDescriptor('color'),
	speed: Cesium.createPropertyDescriptor('speed'),
})

Cesium.CircleBlurMaterialProperty = CircleBlurMaterialProperty
Cesium.Material.CircleBlurMaterialProperty = 'CircleBlurMaterialProperty'
Cesium.Material.CircleBlurMaterialType = 'CircleBlurMaterialType'
Cesium.Material.CircleBlurMaterialSource = `
                                            uniform vec4 color;
                                            uniform float speed;
                                            czm_material czm_getMaterial(czm_materialInput materialInput){
                                            czm_material material = czm_getDefaultMaterial(materialInput);
                                            vec2 st = materialInput.st ;
                                            vec2 center = vec2(0.5);
                                            float time = fract(czm_frameNumber * speed / 1000.0);
                                            float r = 0.5 + sin(time) / 3.0;
                                            float dis = distance(st, center);
                                            float a = 0.0;
                                            if(dis < r) {
                                                a = 1.0 - smoothstep(0.0, r, dis);
                                            }
                                            material.alpha = pow(a,10.0) ;
                                            material.diffuse = color.rgb * a * 3.0;
                                            return material;
                                            }
                                            `

Cesium.Material._materialCache.addMaterial(Cesium.Material.CircleBlurMaterialType, {
	fabric: {
		type: Cesium.Material.CircleBlurMaterialType,
		uniforms: {
			color: new Cesium.Color(1.0, 0.0, 0.0, 1.0),
			speed: 10.0,
		},
		source: Cesium.Material.CircleBlurMaterialSource,
	},
	translucent: function (material) {
		return true
	},
})
