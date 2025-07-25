// Telegram Abstract Syntax Tree (tgast)
// https://github.com/tgast-ecosystem/tgast

import type { Data, Parent } from '../../abstract.ts'
import type { Text } from '../../nodes/text.ts'
import type { StyleEntity } from '../../registries/style-content.ts'

/**
 * Extra data for {@linkcode Hashtag} nodes.
 */
export interface HashtagData extends Data { }

/**
 * Telegram hashtag entity.
 */
export interface Hashtag extends Parent {
  /**
   * Node type is `"hashtag"`.
   */
  type: 'hashtag'
  /**
   * Content of the hashtag text.
   */
  children: Array<StyleEntity | Text>
  /**
   * Extra data.
   */
  data?: HashtagData
}
