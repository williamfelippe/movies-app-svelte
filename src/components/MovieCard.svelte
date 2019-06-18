<script>
    export let movie
</script>

<style>
    .movie-card {
        width: 20rem;
        height: 10rem;

        padding: 1.2rem;

        position: relative;

        border-radius: 0.5rem;
        background: no-repeat center;
        background-size: cover;
    }

    .movie-card__foreground {
        width: 100%;
        height: 100%;

        background-color: rgba(var(--main-dark), 0.5);
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
