<script lang="ts">
  export let users: string[]
</script>

<ol>
  {#each users as user}
    <li>{user}</li>
  {/each}
</ol>
