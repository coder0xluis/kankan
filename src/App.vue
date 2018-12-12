<template>
    <div id="app">
        <List></List>
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import List from './views/List'

    export default {
        name: 'app',
        components: {
            HelloWorld,
            List
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
