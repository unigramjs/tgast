import type { Data, Parent } from '../../abstract.ts'
import type { User } from '../../message.ts'
import type { Style } from '../../registries/style.ts'
import type { Text } from '../text.ts'

/**
 * Extra data for {@linkcode TextMention} nodes.
 */
export interface TextMentionData extends Data {}

/**
 * Telegram text mention entity.
 */
export interface TextMention extends Parent {
	/**
	 * Node type is `"text_mention"`.
	 */
	type: 'text_mention'
	/**
	 * User mentioned.
	 */
	user: User
	/**
	 * Content of the text mention text.
	 */
	children: Array<Style | Text>
	/**
	 * Extra data.
	 */
	data?: TextMentionData
}
