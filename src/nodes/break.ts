// Telegram Abstract Syntax Tree (tgast)
// https://github.com/tgast-ecosystem/tgast

import type { Data, Parent } from '../abstract.ts'
import type { Text } from '../nodes/text.ts'
import type { Style } from '../registries/style.ts'

/**
 * Represents line breaks (`\n`) in text.
 *
 * For example, the tree for the text `Hello\n\nWorld!` is
 * ```json
 * {
 *   "type": "root",
 *   "children": [
 *     {
 *       "type": "text",
 *       "value": "Hello"
 *     },
 *     {
 *       "type": "break",
 *       "children": [
 *         {
 *           "type": "text",
 *           "value": "\n\n"
 *         }
 *       ]
 *     },
 *     {
 *       "type": "text",
 *       "value": "World!"
 *     },
 *   ]
 * }
 * ```
 */
export interface Break extends Parent {
  /**
   * Node type is `"break"`.
   */
  type: 'break'
  /**
   * Content of the break.
   */
  children: Array<Style | Text>
  /**
   * Extra data.
   */
  data?: BreakData
}

/**
 * Extra data for {@linkcode Break} nodes.
 */
export interface BreakData extends Data { }
