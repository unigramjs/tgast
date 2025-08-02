// Telegram Abstract Syntax Tree (tgast)
// https://github.com/tgast-ecosystem/tgast

import type { Data, Parent } from '../../abstract.ts'
import type { Style } from '../../registries/style.ts'
import type { Text } from '../text.ts'

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
  children: Array<Style | Text>
  /**
   * Extra data.
   */
  data?: UrlData
}

/**
 * Extra data for {@linkcode Url} nodes.
 */
export interface UrlData extends Data { }
