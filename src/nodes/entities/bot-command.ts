// Telegram Abstract Syntax Tree (tgast)
// https://github.com/tgast-ecosystem/tgast

import type { Data, Parent } from '../../abstract.ts'
import type { Text } from '../../nodes/text.ts'
import type { StyleEntity } from '../../registries/style-content.ts'

/**
 * Extra data for {@linkcode BotCommand} nodes.
 */
export interface BotCommandData extends Data { }

/**
 * Telegram bot command entity.
 */
export interface BotCommand extends Parent {
  /**
   * Node type is `"bot_command"`.
   */
  type: 'bot_command'
  /**
   * Content of the bot command text.
   */
  children: Array<StyleEntity | Text>
  /**
   * Extra data.
   */
  data?: BotCommandData
}
