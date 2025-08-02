// Telegram Abstract Syntax Tree (tgast)
// https://github.com/tgast-ecosystem/tgast

import type { Data, Parent } from '../../abstract.ts'
import type { InlineEntity } from '../../registries/inline-entity.ts'

/**
 * Extra data for {@linkcode Underline} nodes.
 */
export interface UnderlineData extends Data { }

/**
 * Telegram underline text entity.
 */
export interface Underline extends Parent {
  /**
   * Node type is `"underline"`.
   */
  type: 'underline'
  /**
   * Content of the underlined text.
   */
  children: InlineEntity[]
  /**
   * Extra data.
   */
  data?: UnderlineData
}
