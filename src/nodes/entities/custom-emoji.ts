// Telegram Abstract Syntax Tree (tgast)
// https://github.com/tgast-ecosystem/tgast

import type { Data, Literal } from '../../abstract.ts'

/**
 * Extra data for {@linkcode CustomEmoji} nodes.
 */
export interface CustomEmojiData extends Data { }

/**
 * Telegram custom emoji entity.
 */
export interface CustomEmoji extends Literal {
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
   * Extra data.
   */
  data?: CustomEmojiData
}
