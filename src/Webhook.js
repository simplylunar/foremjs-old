const axios = require('axios')

class Webhook {
  constructor(webhook, client) {
    this.client = client
    this.id = webhook.id
    this.source = webhook.source
    this.targetURL = webhook.target_url
    this.events = webhook.events
    this.createdAt = new Date(webhook.created_at)
  }
  delete () {
    axios(this.client.__('webhooks/' + this.id, 'delete'))
  }
}

module.exports = Webhook