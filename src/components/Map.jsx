import React, { useState, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
console.log(mapboxgl.accessToken);
export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 51.04427,
    longitude: -114.062019,
    width: "100vw",
    height: "100vh",
    zoom: 20,
  });
  const [selectedCrime, setSelectedCrime] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedCrime(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/navigation-night-v1",
      center: [-114.062019, 51.04427],
      zoom: 10,
      projection: "globe",
    });
    map.on("load", () => {
      map.addSource("crime", {
        type: "geojson",
        data: "/crime3.geojson",
      });

      map.addLayer({
        id: "high-crime",
        type: "fill",
        source: "crime", //reference the data source
        filter: [">=", "crimeScore", 0.8],
        paint: {
          "fill-color": "#f00",
          "fill-opacity": 0.5,
        },
      });
      map.addLayer({
        id: "medium-crime",
        type: "fill",
        source: "crime",
        filter: ["all", [">=", "crimeScore", 0.6], ["<", "crimeScore", 0.8]],
        paint: {
          "fill-color": "magenta",
          "fill-opacity": 0.5,
        },
      });

      map.addLayer({
        id: "low-crime",
        type: "fill",
        source: "crime",
        filter: ["all", [">=", "crimeScore", 0.3], ["<", "crimeScore", 0.6]],
        paint: {
          "fill-color": "#ff0",
          "fill-opacity": 0.5,
        },
      });

      map.addLayer({
        id: "no-crime",
        type: "fill",
        source: "crime",
        filter: ["<", "crimeScore", 0.3],
        paint: {
          "fill-color": "#0f0",
          "fill-opacity": 0.5,
        },
      });

      map.addLayer({
        id: "outline",
        type: "line",
        source: "crime",
        layout: {},
        paint: {
          "line-color": "#000",
          "line-width": 1,
        },
      });

      // map.addLayer({
      //   id: "community_name",
      //   type: "symbol",
      //   source: "crime",
      //   maxzoom: 12,
      //   layout: {
      //     "text-field": ["get", "name"],

      //     "text-offset": [0, 0],
      //     "text-anchor": "center",
      //   },
      // });

      map.addLayer(
        {
          id: "crime-point",
          type: "circle",
          source: "crime",
          minzoom: 14,
          paint: {
            // increase the radius of the circle as the zoom level and dbh value increases
            "circle-radius": {
              property: "count",
              type: "exponential",
              stops: [
                [{ zoom: 15, value: 1 }, 5],
                [{ zoom: 15, value: 62 }, 10],
                [{ zoom: 22, value: 1 }, 20],
                [{ zoom: 22, value: 62 }, 50],
              ],
            },
            "circle-color": {
              property: "count",
              type: "exponential",
              stops: [
                [0, "rgba(236,222,239,0)"],
                [10, "rgb(236,222,239)"],
                [20, "rgb(208,209,230)"],
                [30, "rgb(166,189,219)"],
                [40, "rgb(103,169,207)"],
                [50, "rgb(28,144,153)"],
                [60, "rgb(1,108,89)"],
              ],
            },
            "circle-stroke-color": "white",
            "circle-stroke-width": 1,
            "circle-opacity": {
              stops: [
                [14, 0],
                [15, 1],
              ],
            },
          },
        },
        "waterway-label"
      );
    });
    map.on("click", "crime-point", (event) => {
      new mapboxgl.Popup()
        .setLngLat(event.features[0].geometry.coordinates)
        .setHTML(
          `<strong>Community Name:</strong> ${event.features[0].properties["community_name"]} <strong>Number of crimes :</strong> ${event.features[0].properties["count"]} <strong>Date: </strong>${event.features[0].properties.date}`
        )
        .addTo(map);
    });
  }, []);

  return <div id="map" style={{ width: "90vw", height: "90vh" }} />;
}