/**
 * Telegram Abstract Syntax Tree (tgast) format.
 *
 * tgast is a specification for representing
 * [Telegram message entities][tg-entity] as [abstract syntax trees][ast]. It
 * follows the **[unist]** spec.
 *
 * tgast is primarily used in [regram] ecosystems.
 *
 * @see https://github.com/tgast-ecosystem/tgast
 *
 * [ast]: https://unifiedjs.com/learn/guide/introduction-to-syntax-trees/
 * [regram]: https://github.com/tgast-ecosystem/regram
 * [tg-entity]: https://core.telegram.org/bots/api#messageentity
 * [unified]: https://github.com/unifiedjs/unified
 * [unist]: https://github.com/syntax-tree/unist
 *
 * @module
 */

export type { Data, Literal, Literals, Node, Nodes, Parent, Parents } from './abstract.ts'
export type { User } from './message.ts'
export type { Blockquote, BlockquoteData } from './nodes/entities/blockquote.ts'
export type { Bold, BoldData } from './nodes/entities/bold.ts'
export type { BotCommand, BotCommandData } from './nodes/entities/bot-command.ts'
export type { Cashtag, CashtagData } from './nodes/entities/cashtag.ts'
export type { Code, CodeData } from './nodes/entities/code.ts'
export type { CustomEmoji, CustomEmojiData } from './nodes/entities/custom-emoji.ts'
export type { Email, EmailData } from './nodes/entities/email.ts'
export type { ExpandableBlockquote, ExpandableBlockquoteData } from './nodes/entities/expandable-blockquote.ts'
export type { Hashtag, HashtagData } from './nodes/entities/hashtag.ts'
export type { Italic, ItalicData } from './nodes/entities/italic.ts'
export type { Mention, MentionData } from './nodes/entities/mention.ts'
export type { PhoneNumber, PhoneNumberData } from './nodes/entities/phone-number.ts'
export type { Pre, PreData } from './nodes/entities/pre.ts'
export type { Spoiler, SpoilerData } from './nodes/entities/spoiler.ts'
export type { Strikethrough, StrikethroughData } from './nodes/entities/strikethrough.ts'
export type { TextLink, TextLinkData } from './nodes/entities/text-link.ts'
export type { TextMention, TextMentionData } from './nodes/entities/text-mention.ts'
export type { Underline, UnderlineData } from './nodes/entities/underline.ts'
export type { Url, UrlData } from './nodes/entities/url.ts'
export type { Root, RootData } from './nodes/root.ts'
export type { Text, TextData } from './nodes/text.ts'
export type { Unknown, UnknownData } from './nodes/unknown.ts'
export type { Inline, InlineMap } from './registries/inline.ts'
export type { NonBlock, NonBlockMap } from './registries/non-block.ts'
export type { RootContent, RootContentMap } from './registries/root-content.ts'
export type { Style, StyleMap } from './registries/style.ts'
