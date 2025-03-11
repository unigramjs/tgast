![tgast banner](https://raw.githubusercontent.com/quadratz/tgast/refs/heads/main/images/tgast.svg)

**T**ele**g**ram **A**bstract **S**yntax **T**ree for Telegram message entities.

---

**tgast** provides a way to represent [Telegram message entities][telegram-message-entity]
as a structured format called an **[Abstract Syntax Tree (AST)][abstract-syntax-tree]**.
It's built using the **[unist][github-unist]** specification, making it easy
to work with and extend.

For released versions, see [releases][github-tgast-releases].

## Contents

- [Introduction](#introduction)
  - [Where this specification fits](#where-this-specification-fits)
- [Installation](#installation)
- [Nodes](#nodes)
  - [`Blockquote`](#blockquote)
  - [`Bold`](#bold)
  - [`BotCommand`](#botcommand)
  - [`Cashtag`](#cashtag)
  - [`Code`](#code)
  - [`CustomEmoji`](#customemoji)
  - [`Email`](#email)
  - [`ExpandableBlockquote`](#expandableblockquote)
  - [`Hashtag`](#hashtag)
  - [`Italic`](#italic)
  - [`Mention`](#mention)
  - [`PhoneNumber`](#phonenumber)
  - [`Pre`](#pre)
  - [`Spoiler`](#spoiler)
  - [`Strikethrough`](#strikethrough)
  - [`Text`](#text)
  - [`TextLink`](#textlink)
  - [`TextMention`](#textmention)
  - [`Underline`](#underline)
  - [`Url`](#url)
- [Glossary](#glossary)
- [References](#references)
- [Related](#related)

## Introduction

tgast is a specification for representing [Telegram message entities][telegram-message-entity]
as an [Abstract Syntax Tree (AST)][abstract-syntax-tree].
It was initially created for the [regram][github-regram] project.

### Where this specification fits

tgast leverages the [unist][github-unist] format for syntax trees, allowing you
to benefit from its extensive [ecosystem of utilities][github-unist-utilities].

tgast is used within the [regram][github-regram] and [unified][unified] projects
for processing Telegram message content.

## Installation

If you are using TypeScript, you can directly use the tgast types defined
in the TypeScript files. To make them available in your project, install
the package using your preferred package manager:

```sh
# deno
deno add -D jsr:@qz/tgast

# bun
bunx jsr -D add @qz/tgast

# pnpm
pnpm dlx -D jsr add @qz/tgast

# yarn
yarn dlx -D jsr add @qz/tgast

# npm jsr
npx jsr add -D @qz/tgast

# npm
npm add -D tgast
```

## Nodes

### `Blockquote`

```ts
interface Blockquote extends Parent {
  type: "blockquote";
  data?: BlockquoteData;
  position?: Position;
  children: PhrasingContent[];
}
```

**Blockquote** ([type reference][blockquote-type]): Telegram block quotation.
Represents `blockquote` entities in Telegram messages.

Example:

![Blockquote screenshot.](https://raw.githubusercontent.com/quadratz/tgast/refs/heads/main/images/blockquote.png)

```json
{
  "text": "This is a blockquote.",
  "entities": [
    {
      "offset": 0,
      "length": 21,
      "type": "blockquote"
    }
  ]
}
```

Yields:

```ts
{
  type: "blockquote",
  position: {
    start: {
      line: 1,
      column: 1,
      offset: 0
    },
    end: {
      line: 1,
      column: 22,
      offset: 21
    }
  },
  children: [
    { 
      type: "text",
      value: "This is a blockquote.",
      position: {
        start: {
          line: 1,
          column: 1,
          offset: 0
        },
        end: {
          line: 1,
          column: 22,
          offset: 21
        }
      }
    }
  ],
}
```

---

### `Bold`

```ts
interface Bold extends Parent {
  type: "bold";
  data?: BoldData;
  position?: Position;
  children: PhrasingContent[];
}
```

**Bold** ([type reference][bold-type]): Telegram bold text.
Represents `bold` entities in Telegram messages.

Example:

![Bold screenshot.](https://raw.githubusercontent.com/quadratz/tgast/refs/heads/main/images/bold.png)

```json
{
  "text": "This is a bold text.",
  "entities": [
    {
      "offset": 0,
      "length": 20,
      "type": "bold"
    }
  ]
}
```

Yields:

```ts
{
  type: "bold",
  position: {
    start: {
      line: 1,
      column: 1,
      offset: 0
    },
    end: {
      line: 1,
      column: 21,
      offset: 20
    }
  },
  children: [
    { 
      type: "text",
      value: "This is a bold text.",
      position: {
        start: {
          line: 1,
          column: 1,
          offset: 0
        },
        end: {
          line: 1,
          column: 21,
          offset: 20
        }
      }
    }
  ]
}
```

---

### `BotCommand`

```ts
interface BotCommand extends Literal {
  type: "bot_command";
  value: string;
  data?: BotCommandData;
  position?: Position;
}
```

**BotCommand** ([type reference][bot-command-type]): Telegram bot command.
Represents `bot_command` entities in Telegram messages.

Example:

![Bot command screenshot.](https://raw.githubusercontent.com/quadratz/tgast/refs/heads/main/images/bot_command.png)

```json
{
  "text": "/start@entityparser_qz_bot",
  "entities": [
    {
      "offset": 0,
      "length": 26,
      "type": "bot_command"
    }
  ]
}
```

Yields:

```ts
{
  type: "bot_command",
  value: "/start@entityparser_qz_bot",
  position: {
    start: {
      line: 1,
      column: 1,
      offset: 0
    },
    end: {
      line: 1,
      column: 27,
      offset: 26
    }
  }
}
```

---

### `Cashtag`

```ts
interface Cashtag extends Literal {
  type: "cashtag";
  value: string;
  data?: CashtagData;
  position?: Position;
}
```

**Cashtag** ([type reference][cashtag-type]): Telegram cashtag.
Represents `cashtag` entities in Telegram messages.

Example:

![Cashtag screenshot.](https://raw.githubusercontent.com/quadratz/tgast/refs/heads/main/images/cashtag.png)

```json
{
  "text": "$IDR",
  "entities": [
    {
      "offset": 0,
      "length": 4,
      "type": "cashtag"
    }
  ]
}
```

Yields:

```ts
{
  type: "cashtag",
  value: "$IDR",
  position: {
    start: {
      line: 1,
      column: 1,
      offset: 0
    },
    end: {
      line: 1,
      column: 5,
      offset: 4
    }
  }
}
```

---

### `Code`

```ts
interface Code extends Literal {
  type: "code";
  value: string;
  data?: CodeData;
  position?: Position;
}
```

**Code** ([type reference][code-type]): Telegram monowidth string.
Represents `code` entities in Telegram messages.

Example:

![Code screenshot.](https://raw.githubusercontent.com/quadratz/tgast/refs/heads/main/images/code.png)

```json
{
  "text": "This is a monowidth string.",
  "entities": [
    {
      "offset": 0,
      "length": 27,
      "type": "code"
    }
  ]
}
```

Yields:

```ts
{
  type: "code",
  value: "This is a monowidth string.",
  position: {
    start: {
      line: 1,
      column: 1,
      offset: 0
    },
    end: {
      line: 1,
      column: 28,
      offset: 27
    }
  }
}
```

---

### `CustomEmoji`

```ts
interface CustomEmoji extends Literal {
  type: "custom_emoji";
  emojiId: string;
  value: string;
  data?: CustomEmojiData;
  position?: Position;
}
```

**CustomEmoji** ([type reference][custom-emoji-type]): Telegram custom emoji.
Represents `custom_emoji` entities in Telegram messages.

Example:

![Custom emoji screenshot.](https://raw.githubusercontent.com/quadratz/tgast/refs/heads/main/images/custom_emoji.png)

```json
{
  "text": "👀",
  "entities": [
    {
      "offset": 0,
      "length": 2,
      "type": "custom_emoji",
      "custom_emoji_id": "5269436882302811645"
    }
  ]
}
```

Yields:

```ts
{
  type: "custom_emoji",
  emojiId: "5269436882302811645",
  value: "👀",
  position: {
    start: {
      line: 1,
      column: 1,
      offset: 0
    },
    end: {
      line: 1,
      column: 3,
      offset: 2
    }
  }
}
```

---

### `Email`

```ts
interface Email extends Literal {
  type: "email";
  value: string;
  data?: EmailData;
  position?: Position;
}
```

**Email** ([type reference][email-type]): Telegram email address.
Represents `email` entities in Telegram messages.

Example:

![Email address message screenshot.](https://raw.githubusercontent.com/quadratz/tgast/refs/heads/main/images/email.png)

```json
{
  "text": "quadratz@proton.me",
  "entities": [
    {
      "offset": 0,
      "length": 18,
      "type": "email"
    }
  ]
}
```

Yields:

```ts
{
  type: "email",
  value: "quadratz@proton.me",
  position: {
    start: {
      line: 1,
      column: 1,
      offset: 0
    },
    end: {
      line: 1,
      column: 19,
      offset: 18
    }
  }
}
```

---

### `ExpandableBlockquote`

```ts
interface ExpandableBlockquote extends Parent {
  type: "expandable_blockquote";
  data?: ExpandableBlockquoteData;
  position?: Position;
  children: PhrasingContent[];
}
```

**ExpandableBlockquote** ([type reference][expandable-blockquote-type]): Telegram expandable blockquote. Represents `expandable_blockquote` entities in Telegram messages.

Example:

![Expandable blockquote message screenshot.](https://raw.githubusercontent.com/quadratz/tgast/refs/heads/main/images/expandable_blockquote.png)

```json
{
  "text": "This\nis\nan\nexpandable\nblockquote.",
  "entities": [
    {
      "offset": 0,
      "length": 33,
      "type": "expandable_blockquote"
    }
  ]
}
```

Yields:

```ts
{
  type: "expandable_blockquote",
  position: {
    start: {
      line: 1,
      column: 1,
      offset: 0
    },
    end: {
      line: 5,
      column: 12,
      offset: 33
    }
  },
  children: [
    { 
      type: "text",
      value: "This\nis\nan\nexpandable\nblockquote.",
      position: {
        start: {
          line: 1,
          column: 1,
          offset: 0
        },
        end: {
          line: 5,
          column: 12,
          offset: 33
        }
      }
    }
  ]
}
```

---

### `Hashtag`

```ts
interface Hashtag extends Literal {
  type: "hashtag";
  value: string;
  data?: HashtagData;
  position?: Position;
}
```

**Hashtag** ([type reference][hashtag-type]): Telegram hashtag.
Represents `hashtag` entities in Telegram messages.

Example:

![Hashtag message screenshot.](https://raw.githubusercontent.com/quadratz/tgast/refs/heads/main/images/hashtag.png)

```json
{
  "text": "#DontBeEvil",
  "entities": [
    {
      "offset": 0,
      "length": 11,
      "type": "hashtag"
    }
  ]
}
```

Yields:

```ts
{
  type: "hashtag",
  value: "#DontBeEvil",
  position: {
    start: {
      line: 1,
      column: 1,
      offset: 0
    },
    end: {
      line: 1,
      column: 12,
      offset: 11
    }
  }
}
```

---

### `Italic`

```ts
interface Italic extends Parent {
  type: "italic";
  data?: ItalicData;
  position?: Position;
  children: PhrasingContent[];
}
```

**Italic** ([type reference][italic-type]): Telegram italic text.
Represents `italic` entities in Telegram messages.

Example:

![Italic message screenshot.](https://raw.githubusercontent.com/quadratz/tgast/refs/heads/main/images/italic.png)

```json
{
  "text": "This is an italic text.",
  "entities": [
    {
      "offset": 0,
      "length": 23,
      "type": "italic"
    }
  ]
}
```

Yields:

```ts
{
  type: "italic",
  position: {
    start: {
      line: 1,
      column: 1,
      offset: 0
    },
    end: {
      line: 1,
      column: 24,
      offset: 23
    }
  },
  children: [
    { 
      type: "text",
      value: "This is an italic text.",
      position: {
        start: {
          line: 1,
          column: 1,
          offset: 0
        },
        end: {
          line: 1,
          column: 24,
          offset: 23
        }
      }
    }
  ]
}
```

---

### `Mention`

```ts
interface Mention extends Literal {
  type: "mention";
  value: string;
  data?: MentionData;
  position?: Position;
}
```

**Mention** ([type reference][mention-type]): Telegram mention.
Represents `mention` entities in Telegram messages.

Example:

![Mention message screenshot.](https://raw.githubusercontent.com/quadratz/tgast/refs/heads/main/images/mention.png)

```json
{
  "text": "@quadratz",
  "entities": [
    {
      "offset": 0,
      "length": 9,
      "type": "mention"
    }
  ]
}
```

Yields:

```ts
{
  type: "mention",
  value: "@quadratz",
  position: {
    start: {
      line: 1,
      column: 1,
      offset: 0
    },
    end: {
      line: 1,
      column: 10,
      offset: 9
    }
  }
}
```

---

### `PhoneNumber`

```ts
interface PhoneNumber extends Literal {
  type: "phone_number";
  value: string;
  data?: PhoneNumberData;
  position?: Position;
}
```

**PhoneNumber** ([type reference][phone-number-type]): Telegram phone number.
Represents `phone_number` entities in Telegram messages.

Example:

![Phone number message screenshot.](https://raw.githubusercontent.com/quadratz/tgast/refs/heads/main/images/phone_number.png)

```json
{
  "text": "+1-212-555-0123",
  "entities": [
    {
      "offset": 0,
      "length": 15,
      "type": "phone_number"
    }
  ]
}
```

Yields:

```ts
{
  type: "phone_number",
  value: "+1-212-555-0123",
  position: {
    start: {
      line: 1,
      column: 1,
      offset: 0
    },
    end: {
      line: 1,
      column: 16,
      offset: 15
    }
  }
}
```

---

### `Pre`

```ts
interface Pre extends Literal {
  type: "pre";
  value: string;
  language?: string;
  data?: PreData;
  position?: Position;
}
```

**Pre** ([type reference][pre-type]): Telegram monowidth block.
Represents `pre` entities in Telegram messages.

Example:

![Monowidth block message screenshot.](https://raw.githubusercontent.com/quadratz/tgast/refs/heads/main/images/pre.png)

```json
{
  "text": "console.log(\"This is a monowidth block.\");",
  "entities": [
    {
      "offset": 0,
      "length": 42,
      "type": "pre",
      "language": "JavaScript"
    }
  ]
}
```

Yields:

```ts
{
  type: "pre",
  value: "console.log(\"This is a monowidth block.\");",
  language: "JavaScript",
  position: {
    start: {
      line: 1,
      column: 1,
      offset: 0
    },
    end: {
      line: 1,
      column: 43,
      offset: 42
    }
  }
}
```

---

### `Spoiler`

```ts
interface Spoiler extends Parent {
  type: "spoiler";
  data?: SpoilerData;
  position?: Position;
  children: PhrasingContent[];
}
```

**Spoiler** ([type reference][spoiler-type]) Telegram spoiler message.
Represents `spoiler` entities in Telegram messages.

Example:

![Spoiler message screenshot.](https://raw.githubusercontent.com/quadratz/tgast/refs/heads/main/images/spoiler.png)

```json
{
  "text": "This is a spoiler text.",
  "entities": [
    {
      "offset": 0,
      "length": 23,
      "type": "spoiler"
    }
  ]
}
```

Yields:

```ts
{
  type: "spoiler",
  position: {
    start: {
      line: 1,
      column: 1,
      offset: 0
    },
    end: {
      line: 1,
      column: 24,
      offset: 23
    }
  },
  children: [
    { 
      type: "text",
      value: "This is a spoiler text.",
      position: {
        start: {
          line: 1,
          column: 1,
          offset: 0
        },
        end: {
          line: 1,
          column: 24,
          offset: 23
        }
      }
    }
  ]
}
```

---

### `Strikethrough`

```ts
interface Strikethrough extends Parent {
  type: "strikethrough";
  data?: StrikethroughData;
  position?: Position;
  children: PhrasingContent[];
}
```

**Strikethrough** ([type reference][strikethrough-type]): Telegram strikethrough
text. Represents `strikethrough` entities in Telegram messages.

Example:

![Strikethrough message screenshot.](https://raw.githubusercontent.com/quadratz/tgast/refs/heads/main/images/strikethrough.png)

```json
{
  "text": "This is a strikethrough text.",
  "entities": [
    {
      "offset": 0,
      "length": 29,
      "type": "strikethrough"
    }
  ]
}
```

Yields:

```ts
{
  type: "strikethrough",
  position: {
    start: {
      line: 1,
      column: 1,
      offset: 0
    },
    end: {
      line: 1,
      column: 30,
      offset: 29
    }
  },
  children: [
    { 
      type: "text",
      value: "This is a strikethrough text.",
      position: {
        start: {
          line: 1,
          column: 1,
          offset: 0
        },
        end: {
          line: 1,
          column: 30,
          offset: 29
        }
      }
    }
  ]
}
```

---

### `Text`

```ts
interface Text extends Literal {
  type: "text";
  value: string;
  data?: TextData;
}
```

**Text** ([type reference][text-type]): Telegram plain text.
Represents plain text content in Telegram messages.

Example:

![Plain text message screenshot.](https://raw.githubusercontent.com/quadratz/tgast/refs/heads/main/images/text.png)

```json
{
  "text": "This is a plain text."
}
```

Yields:

```ts
{
  type: "text",
  value: "This is a plain text.",
  position: {
    start: {
      line: 1,
      column: 1,
      offset: 0
    },
    end: {
      line: 1,
      column: 22,
      offset: 21
    }
  }
}
```

---

### `TextLink`

```ts
interface TextLink extends Literal {
  type: "text_link";
  value: string;
  url: string;
  data?: TextLinkData;
  position?: Position;
}
```

**TextLink** ([type reference][text-link-type]): Telegram clickable text URL.
Represents `text_link` entities in Telegram messages.

Example:

![Text link message screenshot.](https://raw.githubusercontent.com/quadratz/tgast/refs/heads/main/images/text_link.png)

```json
{
  "text": "Click me!",
  "entities": [
    {
      "offset": 0,
      "length": 9,
      "type": "text_link",
      "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ]
}
```

Yields:

```ts
{
  type: "text_link",
  value: "Click me!",
  url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  position: {
    start: {
      line: 1,
      column: 1,
      offset: 0
    },
    end: {
      line: 1,
      column: 10,
      offset: 9
    }
  }
}
```

---

### `TextMention`

```ts
interface TextMention extends Literal {
  type: "text_mention";
  value: string;
  user: User;
  data?: TextMentionData;
  position?: Position;
}
```

**TextMention** ([type reference][text-mention-type]): Telegram mentions for
users without usernames. Represents `text_mention` entities in
Telegram messages.

Example:

![Text mention message screenshot.](https://raw.githubusercontent.com/quadratz/tgast/refs/heads/main/images/text_mention.png)

```json
{
  "text": "Qz",
  "entities": [
    {
      "offset": 0,
      "length": 2,
      "type": "text_mention",
      "user": {
        "id": 423623658,
        "is_bot": false,
        "first_name": "Qz",
        "language_code": "en"
      }
    }
  ]
}
```

Yields:

```ts
{
  type: "text_mention",
  value: "Qz",
  user: {
    id: 423623658,
    is_bot: false,
    first_name: "Qz",
    language_code: "en"
  },
  position: {
    start: {
      line: 1,
      column: 1,
      offset: 0
    },
    end: {
      line: 1,
      column: 3,
      offset: 2
    }
  }
}
```

---

### `Underline`

```ts
interface Underline extends Parent {
  type: "underline";
  data?: UnderlineData;
  position?: Position;
  children: PhrasingContent[];
}
```

**Underline** ([type reference][underline-type]): Telegram underline text.
Represents `underline` entities in Telegram messages.

Example:

![Underlined text message screenshot.](https://raw.githubusercontent.com/quadratz/tgast/refs/heads/main/images/underline.png)

```json
{
  "text": "This is an underlined text.",
  "entities": [
    {
      "offset": 0,
      "length": 27,
      "type": "underline"
    }
  ]
}
```

Yields:

```ts
{
  type: "underline",
  position: {
    start: {
      line: 1,
      column: 1,
      offset: 0
    },
    end: {
      line: 1,
      column: 28,
      offset: 27
    }
  },
  children: [
    { 
      type: "text",
      value: "This is an underlined text.",
      position: {
        start: {
          line: 1,
          column: 1,
          offset: 0
        },
        end: {
          line: 1,
          column: 28,
          offset: 27
        }
      }
    }
  ]
}
```

---

### `Url`

```ts
interface Url extends Literal {
  type: "url";
  value: string;
  data?: UrlData;
  position?: Position;
}
```

**Url** ([type reference][url-type]): Telegram URL. Represents `url` entities
in Telegram messages.

Example:

![URL text message screenshot.](https://raw.githubusercontent.com/quadratz/tgast/refs/heads/main/images/url.png)

```json
{
  "text": "https://t.me/quadratz",
  "entities": [
    {
      "offset": 0,
      "length": 21,
      "type": "url"
    }
  ]
}
```

Yields:

```ts
{
  type: "url",
  value: "https://t.me/quadratz",
  position: {
    start: {
      line: 1,
      column: 1,
      offset: 0
    },
    end: {
      line: 1,
      column: 22,
      offset: 21
    }
  }
}
```

## Glossary

See [§ _Glossary_ in `syntax-tree/unist`][github-unist-glossary].

## References

- **regram**: [regram][github-regram]. Quadratz.
- **unist**: [Universal Syntax Tree][github-unist]. T. Wormer; et al.
- **Telegram Bot API**:
  [Telegram Message Entity](https://core.telegram.org/bots/api#messageentity).
  Telegram.

## Related

- [mdast](https://github.com/syntax-tree/mdast) — Markdown Abstract Syntax Tree
  format
- [hast](https://github.com/syntax-tree/hast) — HTML Abstract Syntax Tree format
- [nlcst](https://github.com/syntax-tree/nlcst) — Natural Language Concrete
  Syntax Tree format
- [xast](https://github.com/syntax-tree/xast) — Extensible Abstract Syntax Tree

[abstract-syntax-tree]: https://unifiedjs.com/learn/guide/introduction-to-syntax-trees/
[github-regram]: https://github.com/quadratz/regram
[github-tgast-releases]: https://github.com/quadratz/tgast/releases
[github-unist]: https://github.com/syntax-tree/unist
[github-unist-glossary]: https://github.com/syntax-tree/unist#glossary
[github-unist-utilities]: https://github.com/syntax-tree/unist#list-of-utilities
[telegram-message-entity]: https://core.telegram.org/bots/api#messageentity
[unified]: https://github.com/unifiedjs/unified
[blockquote-type]: https://github.com/quadratz/tgast/blob/main/src/root_content.type.ts#L11-L24
[bold-type]: https://github.com/quadratz/tgast/blob/main/src/root_content.type.ts#L34-L47
[bot-command-type]: https://github.com/quadratz/tgast/blob/main/src/root_content.type.ts#L57-L66
[cashtag-type]: https://github.com/quadratz/tgast/blob/main/src/root_content.type.ts#L76-L85
[code-type]: https://github.com/quadratz/tgast/blob/main/src/root_content.type.ts#L95-L104
[custom-emoji-type]: https://github.com/quadratz/tgast/blob/main/src/root_content.type.ts#L114-L131
[email-type]: https://github.com/quadratz/tgast/blob/main/src/root_content.type.ts#L141-L150
[expandable-blockquote-type]: https://github.com/quadratz/tgast/blob/main/src/root_content.type.ts#L160-L173
[hashtag-type]: https://github.com/quadratz/tgast/blob/main/src/root_content.type.ts#L183-L192
[italic-type]: https://github.com/quadratz/tgast/blob/main/src/root_content.type.ts#L202-L215
[mention-type]: https://github.com/quadratz/tgast/blob/main/src/root_content.type.ts#L225-L234
[phone-number-type]: https://github.com/quadratz/tgast/blob/main/src/root_content.type.ts#L244-L253
[pre-type]: https://github.com/quadratz/tgast/blob/main/src/root_content.type.ts#L263-L276
[spoiler-type]: https://github.com/quadratz/tgast/blob/main/src/root_content.type.ts#L286-L299
[strikethrough-type]: https://github.com/quadratz/tgast/blob/main/src/root_content.type.ts#L309-L322
[text-type]: https://github.com/quadratz/tgast/blob/main/src/root_content.type.ts#L332-L341
[text-link-type]: https://github.com/quadratz/tgast/blob/main/src/root_content.type.ts#L351-L364
[text-mention-type]: https://github.com/quadratz/tgast/blob/main/src/root_content.type.ts#L374-L387
[underline-type]: https://github.com/quadratz/tgast/blob/main/src/root_content.type.ts#L397-L410
[url-type]: https://github.com/quadratz/tgast/blob/main/src/root_content.type.ts#L420-L429
