import { Font, Glyph } from '../types';

/**
 * Slice glyph between codePoints range
 * Util for breaking ligatures
 *
 * @param start - Start code point index
 * @param end - End code point index
 * @param font - Font to generate new glyph
 * @param glyph - Glyph to be sliced
 * @returns Sliced glyph parts
 */
const slice = (
  start: number,
  end: number,
  font: Font,
  glyph: Glyph,
  direction: 'ltr' | 'rtl' = 'ltr',
) => {
  if (!glyph) return [];
  if (start === end) return [];
  if (start === 0 && end === glyph.codePoints.length) return [glyph];

  const codePoints = glyph.codePoints.slice(start, end);
  const string = String.fromCodePoint(...codePoints);

  // passing direction to fontkit
  return font
    ? font.layout(string, undefined, undefined, undefined, direction).glyphs
    : [glyph];
};

export default slice;
