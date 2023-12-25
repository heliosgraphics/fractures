import type { TypeRGB } from 'library/types/colors'

const DEFAULT_PROFILE_RGB: TypeRGB = [199, 201, 209];

export const hexToRgb = (hex?: string | null): TypeRGB => {
  const isString: boolean = !!hex && typeof hex === 'string';

  if (!isString) return DEFAULT_PROFILE_RGB

  hex = hex!.replace(/^#/, '');

  const bigint = parseInt(hex, 16);
  const r: number = (bigint >> 16) & 255;
  const g: number = (bigint >> 8) & 255;
  const b: number = bigint & 255;

  return [r, g, b];
}

export const rgbToHex = (r: number = 255, g: number = 255, b: number = 255): string => {
  const _toHex = (c: number): string => {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  const isRNumber: boolean = typeof r === 'number';
  const isGNumber: boolean = typeof g === 'number';
  const isBNumber: boolean = typeof b === 'number';

  const RR: number = isRNumber ? r : 255;
  const GG: number = isGNumber ? g : 255;
  const BB: number = isBNumber ? b : 255;

  const hexR: string = _toHex(RR);
  const hexG: string = _toHex(GG);
  const hexB: string = _toHex(BB);

  return `#${hexR}${hexG}${hexB}`;
}