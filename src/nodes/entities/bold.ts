// Telegram Abstract Syntax Tree (tgast)
// https://github.com/unigramjs/tgast

import type { Data, Parent } from '../../abstract.ts'
import type { NonBlock } from '../../registries/non-block.ts'
import type { Text } from '../text.ts'

/**
 * Extra data for {@linkcode Bold} nodes.
 */
export interface BoldData extends Data { }

/**
 * Telegram bold text entity.
 */
export interface Bold extends Parent {
  /**
   * Node type is `"bold"`.
   */
  type: 'bold'
  /**
   * Content of the bold text.
   */
  children: Array<NonBlock | Text>
  /**
   * Extra data.
   */
  data?: BoldData
}
