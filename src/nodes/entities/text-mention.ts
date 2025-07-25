// Telegram Abstract Syntax Tree (tgast)
// https://github.com/tgast-ecosystem/tgast

import type { Data, Parent } from '../../abstract.ts'
import type { User } from '../../message.ts'
import type { Text } from '../../nodes/text.ts'
import type { StyleEntity } from '../../registries/style-content.ts'

/**
 * Extra data for {@linkcode TextMention} nodes.
 */
export interface TextMentionData extends Data { }

/**
 * Telegram text mention entity.
 */
export interface TextMention extends Parent {
  /**
   * Node type is `"text_mention"`.
   */
  type: 'text_mention'
  /**
   * User mentioned.
   */
  user: User
  /**
   * Content of the text mention text.
   */
  children: Array<StyleEntity | Text>
  /**
   * Extra data.
   */
  data?: TextMentionData
}
