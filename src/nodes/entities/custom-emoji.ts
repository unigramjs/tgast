// Telegram Abstract Syntax Tree (tgast)
// https://github.com/tgast-ecosystem/tgast

import type { Data, Parent } from '../../abstract.ts'
import type { Style } from '../../registries/style.ts'
import type { Text } from '../text.ts'

/**
 * Extra data for {@linkcode CustomEmoji} nodes.
 */
export interface CustomEmojiData extends Data { }

/**
 * Telegram custom emoji entity.
 */
export interface CustomEmoji extends Parent {
  /**
   * Node type is `"custom_emoji"`.
   */
  type: 'custom_emoji'
  /**
   * Unique identifier of the emoji.
   *
   * See Telegram API [getCustomEmojiStickers] method for details.
   *
   * [getCustomEmojiStickers]: https://core.telegram.org/bots/api#getcustomemojistickers
   */
  emojiId: string
  /**
   * Content of the custom emoji text.
   */
  children: Array<Style | Text>
  /**
   * Extra data.
   */
  data?: CustomEmojiData
}
