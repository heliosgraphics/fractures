import { Properties } from "csstype";

export type { Properties };

export interface FractureRuleType {
  declarations: Properties; /** Declaration rules attached to the selector. */
  description?: string; /** Description. */
  isHidden?: boolean; /** Gets generated, but hidden from demo website. */
  selector: string; /** Name of the selector. */
  selectorNice?: string; /** Nice selector name. */
  variables?: Record<string, any>; /** Local CSS variables. */
}

export interface FractureFiles {
  background: Array<FractureRuleType>;
  border: Array<FractureRuleType>;
  color: Array<FractureRuleType>;
  colorOpacity: Array<FractureRuleType>;
  cursor: Array<FractureRuleType>;
  display: Array<FractureRuleType>;
  flex: Array<FractureRuleType>;
  grid: Array<FractureRuleType>;
  height: Array<FractureRuleType>;
  list: Array<FractureRuleType>;
  margin: Array<FractureRuleType>;
  opacity: Array<FractureRuleType>;
  overflow: Array<FractureRuleType>;
  padding: Array<FractureRuleType>;
  position: Array<FractureRuleType>;
  type: Array<FractureRuleType>;
  width: Array<FractureRuleType>;
}
