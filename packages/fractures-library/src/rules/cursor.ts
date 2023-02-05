import type { FractureRuleType } from "../../types/css-rules";

export const cursor: Array<FractureRuleType> = [
  { selector: 'no-pointer-events', declarations: { pointerEvents: 'none' } },
  { selector: 'cursor-context-menu', declarations: { cursor: 'context-menu' } },
  { selector: 'cursor-crosshair', declarations: { cursor: 'crosshair' } },
  { selector: 'cursor-grab', declarations: { cursor: 'grab' } },
  { selector: 'cursor-grabbing', declarations: { cursor: 'grabbing' } },
  { selector: 'cursor-help', declarations: { cursor: 'help' } },
  { selector: 'cursor-move', declarations: { cursor: 'move' } },
  { selector: 'cursor-pointer', declarations: { cursor: 'pointer' } },
  { selector: 'cursor-progress', declarations: { cursor: 'progress' } },
  { selector: 'cursor-text', declarations: { cursor: 'text' } },
  { selector: 'cursor-wait', declarations: { cursor: 'wait' } },
  { selector: 'cursor-zoom-in', declarations: { cursor: 'zoom-in' } },
  { selector: 'cursor-zoom-out', declarations: { cursor: 'zoom-out' } },
];
