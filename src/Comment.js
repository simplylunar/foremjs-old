class Comment {
  constructor (comment, client) {
    this.id = comment.id_code
    this.createdAt = comment.created_at ? new Date(comment.created_at) : null
    this.bodyHTML = comment.body_html
    this.client = client
    this.children = []
    for (const child of comment.children) {
      this.children.push(new Comment(child))
    }
  }
}

module.exports = Comment
