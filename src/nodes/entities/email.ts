import type { Data, Parent } from '../../abstract.ts'
import type { Style } from '../../registries/style.ts'
import type { Text } from '../text.ts'

/**
 * Extra data for {@linkcode Email} nodes.
 */
export interface EmailData extends Data {}

/**
 * Telegram email address entity.
 */
export interface Email extends Parent {
	/**
	 * Node type is `"email"`.
	 */
	type: 'email'
	/**
	 * Content of the email address text.
	 */
	children: Array<Style | Text>
	/**
	 * Extra data.
	 */
	data?: EmailData
}
