const axios = require('axios')

const Article = require('./Article.js')
const Comment = require('./Comment.js')
const User = require ('./User.js')

class Client {
  __(slug, method, data) { 
    let opts = JSON.parse(JSON.stringify(this.base)) // TO-DO: find a better way to do this
    opts.url = opts.url + '/' + slug
    opts.data = data
    opts.method = method
    opts.headers = { 'api-key': this.token }
    return opts
   }
  constructor (token, url = 'https://dev.to/api') {
    this.token = token
    this.base = { url: url }
    url = url
  }

  async getArticle (key) {
    const article = await axios(this.__('articles/' + key, 'get'))
    const commentRequest = await axios(this.__('comments?a_id=' + article.data.id, 'get'))
    let comments = []
    for (const comment of commentRequest.data) {
      comments.push(new Comment(comment, this))
     }
    return new Article(article.data, comments, this)
  }
  async getComment (id) {
    const comment = await axios(this.__('comments/' + id, 'get')).catch((e) => { throw e })
    return new Comment(comment.data, this)
  }
  async getUser (key) {
    const user = await axios(this.__('users/' + key, 'get')).catch((e) => { throw e })
    if (user.status === 404) throw new Error ('404 \n Requested article could not be found.')
    if (user.status === 429) throw new Error ('429 \n Too many requests, try again later.')
    return new User(user.data, this)
  }
  async createArticle (article) {
    const post = {
      article: {
        title: article.title,
        published: article.published,
        body_markdown: article.bodyMarkdown,
        tags: article.tags,
        series: article.series,
        canonical_url: article.canonicalURL
      }
    }
    const articlePosted = await axios(this.__('articles/', 'post', post)).catch((e) => { throw e })
    return new Article(articlePosted.data)
  }
}

module.exports = Client