export function nameToColor(name) {
  switch (name.toLowerCase()) {
    case "bold black":
      return "#000000";
    case "viva la red":
      return "#a22628";
    case "wear it out white":
      return "#ffffff";
    case "sand":
      return "#bab3a3";
    case "red":
      return "#ff0000";
    case "caution":
      return "#fff200";
    case "iridescent":
      return "#857f81";
    case "multi":
      return "#be1e2d";
    default:
      return "#0000ff";
  }
}

export function generateFileName(product, extension = true) {
  // Replace all spaces in the strings with a hyphen (-)
  const newStr1 = product.name.replace(/\s+/g, "-");
  const newStr2 = product.color.replace(/\s+/g, "-");

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
