class User {
  constructor (user, client) {
    this.id = user.id
    this.username = user.username
    this.name = user.name
    this.summary = user.summary
    this.twitter = user.twitter_username
    this.github = user.github_username
    this.website = user.website_url
    this.location = user.location
    this.joinedAt = new Date(user.joined_at)
    this.profileImage = user.profile_image
    this.client = client
  }
}

module.exports = User