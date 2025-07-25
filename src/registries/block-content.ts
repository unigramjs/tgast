// Telegram Abstract Syntax Tree (tgast)
// https://github.com/tgast-ecosystem/tgast

import type { Blockquote } from '../nodes/entities/blockquote.ts'
import type { Code } from '../nodes/entities/code.ts'
import type { ExpandableBlockquote } from '../nodes/entities/expandable-blockquote.ts'
import type { Pre } from '../nodes/entities/pre.ts'

/**
 * Registry of {@linkcode BlockContent} node types.
 *
 * This interface can be extended to include custom node types in this registry.
 * For a combined type of all block content nodes, see {@linkcode BlockContent}.
 */
export interface BlockContentMap {
  blockquote: Blockquote
  code: Code
  expandable_blockquote: ExpandableBlockquote
  pre: Pre
}

/**
 * Type for any tgast node that is block content.
 *
 * To use custom tgast nodes as block content, they must be added to the
 * {@linkcode BlockContentMap}. Then they are automatically part of this
 * type.
 */
export type BlockContent = BlockContentMap[keyof BlockContentMap]
