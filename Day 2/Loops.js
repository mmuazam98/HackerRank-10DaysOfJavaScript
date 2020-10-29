function vowelsAndConsonants(s) {
  for (var i in s.split("")) {
    if (["a", "e", "i", "o", "u"].includes(s.split("")[i])) {
      console.log(s.split("")[i]);
    }
  }

  for (var i in s.split("")) {
    if (!["a", "e", "i", "o", "u"].includes(s.split("")[i])) {
      console.log(s.split("")[i]);
    }
  }
}
