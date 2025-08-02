// Telegram Abstract Syntax Tree (tgast)
// https://github.com/tgast-ecosystem/tgast

import type { Data, Parent } from '../../abstract.ts'
import type { InlineEntity } from '../../registries/inline-entity.ts'

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
  children: InlineEntity[]
  /**
   * Extra data.
   */
  data?: BoldData
}
