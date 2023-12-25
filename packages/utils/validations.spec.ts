import { validateHttpUrl, validateEmail } from './validations'
import { it, describe, expect } from 'vitest';

describe('validations', () => {
  describe('validateEmail', () => {
    it('Valid email', () => expect(validateEmail('x@x.com')).toEqual(true));
    it('Valid email +', () => expect(validateEmail('x+x@x.com')).toEqual(true));
    it('Valid email weird', () => expect(validateEmail('0@space.city')).toEqual(true));
    it('Invalid email', () => expect(validateEmail('@space.city')).toEqual(false));
    it('Invalid email', () => expect(validateEmail('')).toEqual(false));
    it('Invalid email', () => expect(validateEmail(undefined as any as string)).toEqual(false));
  });

  describe('validateHttpUrl', () => {
    it('Valid http url', () => expect(validateHttpUrl('https://x.com')).toEqual(true));
    it('Valid http url long', () => expect(validateHttpUrl('http://x.city')).toEqual(true));
    it('Valid subdomain', () => expect(validateHttpUrl('https://0.x.x.com')).toEqual(true));
    it('Invalid ftp', () => expect(validateHttpUrl('ftp://x.com')).toEqual(false));
    it('Invalid string', () => expect(validateHttpUrl('lorem ipsum https://x.com')).toEqual(false));
    it('Invalid empty string', () => expect(validateHttpUrl('')).toEqual(false));
    it('Invalid null', () => expect(validateHttpUrl(null as any as string)).toEqual(false));
  });
});
