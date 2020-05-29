import { Color } from "./types";

export function sortData(data: any) {
  const sortedList = data.colors
    .map(getColorTypes)
    .sort((a: { id: number }, b: { id: number }) => a.id - b.id);
  return sortedList;
}

export function getSimilarColors(data: any, index: string) {
  const getSimilar = data.splice(index, (index + 49));
  return getSimilar;
}

function getColorTypes(color: Color) {
  // get rgb from hex here as we will use it twice
  // https://www.w3schools.com/jsref/jsref_parseint.asp
  const hex = color.hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return {
    ...color,
    rgb: hex2Rgb(r, g, b),
    cmyk: rgb2Cmyk(r, g, b),
    id: sortColorCode(r, g, b),
  };
}

// set hex values to rgb
function hex2Rgb(r: number, g: number, b: number) {
  return `${r}, ${g}, ${b}`;
}

// get cymk from rgb
// phone a friend..
// http://www.javascripter.net/faq/rgb2cmyk.htm
function rgb2Cmyk(r: number, g: number, b: number) {
  const computedC = 1 - r / 255;
  const computedM = 1 - g / 255;
  const computedY = 1 - b / 255;
  const minCMY = Math.min(computedC, Math.min(computedM, computedY));

  const k = Math.round((1 - Math.max(r / 255, g / 255, b / 255)) * 100);
  const c = Math.round(((computedC - minCMY) / (1 - minCMY)) * 100);
  const m = Math.round(((computedM - minCMY) / (1 - minCMY)) * 100);
  const y = Math.round(((computedY - minCMY) / (1 - minCMY)) * 100);
  return `${c}, ${m}, ${y}, ${k}`;
}

// sort by this or by hex, either works
// https://www.rapidtables.com/web/color/RGB_Color.html#rgb-format
function sortColorCode(r: number, g: number, b: number) {
  return (r * 65536) + (g * 256) + b;
}
