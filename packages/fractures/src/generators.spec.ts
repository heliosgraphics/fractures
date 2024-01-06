import { it, describe, expect } from 'vitest';
import { _generateRule } from './generators'
import type { FractureRuleType } from "./types/meta";

const MOCK_RULE: FractureRuleType = {
  selector: 'bg-gray-0',
  declarations: { backgroundColor: 'hsla(var(--hsl-gray-0), var(--bg-opacity))' },
  variables: { '--bg-opacity': 1 }
}

const MOCK_EXPECTED = `.bg-gray-0 {
--bg-opacity: 1;
background-color: hsla(var(--hsl-gray-0), var(--bg-opacity));
}
`

describe('generateRules', () => {
  it('Generates a sample selector', () => expect(_generateRule(MOCK_RULE)).toEqual(MOCK_EXPECTED));
});
