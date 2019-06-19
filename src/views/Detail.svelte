<script>
    import { onMount } from 'svelte'
    import api from '../api'

    import Container from '../components/Container.svelte'

    export let router = {}
    let movie = null

    onMount(() => {
        fetchMovieByImdbId()
    })

    const fetchMovieByImdbId = async () => {
        try {
            const { movieId } = router.params
            const movie = await api.get(`?i=${movieId}`)
            console.log('Movie: ', movie)
        } catch(error) {
            console.log('Error: ', error)
        }
    }
</script>

{#if movie}
    <Container>
        <div>
            <div>
                <h1>{movie.Title}</h1>
            </div>
            <div>
                <img src={movie.Poster} alt="" />
            </div>
        </div>
    </Container>
{/if}
