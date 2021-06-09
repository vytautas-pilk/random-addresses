import React from "react";

import text from "../resources/text";
import sortByRegion from "../utils/sortByContinent";
import RegionGroup from "./RegionGroup";

export default function Addresses(props) {
  const regions = sortByRegion(props.data);

  return (
    <div className="addresses">
      <h2>{text.addressesByRegion}</h2>
      <div>
        {
          Object.entries(regions).map(([ region, data ]) => (
            <RegionGroup key={region} addresses={data} region={region}/>
          ))
        }
      </div>
    </div>
  );
}