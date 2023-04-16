const arrayOfUrls: string[][] = [
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
  const arrayOfOctaves = Array.from(Array(6).keys()).splice(1);
  const BASE_URL = "https://gtdb.org/sounds/acoustic-guitar/440/";
  const urlSuffix = ".mp3";

  // The urls that end with 's' are written like:
  // https://gtdb... 'As5'
  if (note.endsWith("s")) {
    const noteWithoutSharp = note[0];
    return arrayOfOctaves.map(
      (octave) => BASE_URL + noteWithoutSharp + octave + "s" + urlSuffix
    );
  }

  return arrayOfOctaves.map((octave) => BASE_URL + note + octave + urlSuffix);
}

arrayOfUrls.forEach((urls) => {
  urls.forEach(async (url) => {
    const fileName = url.split("/").at(-1) as string;
    const filePath = `data/${fileName[0]}/`;

    const response = await fetch(url);
    await Bun.write(filePath + fileName, response);
  });
});
