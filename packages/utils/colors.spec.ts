import { rgbToHex } from './colors'
import { it, describe, expect } from 'vitest';

describe('colors', () => {
  describe('rgbToHex', () => {
    it('converts rgb to hex', () => expect(rgbToHex(12, 44, 120)).toEqual('#0c2c78'));
    it('converts strings to hex', () => expect(rgbToHex('12' as any as number, '44' as any as number, '120' as any as number)).toEqual('#ffffff'));
    it('converts even with a null input to hex', () => expect(rgbToHex(null as any, 44, 120)).toEqual('#ff2c78'));
    it('converts undefined to hex', () => expect(rgbToHex(12, undefined as any, 120)).toEqual('#0cff78'));
  });
});
