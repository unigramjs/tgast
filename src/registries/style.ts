// Telegram Abstract Syntax Tree (tgast)
// https://github.com/tgast-ecosystem/tgast

import type { Bold } from '../nodes/entities/bold.ts'
import type { Italic } from '../nodes/entities/italic.ts'
import type { Spoiler } from '../nodes/entities/spoiler.ts'
import type { Strikethrough } from '../nodes/entities/strikethrough.ts'
import type { Underline } from '../nodes/entities/underline.ts'

/**
 * Registry of {@linkcode Style} node types.
 *
 * This interface can be extended to register additional custom inline style
 * nodes. For a combined type representing all styled content nodes, see
 * {@linkcode Style}.
 */
export interface StyleMap {
  bold: Bold
  italic: Italic
  spoiler: Spoiler
  strikethrough: Strikethrough
  underline: Underline
}

/**
 * Type for any tgast node that applies text styling.
 *
 * To include custom style nodes in this type, add them to
 * {@linkcode StyleMap}. They will be automatically included.
 */
export type Style = StyleMap[keyof StyleMap]
