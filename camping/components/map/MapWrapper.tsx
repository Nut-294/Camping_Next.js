'use client'
import dynamic from "next/dynamic";

// ห่อ MapLandmark ให้โหลดบน client เท่านั้น
const MapLandmark = dynamic(() => import('./Map'), { ssr: false });

export default MapLandmark;
