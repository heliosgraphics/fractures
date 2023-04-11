import type { FractureRuleType } from '@fractures/library/types/meta'

export interface FractureProps {
  rule: FractureRuleType;
  colorScale?: string;
  colorTint?: number;
}
