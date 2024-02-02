export function nameToColor(name) {
  switch (name.toLowerCase().trim()) {
    case "bold black":
    case "charcoal black":
    case "black":
      return "#000000";
    case "viva la red":
      return "#a22628";
    case "wear it out white":
    case "white":
      return "#ffffff";
    case "sand":
      return "#bab3a3";
    case "red":
      return "#ff0000";
    case "caution":
    case "golden ticket":
      return "#fff200";
    case "iridescent":
      return "#857f81";
    case "multi":
      return "#be1e2d";
    case "silver":
      return "#6d6e71";
    case "purple pop":
      return "#663d9d";
    case "gumball":
      return "#d62e92";
    case "get in lime":
      return "#70dd82";
    case "really red-y":
      return "#be1e2d";
    case "denim":
      return "#6F8FAF";
    case "groovin' green":
      return "#348542";
    case "oh orange":
      return "#ffa832";
    case "sea me stuntin'":
      return "#aed0db";
    case "blue lightning":
    case "be blue":
      return "#057aa3";
    case "orchid":
      return "#c44259";
    case "fire red":
    case "cherry red":
      return "#be1e2d";
    case "zumba green":
      return "#e4de52";
    case "military green":
    case "military":
      return "#5a543d";
    default:
      return "#0000ff";
  }
}

export function generateFileName(product, extension = true) {
  // Replace all spaces in the strings with a hyphen (-)
  const newStr1 = product.name.replace(/\s+/g, "-");
  const newStr2 = product.color.split(",")[0].replace(/\s+/g, "-");

  // Concatenate the two strings with a hyphen in between
  const concatenatedStr = `${newStr1}-${newStr2}`;

  // Convert the concatenated string to lowercase
  const lowerCaseStr = concatenatedStr.toLowerCase();

  // Encode the string to make it URL safe
  const urlSafeStr = encodeURIComponent(lowerCaseStr);

  return urlSafeStr + (extension ? ".jpg" : "");
}

export function funHash(s) {
  for (var i = 0, h = 0xdeadbeef; i < s.length; i++)
    h = Math.imul(h ^ s.charCodeAt(i), 2654435761);
  let result = (h ^ (h >>> 16)) >>> 0;
  if (String(result).substring(0, 2) > 40) {
    return 50;
  } else {
    return String(result).substring(0, 2);
  }
}

export function createNewInputs(len) {
  let inputs = Array(len)
    .fill()
    .map((v, i) => ({
      name: `input-${i}`,
      value: 0,
    }));

  return inputs;
}

// Create our number formatter.
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
