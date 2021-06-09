export default function sortByRegion(data) {
  if (!data) return;
  
  const sortedData = data.reduce((result, cur) => {
    const region = cur.time_zone.split("/")[0];

    if (result[region]) {
      result[region].push(cur);
    } else {
      result[region] = [ cur ];
    }

    return result;
  }, {});

  return sortedData;
}