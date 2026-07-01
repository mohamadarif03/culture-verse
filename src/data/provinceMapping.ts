// Mapping from GeoJSON "Propinsi" property (UPPERCASE, old names)
// to our cultures.ts province names (modern names).
// This ensures clicking a province on the map correctly looks up its cultures.

export const geoJsonToProvince: Record<string, string> = {
  // Sumatera
  "ACEH": "Aceh",
  "DI. ACEH": "Aceh",
  "NANGGROE ACEH DARUSSALAM": "Aceh",
  "SUMATERA UTARA": "Sumatera Utara",
  "SUMATERA BARAT": "Sumatera Barat",
  "RIAU": "Riau",
  "KEPULAUAN RIAU": "Kepulauan Riau",
  "JAMBI": "Jambi",
  "SUMATERA SELATAN": "Sumatera Selatan",
  "BANGKA BELITUNG": "Kepulauan Bangka Belitung",
  "KEPULAUAN BANGKA BELITUNG": "Kepulauan Bangka Belitung",
  "BENGKULU": "Bengkulu",
  "LAMPUNG": "Lampung",

  // Jawa & Banten
  "PROBANTEN": "Banten",
  "BANTEN": "Banten",
  "DKI JAKARTA": "DKI Jakarta",
  "JAWA BARAT": "Jawa Barat",
  "JAWA TENGAH": "Jawa Tengah",
  "DAERAH ISTIMEWA YOGYAKARTA": "DI Yogyakarta",
  "DI YOGYAKARTA": "DI Yogyakarta",
  "JAWA TIMUR": "Jawa Timur",

  // Bali & Nusa Tenggara
  "BALI": "Bali",
  "NUSATENGGARA BARAT": "Nusa Tenggara Barat",
  "NUSA TENGGARA BARAT": "Nusa Tenggara Barat",
  "NUSATENGGARA TIMUR": "Nusa Tenggara Timur",
  "NUSA TENGGARA TIMUR": "Nusa Tenggara Timur",

  // Kalimantan
  "KALIMANTAN BARAT": "Kalimantan Barat",
  "KALIMANTAN TENGAH": "Kalimantan Tengah",
  "KALIMANTAN SELATAN": "Kalimantan Selatan",
  "KALIMANTAN TIMUR": "Kalimantan Timur",
  "KALIMANTAN UTARA": "Kalimantan Utara",

  // Sulawesi
  "SULAWESI UTARA": "Sulawesi Utara",
  "GORONTALO": "Gorontalo",
  "SULAWESI TENGAH": "Sulawesi Tengah",
  "SULAWESI BARAT": "Sulawesi Barat",
  "SULAWESI SELATAN": "Sulawesi Selatan",
  "SULAWESI TENGGARA": "Sulawesi Tenggara",

  // Maluku
  "MALUKU": "Maluku",
  "MALUKU UTARA": "Maluku Utara",

  // Papua
  "IRIAN JAYA TIMUR": "Papua",
  "PAPUA": "Papua",
  "IRIAN JAYA BARAT": "Papua Barat",
  "PAPUA BARAT": "Papua Barat",
  "IRIAN JAYA TENGAH": "Papua",
};

// Reverse lookup: our province name -> uppercase GeoJSON name(s)
export function normalizeProvinceName(geoJsonName: string): string {
  return geoJsonToProvince[geoJsonName] || geoJsonName;
}
