<script>
	export let query
</script>

<style>
    .search-input {
        width: 100%;

        padding: 1.2rem 1.2rem 1.2rem 1.6rem;
        margin: 5rem 0;

        background-color: white;
        border-radius: 0.5rem;
        border: none;
        outline: none;
        font-size: 1.6rem;
    }
</style>

<input
    bind:value={query}
    placeholder="Search movies..."
    aria-placeholder="Search movies"
    class="search-input">
