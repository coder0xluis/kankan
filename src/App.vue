<template>
    <div id="app">
<<<<<<< Updated upstream
        <List></List>
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
=======
        <router-view></router-view>
        <BookList></BookList>
        <ArticleContent></ArticleContent>
>>>>>>> Stashed changes
    </div>
</template>

<script>
<<<<<<< Updated upstream
    import HelloWorld from './components/HelloWorld.vue'
    import List from './views/List'
=======
    import BookList from './views/BookList'
    import ArticleContent from './views/ArticleContent'
>>>>>>> Stashed changes

    export default {
        name: 'app',
        components: {
<<<<<<< Updated upstream
            HelloWorld,
            List
=======
            BookList,
            ArticleContent,
>>>>>>> Stashed changes
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
