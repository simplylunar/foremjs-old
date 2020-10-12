const forem = require('./index')
const client = new forem.Client('C6oKwvnzJRcGosNvfmKPDKwD');

(async () => {
  // const c = new forem.Webhook({source: 'DEV', target_url: 'https://example.com', events: ['article_created']})
  // const d = new forem.Webhook({source: 'DEV', target_url: 'https://example.co.uk', events: ['article_created']})
  // await client.createWebhook(c)
  // await client.createWebhook(d)
  console.log(await client.webhooks)
})()