<script>
    import debounce from 'debounce'
    import api from '../api'

    import Container from '../components/Container.svelte'
    import SearchInput from '../components/SearchInput.svelte'
    import EmptyState from '../components/EmptyState.svelte'
    import MoviesList from '../components/MoviesList.svelte'

    import WhatsInLogo from '../assets/images/logos/logo.svg'

    let query = ''
    let isEmpty = true
    let movies = []

    $: fetchSearch(query)

    const fetchSearch = debounce(async (query) => {
        if(query) {
            try {
                const response = await api.get(`?s=${query}`)
                movies = response.Search
                isEmpty = false
            } catch(error) {
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

    .logo {
        width: 100%;
        max-width: 10rem;

        margin: 5rem 0 2rem;
    }

    .search {
        margin-bottom: 2rem;
    }
</style>

<Container>
    <div class="home">
        <div>
            <img src={WhatsInLogo} alt="" class="logo" />
        </div>

        <div class="search">
            <SearchInput bind:query={query} />
        </div>

        {#if isEmpty}
            <EmptyState />
        {:else}
            <MoviesList movies={movies} />
        {/if}
    </div>
</Container>
