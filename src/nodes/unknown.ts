// Telegram Abstract Syntax Tree (tgast)
// https://github.com/tgast-ecosystem/tgast

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
   * If this node represents a Telegram entity type, all extra properties are
   * stored in this `data` property.
   */
  data?: UnknownData
}

/**
 * Optional extra data for {@linkcode Unknown} nodes.
 */
export interface UnknownData extends Data { }
