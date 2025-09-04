import type { Data, Parent } from '../../abstract.ts'
import type { Style } from '../../registries/style.ts'
import type { Text } from '../text.ts'

/**
 * Extra data for {@linkcode Mention} nodes.
 */
export interface MentionData extends Data {}

/**
 * Telegram mention entity.
 */
export interface Mention extends Parent {
	/**
	 * Node type is `"mention"`.
	 */
	type: 'mention'
	/**
	 * Content of the mention text.
	 */
	children: Array<Style | Text>
	/**
	 * Extra data.
	 */
	data?: MentionData
}
