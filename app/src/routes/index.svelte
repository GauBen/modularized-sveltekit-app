<script lang="ts" context="module">
  import { Chat } from '@gauben/messages'
  import { UserList } from '@gauben/users'
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async ({fetch}) => {
    const [users, messages] = [...await Promise.all([
      fetch("/api/users.json").then(r => r.json()),
      fetch("/api/messages.json").then(r => r.json())
    ])]
    return {
      props: {users, messages}
    }
  }
</script>

<script lang="ts">
  export let users
  export let messages
</script>

<h1>Users</h1>
<UserList {users}/>

<h1>Chat</h1>
<Chat {messages}/>
