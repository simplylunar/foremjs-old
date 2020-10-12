class Article {
  constructor (article, comments, client) {
    this.comments = comments
    this.id = article.id
    this.title = article.title
    this.description = article.description
    this.coverImage = article.cover_image
    this.socialImage = article.social_image
    this.tags = article.tags
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
    this.author = this.client.getUser(listing.user.username)
  }
  update (article) {
    const put = {
      article: {
        title: article.title,
        published: article.published,
        body_markdown: article.bodyMarkdown,
        tags: article.tags,
        series: article.series,
        canonical_url: article.canonicalURL
      }
    }
    const a = axios(this.client.__('articles/' + this.id, 'put', put))
    const commentRequest = await axios(this.__('comments?a_id=' + a.data.id, 'get'))
    let comments = []
    for (const comment of commentRequest.data) {
      comments.push(new Comment(comment, this))
     }
    return new Article(a.data, comments, this.client)
  }
}

module.exports = Article
