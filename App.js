import React from "react";
import { View } from "react-native";
import MapboxGL from "@rnmapbox/maps";

MapboxGL.setAccessToken("pk.eyJ1IjoiaWJyYWhpbXoiLCJhIjoiY2w2YXQxcGkwMDJhYjNiczRsOXdpNnUweiJ9.dmUHUtNs2ngYUr9toYgBIw");

export default App = () => {
  return (
    <View style={{flex: 1, height: "100%", width: "100%" }}>
      <MapboxGL.MapView
        // styleURL={MapboxGL.StyleURL.Street}
        styleURL={`https://map.touristsexpi.or.tz/styles/expi-default/style.json`}
        zoomLevel={8}
        centerCoordinate={[39.3362400, -6.5790100]}
        style={{flex: 1}}>
           <MapboxGL.Camera
              zoomLevel={8}
              centerCoordinate={[39.3362400, -6.5790100]}
              animationMode={'flyTo'}
              animationDuration={0}
              // followUserLocation={true}
              attributionEnabled={false}
              scrollEnabled={true}
              zoomEnabled={true}
              logoEnabled={false}
          	>
          </MapboxGL.Camera>
      </MapboxGL.MapView>
    </View>
  )
}