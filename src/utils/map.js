"use client";

import React, { useRef, useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const center = { lng: 13.338414, lat: 52.507932 };
  const [zoom] = useState(12);

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new L.Map(mapContainer.current, {
      center: L.latLng(center.lat, center.lng),
      zoom: zoom,
    });

    // Create a MapTiler Layer inside Leaflet
    new MaptilerLayer({
      // Get your free API key at https://cloud.maptiler.com
      apiKey: "sJ42SkPOBkhx59YdIsx8",
    }).addTo(map.current);
  }, [center.lng, center.lat, zoom]);

  return (
    <div className="w-full h-full">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default Map;
