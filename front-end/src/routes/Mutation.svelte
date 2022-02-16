<script>
    import { mutation } from '@urql/svelte';
  
  export let title;
  export let author;
  export let cover;
  export let barcode;
    const mutateTodo = mutation({
      query: `
      mutation($title: String!, $author: String!, $cover: String!, $barcode: Long!) {
        createBook(
          data: {
            bookInfo: {
              title: $title
              author: $author
              cover: $cover
              barcode: $barcode
            }
          }
        ) {
          data {
            attributes {
              bookInfo {
                title
                author
                cover
                barcode
              }
            }
          }
        }
      }
      `,
    });

  </script>
  
  
  <input type="text" value={title} />
  <input type="text" value={author} />
  <input type="number" value={barcode}/>
  <img src={'https://covers.openlibrary.org/b/id/'+cover+'-M.jpg'} alt={'couverture du livre' + title} />
  <button on:click={mutateTodo({title:title, author:author , cover:cover , barcode:barcode})}>Enregistrer le livre dans votre bibliothèque</button>
  
