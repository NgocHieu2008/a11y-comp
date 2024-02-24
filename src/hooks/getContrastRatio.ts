import { getRelativeLuminance } from "./getRelativeLuminance";

export function getContrastRatio(backgroundColor: any, color: any) {
    const lumA = getRelativeLuminance(backgroundColor);
    const lumB = getRelativeLuminance(color);
    return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
  }