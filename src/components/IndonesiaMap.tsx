"use client";

import React, { memo } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { normalizeProvinceName } from "@/data/provinceMapping";

interface IndonesiaMapProps {
  activeProvince: string | null;
  onProvinceClick: (province: string) => void;
  onHover: (province: string | null) => void;
}

const geoUrl = "https://raw.githubusercontent.com/superpikar/indonesia-geojson/master/indonesia-province-simple.json";

const IndonesiaMap = ({ activeProvince, onProvinceClick, onHover }: IndonesiaMapProps) => {
  return (
    <div className="relative w-full h-full min-h-[400px] bg-blue-50/50 dark:bg-black/20 rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 flex items-center justify-center">
      
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 950,
          center: [118, -2.5]
        }}
        className="w-full h-full"
      >
        <ZoomableGroup center={[118, -2.5]} zoom={1} minZoom={1} maxZoom={5}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const rawName = geo.properties.Propinsi || geo.properties.NAME_1 || geo.properties.name || "Unknown";
                // Normalize the GeoJSON province name to our data province name
                const provinceName = normalizeProvinceName(rawName);
                const isActive = activeProvince === provinceName;
                
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => onProvinceClick(provinceName)}
                    onMouseEnter={() => onHover(provinceName)}
                    onMouseLeave={() => onHover(null)}
                    style={{
                      default: {
                        fill: isActive ? "#fbbf24" : "#e5e7eb",
                        stroke: "#ffffff",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: {
                        fill: "#fcd34d",
                        stroke: "#ffffff",
                        strokeWidth: 0.5,
                        outline: "none",
                        cursor: "pointer",
                      },
                      pressed: {
                        fill: "#f59e0b",
                        stroke: "#ffffff",
                        strokeWidth: 0.5,
                        outline: "none",
                      }
                    }}
                    className="transition-colors duration-300 dark:![fill-opacity-80]"
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      {/* Helper text overlay */}
      <div className="absolute bottom-6 left-6 text-xs text-black/40 dark:text-white/40 max-w-[250px] pointer-events-none bg-white/80 dark:bg-black/80 p-2 rounded-lg backdrop-blur-md">
        <span className="font-bold block text-black/80 dark:text-white/80 mb-1">Peta Interaktif</span>
        Bisa digeser (drag) & di-zoom. Klik provinsi untuk melihat kebudayaannya.
      </div>
    </div>
  );
};

export default memo(IndonesiaMap);
