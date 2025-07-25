// Telegram Abstract Syntax Tree (tgast)
// https://github.com/tgast-ecosystem/tgast

import type { Data, Parent } from '../../abstract.ts'
import type { Text } from '../../nodes/text.ts'
import type { StyleEntity } from '../../registries/style-content.ts'

/**
 * Extra data for {@linkcode Mention} nodes.
 */
export interface MentionData extends Data { }

/**
 * Telegram mention entity.
 */
export interface Mention extends Parent {
  /**
   * Node type is `"mention"`.
   */
  type: 'mention'
  /**
   * Content of the mention text.
   */
  children: Array<StyleEntity | Text>
  /**
   * Extra data.
   */
  data?: MentionData
}
