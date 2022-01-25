<script>
    // urql initialization
    import { gql, operationStore, query } from '@urql/svelte'
    const postsQuery = gql`
      query Posts {
        films {
            data {
                attributes {
                    titre
                }
            }
        }
      }
    `
  const posts = operationStore(postsQuery)
  query(posts)
  </script>
<div>
  {#if $posts.fetching}
    <p>Loading...</p>
{:else if $posts.error}
    <p>Oopsie! {$posts.error.message}</p>
{:else}
        {#each $posts.data.films.data as attributes}
            <h2>{attributes.attributes.titre}</h2>
        {/each}
{/if}
</div>