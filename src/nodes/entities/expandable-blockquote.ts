// Telegram Abstract Syntax Tree (tgast)
// https://github.com/unigramjs/tgast

import type { Data, Parent } from '../../abstract.ts'
import type { Inline } from '../../registries/inline.ts'
import type { Text } from '../text.ts'

/**
 * Extra data for {@linkcode ExpandableBlockquote} nodes.
 */
export interface ExpandableBlockquoteData extends Data { }

/**
 * Telegram expandable blockquote entity.
 */
export interface ExpandableBlockquote extends Parent {
  /**
   * Node type is `"expandable_blockquote"`.
   */
  type: 'expandable_blockquote'
  /**
   * Content of the blockquote.
   */
  children: Array<Inline | Text>
  /**
   * Extra data.
   */
  data?: ExpandableBlockquoteData
}
