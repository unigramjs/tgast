// Telegram Abstract Syntax Tree (tgast)
// https://github.com/tgast-ecosystem/tgast

import type { Data, Parent } from '../../abstract.ts'
import type { Text } from '../../nodes/text.ts'
import type { StyleEntity } from '../../registries/style-content.ts'

/**
 * Extra data for {@linkcode Email} nodes.
 */
export interface EmailData extends Data { }

/**
 * Telegram email address entity.
 */
export interface Email extends Parent {
  /**
   * Node type is `"email"`.
   */
  type: 'email'
  /**
   * Content of the email address text.
   */
  children: Array<StyleEntity | Text>
  /**
   * Extra data.
   */
  data?: EmailData
}
