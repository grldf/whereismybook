<script>
    let disabled = false;
    let promise = Promise.resolve([]);
    let isbn;
    $: endpoint = "https://openlibrary.org/api/books?bibkeys=ISBN:"+isbn+"&jscmd=data&format=json" ;
    
    async function fetchBook() {
		const response = await fetch(endpoint);

		if (response.ok) {
            
  		return await response;
			
		} else {
			throw new Error(users);
		}
	}
  function handleClick() {
		// Now set it to the real fetch promise 
    promise = fetchBook();
    console.log(fetchBook().result)
    disabled = true;
	}
</script>
<input type="number" bind:value={isbn} />
<button on:click={ handleClick } { disabled } >
	Rechercher Livre
</button>
{#await promise}
<p>...waiting</p>
{:then result}
    {result}
<h4>Hello</h4>
{:catch error}
<p>An error occurred!</p>
{/await}