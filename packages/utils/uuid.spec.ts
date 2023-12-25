import { getUUID, TEST_UUID } from './uuid'
import { it, describe, expect } from 'vitest';

describe('validations', () => {
  describe('getUUID', () => {
    const MOCK_UUID = getUUID()

    it('returns something', () => expect(MOCK_UUID).toEqual(TEST_UUID));
    it('return any string', () => expect(getUUID('any-string')).toEqual('any-string'));
  });
});
