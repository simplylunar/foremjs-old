const User = require('./User')

class Listing {
  constructor(listing, client) {
    this.client = client
    this.id = listing.id
    this.title = listing.title
    this.slug = listing.slug
    this.bodyMarkdown = listing.body_markdown
    this.bodyHTML = listing.processed_html
    this.tags = listing.tags
    this.category = listing.category
    this.published = listing.published
    this.author = this.client.getUser(listing.user.username)
  }
  bump () {
    const l = axios(this.client.__('listings/' + this.id, 'put', {listing: {action: 'bump'} }))
    return new Listing(l.data, this.client)
  }
  publish () {
    const l = axios(this.client.__('listings/' + this.id, 'put', {listing: {action: 'publish'} }))
    return new Listing(l.data, this.client)
  }
  unpublish () {
    const l = axios(this.client.__('listings/' + this.id, 'put', {listing: {action: 'unpublish'} }))
    return new Listing(l.data, this.client)
  }
  update (title, body) {
    const l = axios(this.client.__('listings/' + this.id, 'put', {listing: {title: title, body_markdown: body} }))
    return new Listing(l.data, this.client)
  }
}

module.exports = Listing