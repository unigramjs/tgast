// Telegram Abstract Syntax Tree (tgast)
// https://github.com/unigramjs/tgast

import type { Data, Parent } from '../../abstract.ts'
import type { Inline } from '../../registries/inline.ts'
import type { Text } from '../text.ts'

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
  children: Array<Inline | Text>
  /**
   * Extra data.
   */
  data?: BlockquoteData
}
