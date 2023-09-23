import { it, describe, expect } from 'vitest';
import { _getFontWeight } from "@fractures/library/utils/typography";

describe('_getFontWeight', () => {
  it('Generates thin fontWeight', () => expect(_getFontWeight("thin")).toEqual("fw-thin"));
  it('Generates regular fontWeight', () => expect(_getFontWeight("normal")).toEqual("fw-normal"));
  it('Generates black fontWeight', () => expect(_getFontWeight("black")).toEqual("fw-black"));

  it('Generates no fontWeight for undefined', () => expect(_getFontWeight(undefined as any)).toEqual(""));
  it('Generates no fontWeight for empty', () => expect(_getFontWeight('' as any)).toEqual(""));
});
