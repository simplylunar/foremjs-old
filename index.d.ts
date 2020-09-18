declare class Client {
  constructor (token?: string, baseURL = 'https://dev.to/api'): void
  token: string
  baseURL: string
  getArticle(key: number | string): Article
  getComment(id: string): Comment
}

declare class Article {
  constructor (article: object): void
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
  publishedAt: Date
  lastCommentAt: Date
  author: User
  organization: Organization
  bodyHTML: string
  bodyMarkdown: string
  client: Client
}

declare class Comment {
  constructor(comment: object): void
  id: string
  createdAt: Date
  bodyHTML: string
  children: Comment[]
  client: Client
}

declare class User {
  constructor(user: object): void
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

export { Client, Article, Comment, User }