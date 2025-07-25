// Telegram Abstract Syntax Tree (tgast)
// https://github.com/tgast-ecosystem/tgast

import type { Blockquote } from '../nodes/entities/blockquote.ts'
import type { Bold } from '../nodes/entities/bold.ts'
import type { BotCommand } from '../nodes/entities/bot-command.ts'
import type { Cashtag } from '../nodes/entities/cashtag.ts'
import type { Code } from '../nodes/entities/code.ts'
import type { CustomEmoji } from '../nodes/entities/custom-emoji.ts'
import type { Email } from '../nodes/entities/email.ts'
import type { ExpandableBlockquote } from '../nodes/entities/expandable-blockquote.ts'
import type { Hashtag } from '../nodes/entities/hashtag.ts'
import type { Italic } from '../nodes/entities/italic.ts'
import type { Mention } from '../nodes/entities/mention.ts'
import type { PhoneNumber } from '../nodes/entities/phone-number.ts'
import type { Pre } from '../nodes/entities/pre.ts'
import type { Spoiler } from '../nodes/entities/spoiler.ts'
import type { Strikethrough } from '../nodes/entities/strikethrough.ts'
import type { TextLink } from '../nodes/entities/text-link.ts'
import type { TextMention } from '../nodes/entities/text-mention.ts'
import type { Underline } from '../nodes/entities/underline.ts'
import type { Url } from '../nodes/entities/url.ts'
// eslint-disable-next-line unused-imports/no-unused-imports
import type { Root } from '../nodes/root.ts'
import type { Text } from '../nodes/text.ts'

/**
 * Registry of {@linkcode Root} child node types.
 *
 * This interface can be extended to include custom node types in this registry.
 * For type of {@linkcode Root} child nodes, see {@linkcode RootContent}.
 */
export interface RootContentMap {
  blockquote: Blockquote
  bold: Bold
  bot_command: BotCommand
  cashtag: Cashtag
  code: Code
  custom_emoji: CustomEmoji
  email: Email
  expandable_blockquote: ExpandableBlockquote
  hashtag: Hashtag
  italic: Italic
  mention: Mention
  phone_number: PhoneNumber
  pre: Pre
  spoiler: Spoiler
  strikethrough: Strikethrough
  text: Text
  text_link: TextLink
  text_mention: TextMention
  underline: Underline
  url: Url
}

/**
 * Type for {@linkcode Root} child nodes.
 *
 * To use custom tgast nodes as root content, they must be added to the
 * {@linkcode RootContentMap}. Then they are automatically part of this type.
 */
export type RootContent = RootContentMap[keyof RootContentMap]
