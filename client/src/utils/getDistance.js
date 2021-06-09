// Harvesine algoritmas atstumui tarp dviejų koordinačių

export default function getDistance(pt1, pt2) {
  const R = 6371; // žemės spindulys km
  const lat = degreesToRadians(pt2.lat - pt1.lat);
  const lon = degreesToRadians(pt2.lon - pt1.lon);
  const a = 
    Math.sin(lat / 2) * Math.sin(lat / 2) +
    Math.cos(degreesToRadians(pt1.lat)) * Math.cos(degreesToRadians(pt2.lat)) *
    Math.sin(lon / 2) * Math.sin(lon / 2)
  ;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
}

function degreesToRadians(deg) {
  return deg * (Math.PI / 180);
}