import figlet from "figlet";

// dynamic font imports
// as seen in https://github.com/zzgosh/ASCII-ART_SVG/blob/ccc7a3004767655f1bb4cd8c1b1a7b23696f480e/src/utils/fontLoader.ts

// small selection of fonts i like
export const fontImports: Record<string, () => Promise<{ default: string }>> = {
  "Big": () => import("figlet/importable-fonts/Big.js"),
  "Alligator": () => import("figlet/importable-fonts/Alligator.js"),
  "Alligator2": () => import("figlet/importable-fonts/Alligator2.js"),
  "Alpha": () => import("figlet/importable-fonts/Alpha.js"),
  "ANSI Regular": () => import("figlet/importable-fonts/ANSI Regular.js"),
  "ANSI Shadow": () => import("figlet/importable-fonts/ANSI Shadow.js"),
  "Banner": () => import("figlet/importable-fonts/Banner.js"),
  "Banner3-D": () => import("figlet/importable-fonts/Banner3-D.js"),
  "Banner3": () => import("figlet/importable-fonts/Banner3.js"),
  "Banner4": () => import("figlet/importable-fonts/Banner4.js"),
  "DOS Rebel": () => import("figlet/importable-fonts/DOS Rebel.js"),
  "Georgi16": () => import("figlet/importable-fonts/Georgi16.js"),
  "Georgia11": () => import("figlet/importable-fonts/Georgia11.js"),
  "Isometric1": () => import("figlet/importable-fonts/Isometric1.js"),
  "Isometric2": () => import("figlet/importable-fonts/Isometric2.js"),
  "Isometric3": () => import("figlet/importable-fonts/Isometric3.js"),
  "Isometric4": () => import("figlet/importable-fonts/Isometric4.js"),
  "Morse2": () => import("figlet/importable-fonts/Morse2.js"),
  "Rot13": () => import("figlet/importable-fonts/Rot13.js"),
  "Shadow": () => import("figlet/importable-fonts/Shadow.js"),
  "Slant": () => import("figlet/importable-fonts/Slant.js"),
  "Small Isometric1": () => import("figlet/importable-fonts/Small Isometric1.js"),
  "Standard": () => import("figlet/importable-fonts/Standard.js"),
  "Trek": () => import("figlet/importable-fonts/Trek.js"),
  "Univers": () => import("figlet/importable-fonts/Univers.js"),
  "Whimsy": () => import("figlet/importable-fonts/Whimsy.js"),

};

// Track loaded fonts
const loadedFonts = new Set<string>();

// Function to load a font
export const loadFont = async (fontName: string): Promise<boolean> => {
  if (loadedFonts.has(fontName)) {
    return true;
  }

  try {
    console.log(`Loading font: ${fontName}`);
    
    const fontImporter = fontImports[fontName];
    if (!fontImporter) {
      console.warn(`Font "${fontName}" not available in current selection`);
      return false;
    }
    
    const fontModule = await fontImporter();
    figlet.parseFont(fontName, fontModule.default);
    loadedFonts.add(fontName);
    console.log(`Successfully loaded font: ${fontName}`);
    return true;
  } catch (error) {
    console.error(`Failed to load font ${fontName}:`, error);
    return false;
  }
};

// Get list of available fonts
export const getAvailableFonts = (): string[] => {
  return Object.keys(fontImports).sort();
};

// Check if font is loaded
export const isFontLoaded = (fontName: string): boolean => {
  return loadedFonts.has(fontName);
};

// Get loaded fonts set (for reactive UI)
export const getLoadedFonts = (): Set<string> => {
  return loadedFonts;
};
