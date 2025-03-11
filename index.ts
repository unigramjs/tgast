/**
 * **T**ele**g**ram **A**bstract **S**yntax **T**ree (tgast) format.
 *
 * tgast is a specification for representing [Telegram message entities][tg-entity]
 * as [abstract syntax trees][ast]. It follows the **[unist]** spec.
 *
 * tgast is primarily used in [regram] ecosystems.
 *
 * @see https://github.com/quadratz/tgast
 *
 * [ast]: https://unifiedjs.com/learn/guide/introduction-to-syntax-trees/
 * [regram]: https://github.com/quadratz/regram
 * [tg-entity]: https://core.telegram.org/bots/api#messageentity
 * [unified]: https://github.com/unifiedjs/unified
 * [unist]: https://github.com/syntax-tree/unist
 */
export * from "./src/abstract.type.ts";
export * from "./src/block_content.type.ts";
export * from "./src/phrasing_content.type.ts";
export * from "./src/root.type.ts";
export * from "./src/root_content.type.ts";
export type { User } from "@grammyjs/types";
