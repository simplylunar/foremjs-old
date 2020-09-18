class Article {
  constructor (article, comments, client) {
    this.comments = comments
    this.id = article.id
    this.title = article.title
    this.description = article.description
    this.coverImage = article.cover_image
    this.socialImage = article.social_image
    this.tags = article.tag_list
    this.slug = article.slug
    this.path = article.path
    this.url = article.url
    this.canonicalURL = article.canonical_url
    this.reactions = article.public_reactions_count
    this.collectionID = article.collection_id
    this.createdAt = article.created_at ? new Date(article.created_at) : null
    this.editedAt = article.edited_at ? new Date(article.edited_at) : null
    this.crosspostedAt = article.crossposted_at ? new Date(article.crossposted_at) : null
    this.publishedAt = article.published_at ? new Date(article.published_at) : null
    this.lastCommentAt = article.last_comment_at ? new Date(article.last_comment_at) : null
    this.bodyHTML = article.body_html
    this.bodyMarkdwon = article.body_markdown
    this.client = client
  }
  get author() {

  }
  get organization() {

  }
}

module.exports = Article
