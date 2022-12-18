import type { FractureRuleType } from 'fractures-library/types/css-rules'

export interface FractureProps {
  rule: FractureRuleType;
  colorScale?: string;
  colorTint?: number;
}
