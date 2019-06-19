<script>
    import MovieCard from './MovieCard.svelte'

    export let movies
</script>

<style>
    .movies-list {
        display: flex;
        flex-wrap: wrap;
    }

    .movies-list__item:last-child {
        margin: 0 0 2rem;
    }

    .movies-list__item:not(:last-child) {
        margin: 0 1.5rem 2rem 0;
    }
</style>

<div class="movies-list">
    {#each movies as movie}
        <div class="movies-list__item">
            <MovieCard movie={movie} />
        </div>
    {/each}
</div>
