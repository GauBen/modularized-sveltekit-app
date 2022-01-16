import { users } from '@gauben/users'

export const messages = [
  { author: users[0], body: 'Hello World!' },
  { author: users[1], body: 'Hello Bob!' },
]

export { default as Chat } from './Chat.svelte'
