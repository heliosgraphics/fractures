import { it, describe, expect } from 'vitest';
import { sanitizeText, removeMarkdown, middleEllipsis } from './strings'

describe('strings', () => {
  describe('sanitizeText', () => {
    it('removes an onclick tag', () => expect(sanitizeText("a <b onClick=\"alert('hee hee')\">basic</b> tag")).toEqual("a <b>basic</b> tag"));
    it('returns empty for undefined', () => expect(sanitizeText(<any>undefined)).toEqual(""));
  });

  describe('removeMarkdown', () => {
    it('removes a bold format', () => expect(removeMarkdown('a **bold** text')).toEqual("a bold text"));
    it('removes a link but keeps the name', () => expect(removeMarkdown('a [link](https://x.com) hello')).toEqual("a link hello"));
    it('removes a bold link', () => expect(removeMarkdown('a [bold **link**](https://x.com) hello')).toEqual("a bold link hello"));
  });

  describe('middleEllipsis', () => {
    it('works with short word', () => expect(middleEllipsis('ellipsis', 5)).toEqual("e...s"));
    it('works with longer word', () => expect(middleEllipsis('lorem ipsum dolor', 12)).toEqual("lore...olor"));
    it('fails silently for undefined', () => expect(middleEllipsis(<any>null, 12)).toEqual(""));
  });
});
