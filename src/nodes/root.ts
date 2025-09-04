import type { Data, Parent } from '../abstract.ts'

/**
 * Ecosystem data for tgast root nodes.
 */
export interface RootData extends Data {}

/**
 * Document root node.
 *
 * Must be used as the root of a tgast tree. Cannot be a child.
 */
export interface Root extends Parent {
	/**
	 * Node type is always `"root"`.
	 */
	type: 'root'
	/**
	 * Data associated with this root node.
	 */
	data?: RootData
}
