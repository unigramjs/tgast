// Telegram Abstract Syntax Tree (tgast)
// https://github.com/tgast-ecosystem/tgast

import type { Data, Parent } from '../../abstract.ts'
import type { Text } from '../../nodes/text.ts'
import type { StyleEntity } from '../../registries/style-content.ts'

/**
 * Telegram URL entity.
 */
export interface Url extends Parent {
  /**
   * Node type is `"url"`.
   */
  type: 'url'
  /**
   * Content of the URL text.
   */
  children: Array<StyleEntity | Text>
  /**
   * Extra data.
   */
  data?: UrlData
}

/**
 * Extra data for {@linkcode Url} nodes.
 */
export interface UrlData extends Data { }
