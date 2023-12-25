import { getSlug } from "utils/slug";
import { it, describe, expect } from 'vitest';

describe('slug', () => {

  describe('getSlug', () => {
    // Good
    it('Gets a lowercase subdomain from case 1', () => expect(getSlug('--BuRn--')).toEqual('-burn-'));
    it('Gets a lowercase subdomain from case 2', () => expect(getSlug('#$%^B#uR#n-')).toEqual('burn-'));
    it('Gets a nice slug for a category', () => expect(getSlug('Gaussian Blur')).toEqual('gaussian-blur'));

    // Empty
    it('Gets empty string if subdomain is undefined', () => expect(getSlug(undefined)).toEqual(''));
  });
});
