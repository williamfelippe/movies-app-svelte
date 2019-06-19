<script>
    import { Link } from 'svero'

    export let movie
</script>

<style>
    .movie-card {
        width: 18rem;
        height: 25rem;

        position: relative;
        overflow: hidden;

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

        background-color: rgba(0, 0, 0, 0.7);

        transform: translateY(100%);
        transition: all ease-out 0.15s;
    }

    .movie-card:hover .movie-card__foreground {
        transform: translateY(0);
        transition: all ease-in 0.15s;
    }

    .movie-card__info {
        color: white;
    }

    .movie-card__info__title {
        margin-bottom: 0.5rem;
    }

    .movie-card__info__year {
        font-size: 1.4rem;
        margin-bottom: 0;
    }
</style>

<Link href={`/detail/${movie.imdbID}`}>
    <div class="movie-card" style={`background-image: url(${movie.Poster})`}>
        <div class="movie-card__foreground">
            <div class="movie-card__info">
                <p class="movie-card__info__title">
                    {movie.Title}
                </p>
                <p class="movie-card__info__year">
                    {movie.Year}
                </p>
            </div>
        </div>
    </div>
</Link>
