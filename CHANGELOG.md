# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- **BREAKING:** The `entity` property on `Unknown.data` is now optional.

## [3.0.0-alpha.7] - 2025-08-07

### Added

- `entity` property to `unknown` node data. ([#29])

## [3.0.0-alpha.6] - 2025-08-07

### Removed

- **BREAKING!**: `Break` node and `Paragraph` node. ([#27])

## [3.0.0-alpha.5] - 2025-08-06

### Fixed

- Include `Text` node to `Break` node children. ([#25])

## [3.0.0-alpha.4] - 2025-08-04

### Added

- `Break` node for line breaks (`\n`) in text. ([#23])

## [3.0.0-alpha.3] - 2025-08-03

### Added

- `Paragraph` node for a paragraph block. ([#19])

  Paragraphs are text separated by two or more consecutive newline
  characters (`\n`). This corresponds to paragraph representations in other 
  ASTs (like [mdast] or [hast]).

- `Unknown` node for any node not defined in the tgast spec, including
  unknown Telegram entity types. ([#20])

## [3.0.0-alpha.2] - 2025-08-02

### Added

- `Inline`, `InlineMap`, `NonBlock`, `NonBlockMap`, `Style`, and `StyleMap`. ([#15])

### Changed

- Nesting rules for all entities. ([#15])

### Removed

- `BlockContent`, `BlockContentMap`, `InlineEntity`, `InlineEntityMap`, `StyleEntity`, and `StyleEntityMap`. ([#15])

## [3.0.0-alpha.1] - 2025-07-25

### Added

- `InlineEntity` and `InlineEntityMap` for any node that represents an inline entity. ([#14])
- `StyleEntity` and `StyleEntityMap` for for any node that applies inline text styling. ([#14])

### Changed

- **Breaking:** Update `children` property types for all nodes. ([#14])
- `ExpandableBlockquote` and `Code` are now included in `BlockContentMap`. ([#14])
- **Breaking:** Change `BotCommand`, `Cashtag`, `CustomEmoji`, `Email`, `Hashtag`, `Mention`, `PhoneNumber`, `Pre`, `TextLink`, `TextMention`, and `Url` to extend `Parent` instead of `Literal`. ([#14])

### Removed

- **Breaking:** Drop support for `PhrasingContent` and `PhrasingContentMap`. ([#14])

## [2.0.0] - 2025-07-16

### Added

- `.dts` files for npm. ([#1])

### Changed

- Made major internal code changes, which may break compatibility. ([#1])
- The npm `next` tag will now always point to the newest available version.
  ([#7])

### Removed

- Drop support for JSR. ([#3])

## [2.0.0-alpha.2] - 2025-07-15

### Removed

- Drop support for JSR. ([#3])

## [2.0.0-alpha.1] - 2025-07-15

### Added

- `.dts` files for npm.

### Changed

- Made major internal code changes, which may break compatibility. ([#1])

## [1.2.5] - 2025-07-11

### Added

- `CHANGELOG.md` for JSR.
- `package-lock.json` for npm.

### Changed

- Rename `deno.jsonc` to `deno.json`.

### Removed

- `deno.lock` for npm.

## [1.2.4] - 2025-07-11

### Changed

- Move types documentation to GitHub wiki. This change reduces the size of the
  README file and decreases clutter.

## [1.2.3] - 2025-03-17

### Fixed

- Suppress vite warning

## [1.2.2] - 2025-03-14

### Added

- Add provenance for npm

### Fixed

- Missing dependency for jsr

## [1.2.1] - 2025-03-14

### Changed

- Optimize package size

## [1.2.0] - 2025-03-14

### Added

- Migrate from Bun to Deno.
- Transpile the TypeScript into JavaScript with their declaration types.
- Publish to JSR. (previously only NPM)

## [1.1.0] - 2025-03-11

### Added

- Export `User` type

## [1.0.2] - 2025-03-11

### Added

- Add `CHANGELOG.md`

### Removed

- Drop support for JSR. JSR currently cannot resolve `@types/unist`. It always
  translates to `./unist`, which is incorrect.

## [1.0.1] - 2025-03-11

### Removed

- Remove release reference from `README.md`
- Remove `npm ci` step from `publish` workflow

## [1.0.0] - 2025-03-11

### Added

- Initial release.

[3.0.0-alpha.7]: https://github.com/tgast-ecosystem/tgast/compare/v3.0.0-alpha.6...v3.0.0-alpha.7
[3.0.0-alpha.6]: https://github.com/tgast-ecosystem/tgast/compare/v3.0.0-alpha.5...v3.0.0-alpha.6
[3.0.0-alpha.5]: https://github.com/tgast-ecosystem/tgast/compare/v3.0.0-alpha.4...v3.0.0-alpha.5
[3.0.0-alpha.4]: https://github.com/tgast-ecosystem/tgast/compare/v3.0.0-alpha.3...v3.0.0-alpha.4
[3.0.0-alpha.3]: https://github.com/tgast-ecosystem/tgast/compare/v3.0.0-alpha.2...v3.0.0-alpha.3
[3.0.0-alpha.2]: https://github.com/tgast-ecosystem/tgast/compare/v3.0.0-alpha.1...v3.0.0-alpha.2
[3.0.0-alpha.1]: https://github.com/tgast-ecosystem/tgast/compare/v2.0.0...v3.0.0-alpha.1
[2.0.0]: https://github.com/tgast-ecosystem/tgast/compare/v1.2.5...v2.0.0
[2.0.0-alpha.2]: https://github.com/tgast-ecosystem/tgast/compare/v2.0.0-alpha.1...v2.0.0-alpha.2
[2.0.0-alpha.1]: https://github.com/tgast-ecosystem/tgast/compare/v1.2.5...v2.0.0-alpha.1
[1.2.5]: https://github.com/tgast-ecosystem/tgast/compare/v1.2.4...v1.2.5
[1.2.4]: https://github.com/tgast-ecosystem/tgast/compare/v1.2.3...v1.2.4
[1.2.3]: https://github.com/tgast-ecosystem/tgast/compare/v1.2.2...v1.2.3
[1.2.2]: https://github.com/tgast-ecosystem/tgast/compare/v1.2.1...v1.2.2
[1.2.1]: https://github.com/tgast-ecosystem/tgast/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/tgast-ecosystem/tgast/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/tgast-ecosystem/tgast/compare/v1.0.2...v1.1.0
[1.0.2]: https://github.com/tgast-ecosystem/tgast/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/tgast-ecosystem/tgast/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/tgast-ecosystem/tgast/releases/tag/v1.0.0

[#1]: https://github.com/tgast-ecosystem/tgast/pull/1
[#3]: https://github.com/tgast-ecosystem/tgast/pull/3
[#7]: https://github.com/tgast-ecosystem/tgast/pull/7
[#14]: https://github.com/tgast-ecosystem/tgast/pull/14
[#15]: https://github.com/tgast-ecosystem/tgast/pull/15
[#19]: https://github.com/tgast-ecosystem/tgast/pull/19
[#20]: https://github.com/tgast-ecosystem/tgast/pull/20
[#23]: https://github.com/tgast-ecosystem/tgast/pull/23
[#25]: https://github.com/tgast-ecosystem/tgast/pull/25
[#27]: https://github.com/tgast-ecosystem/tgast/pull/27
[#29]: https://github.com/tgast-ecosystem/tgast/pull/29

[mdast]: https://github.com/syntax-tree/mdast?tab=readme-ov-file#paragraph
[hast]: https://github.com/syntax-tree/hast