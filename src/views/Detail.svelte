<script>
    import { onMount } from 'svelte'
    import api from '../api'

    import Container from '../components/Container.svelte'
    import Loader from '../components/Loader.svelte'

    export let router = {}
    let movie = null
    let hasError = false

    onMount(() => {
        fetchMovieByImdbId()
    })

    const fetchMovieByImdbId = async () => {
        try {
            const { movieId } = router.params
            movie = await api.get(`?i=${movieId}`)
            hasError = false
        } catch (error) {
            hasError = true
        }
    }
</script>

<style>
    .title {
        font-size: 4rem;
        font-weight: 700;
    }

    .detail {
        display: flex;
    }

    .detail__content {
        flex: 1;
    }

    .poster {
        max-width: 100%;
        width: auto;
        height: 70rem;

        border-radius: 1rem;
    }
</style>

{#if hasError}
    <p>It was not possible to get movie information</p>
{:else if movie}
    <Container>
        <div class="detail">
            <div class="detail__content">
                <h1 class="title">
                    {movie.Title}
                </h1>
            </div>
            <div class="detail__content">
                <img src={movie.Poster} alt="" class="poster" />
            </div>
        </div>
    </Container>
{/if}
