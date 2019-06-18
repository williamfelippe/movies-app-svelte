<script>
    import { beforeUpdate, afterUpdate } from 'svelte'
    import debounce from 'debounce'
    import api from '../api'

    import SearchInput from '../components/SearchInput.svelte'
    import EmptyState from '../components/EmptyState.svelte'
    import MoviesList from '../components/MoviesList.svelte'

    let query = ''
    let isEmpty = true
    let movies = []

    $: fetchSearch(query)

    const fetchSearch = debounce(async (query) => {
        if(query) {
            console.log('Agora sim: ', query)

            try {
                const response = await api.get(`?s=${query}`)
                movies = response.Search
                isEmpty = false
                console.log('Success: ', movies)
            } catch(error) {
                console.log('Error: ', error)
                isEmpty = true
            }

            return
        }

        isEmpty = true
    }, 2000)
</script>

<style>
    .home {
        width: 100%;
        min-height: 100vh;

        display: flex;
        flex-direction: column;
    }
</style>

<div class="container">
    <div class="home">
        <div>
            <SearchInput bind:query={query} />
        </div>

        {#if isEmpty}
            <EmptyState />
        {:else}
            <MoviesList movies={movies} />
        {/if}
    </div>
</div>
