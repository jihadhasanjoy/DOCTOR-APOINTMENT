export function combineDateAndTime(date: string, time: string): string {
  const [modifyTime, modiyDate] = [new Date(time), new Date(date)];
  const timeString =
    modifyTime.getHours() +
    ':' +
    modifyTime.getMinutes() +
    ':' +
    modifyTime.getSeconds();

  var year = modiyDate.getFullYear();
  var month = modiyDate.getMonth() + 1; // Jan is 0, dec is 11
  var day = modiyDate.getDate();
  var dateString = '' + year + '-' + month + '-' + day;
  var combined = new Date(dateString + ' ' + timeString);
  return combined.toISOString();
}
