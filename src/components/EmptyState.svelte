<script>
    import EmptyStateIllustration from  "../assets/images/illustrations/illustration-empty-state/illustration-empty-state.png"
</script>

<style>
    .content {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .empty-state {
        width: auto;
        height: 25rem;
    }

    .empty-state-title {
        font-size: 2.5rem;
        font-weight: 500;
    }

    .empty-state-subtitle {
        color: var(--main-grey);
    }
</style>

<div class="content">
    <img src={EmptyStateIllustration} alt="No results yet" class="empty-state" />

    <p class="empty-state-title">
        Don't know what to search?
    </p>
    <p class="empty-state-subtitle">
        Here's an offer you can't refuse
    </p>
</div>
