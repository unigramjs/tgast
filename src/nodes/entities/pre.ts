import type { Data, Literal } from '../../abstract.ts'

/**
 * Telegram monowidth block entity.
 */
export interface Pre extends Literal {
	/**
	 * Node type is `"pre"`.
	 */
	type: 'pre'
	/**
	 * Programming language, if any.
	 */
	language?: string
	/**
	 * Extra data.
	 */
	data?: PreData
}

/**
 * Extra data for {@linkcode Pre} nodes.
 */
export interface PreData extends Data {}
