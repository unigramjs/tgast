import type { Data, Parent } from '../../abstract.ts'
import type { NonBlock } from '../../registries/non-block.ts'
import type { Text } from '../text.ts'

/**
 * Extra data for {@linkcode Underline} nodes.
 */
export interface UnderlineData extends Data {}

/**
 * Telegram underline text entity.
 */
export interface Underline extends Parent {
	/**
	 * Node type is `"underline"`.
	 */
	type: 'underline'
	/**
	 * Content of the underlined text.
	 */
	children: Array<NonBlock | Text>
	/**
	 * Extra data.
	 */
	data?: UnderlineData
}
