// Telegram Abstract Syntax Tree (tgast)
// https://github.com/tgast-ecosystem/tgast

import type { Data, Parent } from '../../abstract.ts'
import type { Style } from '../../registries/style.ts'
import type { Text } from '../text.ts'

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
  children: Array<Style | Text>
  /**
   * Extra data.
   */
  data?: BotCommandData
}
