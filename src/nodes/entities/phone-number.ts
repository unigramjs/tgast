import type { Data, Parent } from '../../abstract.ts'
import type { Style } from '../../registries/style.ts'
import type { Text } from '../text.ts'

/**
 * Extra data for {@linkcode PhoneNumber} nodes.
 */
export interface PhoneNumberData extends Data {}

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
	children: Array<Style | Text>
	/**
	 * Extra data.
	 */
	data?: PhoneNumberData
}
