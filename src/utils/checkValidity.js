export default function checkValidity(validity) {
  if (validity.valid) return null;
  for (let key in validity) {
    if (validity[key]) {
      return key;
    }
  }
}
