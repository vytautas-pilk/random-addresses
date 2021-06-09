import React from "react";
import Address from "./Address";

export default function RegionGroup(props) {
  return (
    <div className="region-group">
      <h3 className="region-name">{props.region}</h3>
      {
        props.addresses.map(i => <Address key={i.id} entity={i} />)
      }
    </div>
  )
}