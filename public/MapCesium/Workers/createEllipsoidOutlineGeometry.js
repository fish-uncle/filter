/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.96
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */
define(["./defaultValue-4607806f","./EllipsoidOutlineGeometry-6378442c","./Transforms-19238a47","./Matrix2-21f90abf","./RuntimeError-cef79f54","./ComponentDatatype-4028c72d","./WebGLConstants-f100e3dd","./_commonjsHelpers-a32ac251","./combine-fc59ba59","./GeometryAttribute-89586a00","./GeometryAttributes-acac33d2","./GeometryOffsetAttribute-3e5f3e97","./IndexDatatype-20e78e57"],(function(e,t,r,n,i,o,a,f,u,c,m,s,d){"use strict";return function(r,n){return e.defined(r.buffer)&&(r=t.EllipsoidOutlineGeometry.unpack(r,n)),t.EllipsoidOutlineGeometry.createGeometry(r)}}));
