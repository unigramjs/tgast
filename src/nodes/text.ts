import type { Data, Literal } from '../abstract.ts'

/**
 * Extra data for {@linkcode Text} nodes.
 */
export interface TextData extends Data { }

/**
 * Plain text node.
 */
export interface Text extends Literal {
  /**
   * Node type is `"text"`.
   */
  type: 'text'
  /**
   * Extra data.
   */
  data?: TextData
}
