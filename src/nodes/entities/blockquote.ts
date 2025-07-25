// Telegram Abstract Syntax Tree (tgast)
// https://github.com/tgast-ecosystem/tgast

import type { Data, Parent } from '../../abstract.ts'
import type { InlineEntity } from '../../registries/inline-entity.ts'

/**
 * Extra data for {@linkcode Blockquote} nodes.
 */
export interface BlockquoteData extends Data { }

/**
 * Telegram block quotation entity.
 */
export interface Blockquote extends Parent {
  /**
   * Node type is `"blockquote"`.
   */
  type: 'blockquote'
  /**
   * Content of the blockquote.
   */
  children: InlineEntity[]
  /**
   * Extra data.
   */
  data?: BlockquoteData
}
