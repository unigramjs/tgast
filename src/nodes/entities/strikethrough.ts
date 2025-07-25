// Telegram Abstract Syntax Tree (tgast)
// https://github.com/tgast-ecosystem/tgast

import type { Data, Parent } from '../../abstract.ts'
import type { InlineEntity } from '../../registries/inline-entity.ts'

/**
 * Extra data for {@linkcode Strikethrough} nodes.
 */
export interface StrikethroughData extends Data { }

/**
 * Telegram strikethrough text entity.
 */
export interface Strikethrough extends Parent {
  /**
   * Node type is `"strikethrough"`.
   */
  type: 'strikethrough'
  /**
   * Content of the strikethrough text.
   */
  children: Exclude<InlineEntity, Strikethrough>[]
  /**
   * Extra data.
   */
  data?: StrikethroughData
}
