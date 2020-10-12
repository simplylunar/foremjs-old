declare class Client {
  constructor (token?: string, baseURL = 'https://dev.to/api'): void
  user: User
  token: string
  baseURL: string
  webhooks: Webhook[]
  getArticle(key: number | string): Article
  getComment(id: string): Comment
  createArticle(article: Article): Article
  followedTags(): Tag[]
  getListing(id: number): Listing
  createListing(listing: Listing): Listing
  getWebhook(id: number): Webhook
  createWebhook(webhook: Webhook): Webhook 
}

declare class Article {
  constructor (article: object, comments: Comment[], client: Client): void
  id: number
  title: string
  description: string
  coverImage: string
  socialImage: string
  tags: string[]
  slug: string
  path: string
  url: string
  canonicalURL: string
  comments: Comment[]
  reactions: number
  collectionID: number
  createdAt: Date
  editedAt: Date
  crosspostedAt: Date
  published: boolean
  publishedAt: Date
  lastCommentAt: Date
  author: User
  organization: Organization
  bodyHTML: string
  bodyMarkdown: string
  client: Client
  upadate(article: Article): Article
}

declare class Comment {
  constructor(comment: object, client: Client): void
  id: string
  createdAt: Date
  bodyHTML: string
  children: Comment[]
  client: Client
}

declare class User {
  constructor(user: object, client: Client): void
  id: string
  username: string
  name: string
  summary: string
  twitter: string
  github: string
  website: string
  location: string
  joined: Date
  profileImage: string
  client: Client
}

declare class Tag {
  constructor(tag: object): void
  id: number
  name: string
  points: number
}

declare class Listing {
  constructor(listing: object, client: Client): void
  id: number
  title: string
  slug: string
  bodyMarkown: string
  tags: string[]
  category: string
  bodyHTML: string
  published: boolean
  author: User
  client: Client
  bump(): Listing
  publish(): Listing
  unpublish(): Listing
  update(title: string, body: string): Listing
}

declare class Webhook {
  constructor(webhook: object, client: Clinet): void
  id: number
  source: string
  targetURL: string
  events: string[]
  created: Date
}
export { Client, Article, Comment, User, Listing, Webhook }