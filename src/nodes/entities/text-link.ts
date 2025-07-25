// Telegram Abstract Syntax Tree (tgast)
// https://github.com/tgast-ecosystem/tgast

import type { Data, Parent } from '../../abstract.ts'
import type { Text } from '../../nodes/text.ts'
import type { StyleEntity } from '../../registries/style-content.ts'

/**
 * Extra data for {@linkcode TextLink} nodes.
 */
export interface TextLinkData extends Data { }

/**
 * Telegram text URL entity.
 */
export interface TextLink extends Parent {
  /**
   * Node type is `"text_link"`.
   */
  type: 'text_link'
  /**
   * URL for the link.
   */
  url: string
  /**
   * Content of the text URL.
   */
  children: Array<StyleEntity | Text>
  /**
   * Extra data.
   */
  data?: TextLinkData
}
