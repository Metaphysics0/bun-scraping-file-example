const notes = [
  "A",
  "As",
  "B",
  "C",
  "Cs",
  "D",
  "Ds",
  "E",
  "F",
  "Fs",
  "G",
  "Gs",
].map(createArrayOfUrls);

function createArrayOfUrls(note: string) {
  const BASE_URL = "https://gtdb.org/sounds/acoustic-guitar/440/";
  const urlSuffix = ".mp3";

  return Array.from(Array(6).keys())
    .splice(1)
    .map((octave) => BASE_URL + note + octave + urlSuffix);
}
