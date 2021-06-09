import React from "react";

import text from "../resources/text";
import { GCE } from "../constants";
import getDistance from "../utils/getDistance";

export default function Address({entity}) {
  const pt1 = { lat: entity.latitude, lon: entity.longitude };
  const distance = getDistance(pt1, GCE);
  
  return (
    <div className="address">
      <p>{entity.full_address}, {entity.country}</p>
      <p>{text.distanceFromGCE}: {Math.round(distance)} km</p>
    </div>
  );
}