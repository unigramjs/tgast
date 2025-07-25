// Telegram Abstract Syntax Tree (tgast)
// https://github.com/tgast-ecosystem/tgast

import type { Bold } from '../nodes/entities/bold.ts'
import type { BotCommand } from '../nodes/entities/bot-command.ts'
import type { Cashtag } from '../nodes/entities/cashtag.ts'
import type { CustomEmoji } from '../nodes/entities/custom-emoji.ts'
import type { Email } from '../nodes/entities/email.ts'
import type { Hashtag } from '../nodes/entities/hashtag.ts'
import type { Italic } from '../nodes/entities/italic.ts'
import type { Mention } from '../nodes/entities/mention.ts'
import type { PhoneNumber } from '../nodes/entities/phone-number.ts'
import type { Spoiler } from '../nodes/entities/spoiler.ts'
import type { Strikethrough } from '../nodes/entities/strikethrough.ts'
import type { TextLink } from '../nodes/entities/text-link.ts'
import type { TextMention } from '../nodes/entities/text-mention.ts'
import type { Underline } from '../nodes/entities/underline.ts'
import type { Url } from '../nodes/entities/url.ts'
import type { Text } from '../nodes/text.ts'
// eslint-disable-next-line unused-imports/no-unused-imports
import type { BlockContent } from '../registries/block-content.ts'

/**
 * Registry of {@linkcode InlineEntity} node types.
 *
 * This interface can be extended to include custom node types. For a combined
 * type representing all inline entity nodes, see {@linkcode InlineEntity}.
 */
export interface InlineEntityMap {
  bold: Bold
  bot_command: BotCommand
  cashtag: Cashtag
  custom_emoji: CustomEmoji
  email: Email
  hashtag: Hashtag
  italic: Italic
  mention: Mention
  phone_number: PhoneNumber
  spoiler: Spoiler
  strikethrough: Strikethrough
  text: Text
  text_link: TextLink
  text_mention: TextMention
  underline: Underline
  url: Url
}

/**
 * Type for any tgast node that represents an inline entity, excluding
 * {@linkcode BlockContent block-style} nodes.
 *
 * To use a custom tgast node as an inline entity, add it to the
 * {@linkcode InlineEntityMap}. It will then automatically become part of this
 * type.
 */
export type InlineEntity = InlineEntityMap[keyof InlineEntityMap]
