import type { Data, Parent } from '../../abstract.ts'
import type { NonBlock } from '../../registries/non-block.ts'
import type { Text } from '../text.ts'

/**
 * Extra data for {@linkcode Strikethrough} nodes.
 */
export interface StrikethroughData extends Data {}

/**
 * Telegram strikethrough text entity.
 */
export interface Strikethrough extends Parent {
	/**
	 * Node type is `"strikethrough"`.
	 */
	type: 'strikethrough'
	/**
	 * Content of the strikethrough text.
	 */
	children: Array<NonBlock | Text>
	/**
	 * Extra data.
	 */
	data?: StrikethroughData
}
