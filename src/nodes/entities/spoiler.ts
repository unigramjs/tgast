// Telegram Abstract Syntax Tree (tgast)
// https://github.com/tgast-ecosystem/tgast

import type { Data, Parent } from '../../abstract.ts'
import type { InlineEntity } from '../../registries/inline-entity.ts'

/**
 * Extra data for {@linkcode Spoiler} nodes.
 */
export interface SpoilerData extends Data { }

/**
 * Telegram spoiler message entity.
 */
export interface Spoiler extends Parent {
  /**
   * Node type is `"spoiler"`.
   */
  type: 'spoiler'
  /**
   * Content of the spoiler.
   */
  children: InlineEntity[]
  /**
   * Extra data.
   */
  data?: SpoilerData
}
