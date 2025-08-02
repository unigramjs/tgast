// Telegram Abstract Syntax Tree (tgast)
// https://github.com/tgast-ecosystem/tgast

import type { Data, Parent } from '../../abstract.ts'
import type { InlineEntity } from '../../registries/inline-entity.ts'

/**
 * Extra data for {@linkcode Italic} nodes.
 */
export interface ItalicData extends Data { }

/**
 * Telegram italic text entity.
 */
export interface Italic extends Parent {
  /**
   * Node type is `"italic"`.
   */
  type: 'italic'
  /**
   * Content of the italic text.
   */
  children: InlineEntity[]
  /**
   * Extra data.
   */
  data?: ItalicData
}
