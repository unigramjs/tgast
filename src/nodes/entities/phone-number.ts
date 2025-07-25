// Telegram Abstract Syntax Tree (tgast)
// https://github.com/tgast-ecosystem/tgast

import type { Data, Parent } from '../../abstract.ts'
import type { Text } from '../../nodes/text.ts'
import type { StyleEntity } from '../../registries/style-content.ts'

/**
 * Extra data for {@linkcode PhoneNumber} nodes.
 */
export interface PhoneNumberData extends Data { }

/**
 * Telegram phone number entity.
 */
export interface PhoneNumber extends Parent {
  /**
   * Node type is `"phone_number"`.
   */
  type: 'phone_number'
  /**
   * Content of the phone number text.
   */
  children: Array<StyleEntity | Text>
  /**
   * Extra data.
   */
  data?: PhoneNumberData
}
