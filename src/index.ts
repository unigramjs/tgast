/**
 * **T**ele**g**ram **A**bstract **S**yntax **T**ree (tgast) format.
 *
 * tgast is a specification for representing
 * [Telegram message entities][tg-entity] as [abstract syntax trees][ast]. It
 * follows the **[unist]** spec.
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
export * from "./abstract";
export * from "./block-content";
export * from "./message";
export * from "./phrasing-content";
export * from "./root";
export * from "./root-content";
