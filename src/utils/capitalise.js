function capitalise(string) {
  if (typeof string !== "string" || !string.length) {
    return "";
  }
  const words = string.split(" ");
  return words
    .map((word) => {
      const wordChars = word.split("");
      const firstLetter = wordChars.shift().toUpperCase();
      wordChars.unshift(firstLetter);
      return wordChars.join("");
    })
    .join(" ");
}

// module.exports = capitalise;

export default capitalise;
