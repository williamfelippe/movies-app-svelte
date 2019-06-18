<script>
    import MovieCard from './MovieCard.svelte'

    export let movies
</script>

<style>
    .movies-list {
        display: flex;
        flex-wrap: wrap;
    }

    .movies-list__item {
        margin: 0 1rem 1.5rem 1rem;
    }
</style>

<div class="movies-list">
    {#each movies as movie}
        <div class="movies-list__item">
            <MovieCard movie={movie} />
        </div>
    {/each}
</div>
