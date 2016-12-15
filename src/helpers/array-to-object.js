export default function arrayToObject(data) {
  let obj = {};
  data.forEach((datum) => {
    obj[datum.id] = datum
  });
  return obj;
}