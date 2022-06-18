import { generateRules } from './generators'
import type { FractureRuleType } from "fractures-library/types/css-rules";

const mockRule: FractureRuleType = {
  selector: 'bg-gray-0',
  declarations: { backgroundColor: 'hsla(var(--hsl-gray-0), var(--bg-opacity))' },
  hasHover: true,
  variables: { '--bg-opacity': 1 }
}

describe('generateRules', () => {
  it('Generates a sample selector', () => expect(generateRules(mockRule)).toEqual(`.bg-gray-0 {
--bg-opacity: 1;
background-color: hsla(var(--hsl-gray-0), var(--bg-opacity));
}
`));
});
