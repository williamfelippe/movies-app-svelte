<script>
    import { Router, Route } from 'svero'

    import Home from './views/Home.svelte'
    import Detail from './views/Detail.svelte'
    import NoMatch from './views/NoMatch.svelte'
</script>

<Router>
    <Route path="*" component={NoMatch} />
    <Route path="/detail/:movieId" component={Detail} />
    <Route path="/" component={Home} />
</Router>
