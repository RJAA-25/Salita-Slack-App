const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatDateTime = (input) => {
  const datetime = new Date(input);

  const year = String(datetime.getFullYear());
  const month = months[datetime.getMonth()];
  const date = String(datetime.getDate());
  const hour = String(datetime.getHours() % 12 || 12).padStart(2, "0");
  const min = String(datetime.getMinutes()).padStart(2, "0");
  const period = datetime.getHours() < 12 ? "AM" : "PM";

  return `${hour}:${min}${period} (${date} ${month} ${year})`;
};
