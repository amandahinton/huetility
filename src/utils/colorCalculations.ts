export const BLACK_HEXCODE = "#000000";
export const BLACK_RGB = { r: 0, g: 0, b: 0 };
export const WHITE_HEXCODE = "#ffffff";
export const WHITE_RGB = { r: 255, g: 255, b: 255 };

export const isHexcode = (hexcode: string): boolean => {
  const pattern = new RegExp(/^#([A-Fa-f0-9]{8}|A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
  return pattern.test(hexcode) == true ? true : false;
};

export const hexcodeToRGB = (
  hexcode: string
): Record<string, number> | null => {
  if (!isHexcode(hexcode)) return null;

  try {
    let red;
    let green;
    let blue;
    let alpha;

    if (hexcode.length === 7) {
      red = hexcode.slice(1, 3);
      green = hexcode.slice(3, 5);
      blue = hexcode.slice(5, 7);
    } else if (hexcode.length === 9){
      red = hexcode.slice(1, 3);
      green = hexcode.slice(3, 5);
      blue = hexcode.slice(5, 7);
      alpha = hexcode.slice(7, 9);
    }else {
      red = hexcode.slice(1, 2) + hexcode.slice(1, 2);
      green = hexcode.slice(2, 3) + hexcode.slice(2, 3);
      blue = hexcode.slice(3, 4) + hexcode.slice(3, 4);
    }

    return {
      r: parseInt(red, 16),
      g: parseInt(green, 16),
      b: parseInt(blue, 16),
      a: alpha ? parseInt(alpha, 16) : 1 
    };
  } catch (error) {
    console.error("Could not convert to RGB:", error);
  }
  return null;
};

export const contrastText = (hexcode: string): string => {
  if (!isHexcode(hexcode)) return BLACK_HEXCODE;

  try {
    const rgb = hexcodeToRGB(hexcode);
    if (rgb) {
      const luminance = rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114;
      return luminance > 150 ? BLACK_HEXCODE : WHITE_HEXCODE;
    }
  } catch (error) {
    console.error("Could not calculate text color:", error);
  }
  return BLACK_HEXCODE;
};
