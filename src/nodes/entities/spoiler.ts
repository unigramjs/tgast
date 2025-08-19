// Telegram Abstract Syntax Tree (tgast)
// https://github.com/unigramjs/tgast

import type { Data, Parent } from '../../abstract.ts'
import type { NonBlock } from '../../registries/non-block.ts'
import type { Text } from '../text.ts'

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
  children: Array<NonBlock | Text>
  /**
   * Extra data.
   */
  data?: SpoilerData
}
