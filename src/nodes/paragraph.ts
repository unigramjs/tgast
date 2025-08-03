// Telegram Abstract Syntax Tree (tgast)
// https://github.com/tgast-ecosystem/tgast

import type { Data, Parent } from '../abstract.ts'
import type { RootContent } from '../registries/root-content.ts'

/**
 * Represents a paragraph block.
 *
 * Paragraphs are text separated by two or more consecutive newline
 * characters (`\n`). It corresponds to the paragraph representations in
 * other ASTs (like [mdast] or [hast]).
 *
 * [mdast]: https://github.com/syntax-tree/mdast?tab=readme-ov-file#paragraph
 * [hast]: https://github.com/syntax-tree/hast
 */
export interface Paragraph extends Parent {
  /**
   * Node type is `"paragraph"`.
   */
  type: 'paragraph'
  /**
   * Content of the paragraph.
   */
  children: Exclude<RootContent, Paragraph>[]
  /**
   * Extra data.
   */
  data?: ParagraphData
}

/**
 * Extra data for {@linkcode Paragraph} nodes.
 */
export interface ParagraphData extends Data { }
