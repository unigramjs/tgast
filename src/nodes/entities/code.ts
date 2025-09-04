import type { Data, Literal } from '../../abstract.ts'

/**
 * Extra data for {@linkcode Code} nodes.
 */
export interface CodeData extends Data {}

/**
 * Telegram monowidth string entity.
 */
export interface Code extends Literal {
	/**
	 * Node type is `"code"`.
	 */
	type: 'code'
	/**
	 * Extra data.
	 */
	data?: CodeData
}
