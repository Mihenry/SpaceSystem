define(function(){var e=function(){var e,r=viewer.scene,n=r.imageryLayers,o=new Array(19),i=1;$("#openCloud").click(function(){i>1||(viewer.camera.flyTo({destination:Cesium.Cartesian3.fromDegrees(110,31,2e7)}),window.setTimeout(function(){viewer.scene.screenSpaceCameraController.enableZoom=!1,e=window.setInterval(function(){return i>19?(i=1,void window.clearInterval(e)):(console.log("i = "+i),void(o[i]=n.addImageryProvider(new Cesium.SingleTileImageryProvider({url:"./data/yuntu/"+i++ +".png",rectangle:Cesium.Rectangle.fromDegrees(60,0,150,60)}))))},200)},1e3))}),$("#closeCloud").click(function(){viewer.scene.screenSpaceCameraController.enableZoom=!0,window.clearInterval(e),i=1;for(var r=19;r>=1;r--)n.remove(o[r])})};return e});