const vowelCount = (str) => {
  const vowel = ["a", "e", "i", "o", "u"];

  const totalVowel = str.split("").reduce((acc, crr) => {
    if (vowel.includes(crr.toLocaleLowerCase())) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
  return totalVowel;
};

console.log(vowelCount("My name is Al-Habib"));
