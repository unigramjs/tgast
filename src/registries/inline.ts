// Telegram Abstract Syntax Tree (tgast)
// https://github.com/unigramjs/tgast

import type { Bold } from '../nodes/entities/bold.ts'
import type { BotCommand } from '../nodes/entities/bot-command.ts'
import type { Cashtag } from '../nodes/entities/cashtag.ts'
import type { Code } from '../nodes/entities/code.ts'
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

/**
 * Registry of {@linkcode Inline} node types.
 *
 * This interface can be extended to include custom node types in this registry.
 * For a combined type of all inline content nodes, see {@linkcode Inline}.
 */
export interface InlineMap {
  bold: Bold
  bot_command: BotCommand
  cashtag: Cashtag
  code: Code
  custom_emoji: CustomEmoji
  email: Email
  hashtag: Hashtag
  italic: Italic
  mention: Mention
  phone_number: PhoneNumber
  spoiler: Spoiler
  strikethrough: Strikethrough
  text_link: TextLink
  text_mention: TextMention
  underline: Underline
  url: Url
}

/**
 * Type for any tgast node that is part of inline content.
 *
 * This includes all entities but `pre`, `blockquote`, and
 * `expandable_blockquote`.
 *
 * To use custom tgast nodes as inline content, they must be added to the
 * {@linkcode InlineMap}. Then they are automatically part of this type.
 */
export type Inline = InlineMap[keyof InlineMap]
