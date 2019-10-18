export function minutesToHours(n) {
  let hours = (n / 60);
  let roundedHours = Math.floor(hours);
  let minutes = (hours - roundedHours) * 60;
  let roundedMinutes = Math.round(minutes);
  return `${roundedHours}h ${roundedMinutes}m`
}