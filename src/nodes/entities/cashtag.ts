// Telegram Abstract Syntax Tree (tgast)
// https://github.com/tgast-ecosystem/tgast

import type { Data, Parent } from '../../abstract.ts'
import type { Text } from '../../nodes/text.ts'
import type { StyleEntity } from '../../registries/style-content.ts'

/**
 * Extra data for {@linkcode Cashtag} nodes.
 */
export interface CashtagData extends Data { }

/**
 * Telegram cashtag entity.
 */
export interface Cashtag extends Parent {
  /**
   * Node type is `"cashtag"`.
   */
  type: 'cashtag'
  /**
   * Content of the cashtag text.
   */
  children: Array<StyleEntity | Text>
  /**
   * Extra data.
   */
  data?: CashtagData
}
