# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.1] - 2020-10-12
### Added
- ESLINT file
- Standard badge
### Changed
- Upadted coverage

## [0.3.0] - 2020-10-12
### Added
- Get self when authenticated
- Tag class
- Get followed tags
- Listing class
- Get listings
- Post, bump, publish, unpublish, update listings **[WARNING NOT TESTED]**
- Article.update()
- Article.published
- Article.author
- Webhook class
- Create Webhook
- Get Webhook
- Delete Webhook
- Get all webhooks
### Changed
- Updated Readme
- Use regular error messsages
### Fixed
- All typings are now correct
- Article.tags now returns string[] as it should

## [0.2.1] - 2020-09-18
### Added
- Changelog
- Contributing
### Changed
- Readme with much more content by using template


## [0.2.0] - 2020-09-18
### Added
- `Client.createArticle(article)` function to upload articles

## [0.1.0] - 2020-09-17
### Added
- Client class
- Article class
- Comment class
- User class