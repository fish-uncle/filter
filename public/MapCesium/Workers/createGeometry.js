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
define(["./defaultValue-4607806f","./PrimitivePipeline-a96c4add","./createTaskProcessorWorker","./Transforms-19238a47","./Matrix2-21f90abf","./RuntimeError-cef79f54","./ComponentDatatype-4028c72d","./WebGLConstants-f100e3dd","./_commonjsHelpers-a32ac251","./combine-fc59ba59","./GeometryAttribute-89586a00","./GeometryAttributes-acac33d2","./GeometryPipeline-fcd553f4","./AttributeCompression-b8c8fcdc","./EncodedCartesian3-f98850c6","./IndexDatatype-20e78e57","./IntersectionTests-c09178b5","./Plane-1c5eb32d","./WebMercatorProjection-351a8dfc"],(function(e,t,r,n,o,c,i,s,a,f,u,d,m,l,b,p,y,P,k){"use strict";const C={};function G(t){let r=C[t];return e.defined(r)||("object"==typeof exports?C[r]=r=require(`Workers/${t}`):require([`Workers/${t}`],(function(e){r=e,C[r]=e}))),r}return r((function(r,n){const o=r.subTasks,c=o.length,i=new Array(c);for(let t=0;t<c;t++){const r=o[t],n=r.geometry,c=r.moduleName;if(e.defined(c)){const e=G(c);i[t]=e(n,r.offset)}else i[t]=n}return Promise.all(i).then((function(e){return t.PrimitivePipeline.packCreateGeometryResults(e,n)}))}))}));
