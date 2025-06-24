function getTimestampValues(timestamp) {
  if (!timestamp) {
    return { year: "", month: "", day: "", hour: "", minute: "", second: "" };
  }
  const timeValues = timestamp.split(/[-T\:\.]/);
  const [year, monthNum, day, hour, minute, second] = timeValues;
  const monthLookup = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };
  const month = monthLookup[monthNum];

  return { year, month, day, hour, minute, second };
}

// module.exports = getTimestampValues;

export default getTimestampValues;
