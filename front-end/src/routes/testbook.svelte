<script context="module">
    export async function load({ fetch }) {
        let res = await fetch('http://openlibrary.org/search.json?q=9782266230919&fields=*');

        if (res.ok) {
            return {
                props: {
                    items: await res.json()
                }
            };
        }
        return {
            status: res.status,
            error: new Error()
        };
    }
</script>


<script>
    export let items = []
</script>  


<pre>{JSON.stringify(items)}</pre>
<h2>{items.docs[0].title}</h2>
<h3>{items.docs[0].author_name[0]}</h3>