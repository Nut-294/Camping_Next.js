'use client'
import dynamic from "next/dynamic";

const MapLandmark =dynamic(()=>import('./Map'),{ssr:false})
export default MapLandmark