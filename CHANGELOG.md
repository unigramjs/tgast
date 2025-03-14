# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

[1.1.0]: https://github.com/quadratz/tgast/compare/v1.0.2...v1.1.0
[1.0.2]: https://github.com/quadratz/tgast/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/quadratz/tgast/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/quadratz/tgast/releases/tag/v1.0.0
