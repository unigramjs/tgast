// Telegram Abstract Syntax Tree (tgast)
// https://github.com/unigramjs/tgast

import type { Data, Parent } from '../abstract.ts'
import type { RootContent } from '../registries/root-content.ts'

/**
 * Represents any node that is not defined in the tgast spec.
 */
export interface Unknown extends Parent {
  /**
   * Node type is always `"unknown"`.
   */
  type: 'unknown'
  /**
   * Child nodes of this unknown node.
   */
  children: RootContent[]
  /**
   * Extra data.
   *
   * Entity properties go in `data.entity`.
   */
  data?: UnknownData
}

/**
 * Optional extra data for {@linkcode Unknown} nodes.
 */
export interface UnknownData extends Data {
  /**
   * Original Telegram message entity.
   *
   * All extra properties are stored here.
   */
  entity?: {
    /** Entity type. */
    type: string
    /** Extra entity properties. */
    [key: string]: unknown
  }
}
