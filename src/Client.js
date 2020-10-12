const axios = require('axios')

const Article = require('./Article.js')
const Comment = require('./Comment.js')
const User = require ('./User.js')
const Tag = require ('./Tag.js')
const Listing = require('./Listing.js')
const Webhook = require ('./Webhook.js')

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
    if (this.token) {
      let x = ''; //this is just so I can put a semicolon in here, if you're smart please fix this
      this.user = (async () => {
        const userRaw = await axios(this.__('users/me', 'get')).catch((e) => { throw e })
        return new User(userRaw.data, this)
      })();
      this.webhooks = (async () => {
        const webhooksRaw = await axios(this.__('webhooks', 'get')).catch((e) => { throw e })
        const webhooks = webhooksRaw.data
        let hooks = []
        for (let hook of webhooks) { hooks.push(new Webhook(hook)) }
        return hooks
      })()
    }
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
    let user
    if (typeof key === "number") user = await axios(this.__('users/' + key, 'get')).catch((e) => { throw e })
    if (typeof key === "string") user = await axios(this.__('users/by_username?url=' + key, 'get')).catch((e) => { throw e })
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
    return new Article(articlePosted.data, [], this)
  }
  async followedTags () {
    const tagsRaw = await axios(this.__('follows/tags', 'get')).catch((e) => { throw e })
    const tags = tagsRaw.data
    let followed = []
    for (let tag of tags) { followed.push(new Tag(tag)) }
    return followed
  }
  async getListing (id) {
    const listing = await axios(this.__('listings/' + id, 'get'))
    return new Listing(listing.data, this)
  }
  async createListing(listing) {
    const post = {
      webhook_endpoint: {
        title: listing.title,
        body_markdown: listing.bodyMarkdown,
        category: listing.category,
        tags: listing.tags
      }
    }
    const listingPosted = await axios(this.__('listings/', 'post', post)).catch((e) => { throw e })
    return new Listing(listingPosted.data)
  }
  async getWebhook (id) {
    const webhook = await axios(this.__('webhooks/' + id, 'get'))
    return new Webhook(webhook.data, this)    
  }
  async createWebhook(webhook) {
    const post = {
      webhook_endpoint: {
        target_url: webhook.targetURL,
        source: webhook.source,
        events: webhook.events
      }
    }
    const webhookPosted = await axios(this.__('webhooks/', 'post', post)).catch((e) => { throw e })
    return new Webhook(webhookPosted.data)
  }
}

module.exports = Client