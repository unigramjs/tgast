import type { Data, Parent } from '../../abstract.ts'
import type { Style } from '../../registries/style.ts'
import type { Text } from '../text.ts'

/**
 * Extra data for {@linkcode Hashtag} nodes.
 */
export interface HashtagData extends Data {}

/**
 * Telegram hashtag entity.
 */
export interface Hashtag extends Parent {
	/**
	 * Node type is `"hashtag"`.
	 */
	type: 'hashtag'
	/**
	 * Content of the hashtag text.
	 */
	children: Array<Style | Text>
	/**
	 * Extra data.
	 */
	data?: HashtagData
}
