import React, { useState, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
// import Filters from "./Filters";
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default function Map(props) {
  // const [viewport, setViewport] = useState({
  //   latitude: 51.04427,
  //   longitude: -114.062019,
  //   // longitude: -114.062019,
  //   width: "100vw",
  //   height: "100vh",
  //   zoom: 30,
  // });
  // const [selectedCrime, setSelectedCrime] = useState(null);

  // useEffect(() => {
  //   const listener = (e) => {
  //     if (e.key === "Escape") {
  //       setSelectedCrime(null);
  //     }
  //   };
  //   window.addEventListener("keydown", listener);

  //   return () => {
  //     window.removeEventListener("keydown", listener);
  //   };
  // }, []);
  const { timeFilters, weights } = props;
  const [dataValue, setDataValue] = useState();

  useEffect(() => {
    async function getData() {
      const filterPacket = {
        timeFilters,
        weights,
      };
      const dataResponse = await fetch("/api/crimeData", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(filterPacket),
      });
      const responseValue = await dataResponse.json();
      setDataValue(responseValue);
    }
    if (weights.assault !== undefined && timeFilters.length > 0) {
      getData();
    }
  }, [timeFilters, weights]);

  useEffect(() => {
    if (dataValue) {
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/satellite-streets-v12",
        center: [-114.062019, 51.04427],
        zoom: 10,
        projection: "globe",
      });

      map.on("load", async () => {
        map.addSource("crime", {
          type: "geojson",
          data: dataValue,
        });

        map.addLayer({
          id: "crime-level-9",
          type: "fill",
          source: "crime",
          filter: [">=", "crimeScore", 0.9],
          paint: {
            "fill-color": "#BA0000",
            "fill-opacity": 0.6,
          },
        });
        map.addLayer({
          id: "crime-level-8",
          type: "fill",
          source: "crime",
          filter: ["all", [">=", "crimeScore", 0.8], ["<", "crimeScore", 0.9]],
          paint: {
            "fill-color": "#DB2500",
            "fill-opacity": 0.6,
          },
        });

        map.addLayer({
          id: "crime-level-7",
          type: "fill",
          source: "crime",
          filter: ["all", [">=", "crimeScore", 0.7], ["<", "crimeScore", 0.8]],
          paint: {
            "fill-color": "#DD3700",
            "fill-opacity": 0.6,
          },
        });
        map.addLayer({
          id: "crime-level-6",
          type: "fill",
          source: "crime",
          filter: ["all", [">=", "crimeScore", 0.6], ["<", "crimeScore", 0.7]],
          paint: {
            "fill-color": "#E15300",
            "fill-opacity": 0.6,
          },
        });
        map.addLayer({
          id: "crime-level-5",
          type: "fill",
          source: "crime",
          filter: ["all", [">=", "crimeScore", 0.5], ["<", "crimeScore", 0.6]],
          paint: {
            "fill-color": "#E56C00",
            "fill-opacity": 0.5,
          },
        });
        map.addLayer({
          id: "crime-level-4",
          type: "fill",
          source: "crime",
          filter: ["all", [">=", "crimeScore", 0.4], ["<", "crimeScore", 0.5]],
          paint: {
            "fill-color": "#E98700",
            "fill-opacity": 0.4,
          },
        });

        map.addLayer({
          id: "crime-level-3",
          type: "fill",
          source: "crime",
          filter: ["all", [">=", "crimeScore", 0.3], ["<", "crimeScore", 0.4]],
          paint: {
            "fill-color": "#EDA100",
            "fill-opacity": 0.4,
          },
        });
        map.addLayer({
          id: "crime-level-2",
          type: "fill",
          source: "crime",
          filter: ["all", [">=", "crimeScore", 0.2], ["<", "crimeScore", 0.3]],
          paint: {
            "fill-color": "#F1BA00",
            "fill-opacity": 0.4,
          },
        });
        map.addLayer({
          id: "crime-level-1",
          type: "fill",
          source: "crime",
          filter: ["all", [">=", "crimeScore", 0.1], ["<", "crimeScore", 0.2]],
          paint: {
            "fill-color": "#F4D000",
            "fill-opacity": 0.3,
          },
        });

        map.addLayer({
          id: "crime-level-0",
          type: "fill",
          source: "crime",
          filter: ["<", "crimeScore", 0.1],
          paint: {
            "fill-color": "#F9F100",
            "fill-opacity": 0.3,
          },
        });

        map.addLayer({
          id: "outline",
          type: "line",
          source: "crime",
          layout: {},
          paint: {
            "line-color": `hsl(0deg, 0, 0.18)`,
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

        dataValue?.features?.forEach((marker) => {
          console.log(marker);
          if (marker.properties.communityCentre) {
            let longLat = marker.properties.communityCentre;
            console.log(longLat);
            const newMarker = new mapboxgl.Marker()
              .setLngLat([longLat.long, longLat.lat])
              .addTo(map)
              .setPopup(
                new mapboxgl.Popup({ offset: 25 }).setHTML(
                  `<div style="border-radius: 50%"><h3>${
                    marker.properties.name
                  }<br><strong>Sector: </strong>${
                    marker.properties.class
                  }<br>Crime Score:${marker.properties.crimeScore.toFixed(
                    2
                  )}</h3></div>`
                )
              );
            // make marker only visible at zoom level 16
            newMarker.getElement().style.display = "none";
            map.on("zoom", () => {
              if (map.getZoom() >= 11) {
                newMarker.getElement().style.display = "block";
              } else {
                newMarker.getElement().style.display = "none";
              }
            });
          }
        });
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
    }
  }, [dataValue]);

  return <div id="map" />;
}
