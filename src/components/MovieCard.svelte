<script>
    export let movie
</script>

<style>
    .movie-card {
        width: 18rem;
        height: 25rem;

        position: relative;

        border-radius: 0.5rem;
        background: teal no-repeat center;
        background-size: cover;
    }

    .movie-card__foreground {
        width: 100%;
        height: 100%;

        padding: 1.2rem;

        display: flex;
        align-items: flex-end;

        background-color: rgba(0, 0, 0, 0.5);
    }
</style>

<div class="movie-card">
    <div class="movie-card__foreground">
        <div class="movie-card__info">
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
        </div>
    </div>
</div>
