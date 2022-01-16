<script lang="ts">
  export let messages: Array<{author: string; body: string}>
</script>

<ul>
  {#each messages as message}
    <li><strong>{message.author}</strong>: {message.body}</li>
  {/each}
</ul>
