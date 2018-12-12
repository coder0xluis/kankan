<template>
    <div id="app">
        <router-view></router-view>
        <BookList></BookList>
        <ArticleContent></ArticleContent>
    </div>
</template>

<script>
    import BookList from './views/BookList'
    import ArticleContent from './views/ArticleContent'

    export default {
        name: 'app',
        components: {
            BookList,
            ArticleContent,
        }
    }
</script>

<style>
    html{
        font-size: calc(22px + 6 * (100vw - 1000px)/ 1000);
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
