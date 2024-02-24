export function getRelativeLuminance(color: string): number {
    const hexColor = color && color.startsWith("#") ? color.slice(1) : color;
  
    const red = hexColor?.substr(0, 2)
      ? parseInt(hexColor.substr(0, 2), 16) / 255
      : 0;
    const green = hexColor?.substr(2, 2)
      ? parseInt(hexColor.substr(2, 2), 16) / 255
      : 0;
    const blue = hexColor?.substr(4, 2)
      ? parseInt(hexColor.substr(4, 2), 16) / 255
      : 0;
  
    const gammaCorrectedRed =
      red <= 0.03928 ? red / 12.92 : Math.pow((red + 0.055) / 1.055, 2.4);
    const gammaCorrectedGreen =
      green <= 0.03928 ? green / 12.92 : Math.pow((green + 0.055) / 1.055, 2.4);
    const gammaCorrectedBlue =
      blue <= 0.03928 ? blue / 12.92 : Math.pow((blue + 0.055) / 1.055, 2.4);
  
    return (
      0.2126 * gammaCorrectedRed +
      0.7152 * gammaCorrectedGreen +
      0.0722 * gammaCorrectedBlue
    );
  }