<template>
    <div id="list">
        <Row class="book-item">
            <i-col class="col-item" span="24">
                <img class="cover" src="https://bookcover.yuewen.com/"/>
                <div class="desc">
                    <h3 class="book-title">小说名称</h3>
                    <p class="book-intro">文章介绍描述</p>
                </div>
            </i-col>
        </Row>
        <Row class="book-item">
            <i-col class="col-item" span="24">
                <img class="cover" src="https://bookcover.yuewen.com/qdbimg/349573/1003692682/150"/>
                <div class="desc">
                    <h3 class="book-title">小说名称</h3>
                    <p class="book-intro">文章介绍描述文章介绍描述文章介绍描述文章介绍描述文章介绍描述文章介绍描述文章介绍描述文章介绍描述文章介绍描述文章介绍描述文章介绍描述</p>
                </div>
            </i-col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "List"
    }
</script>

<style scoped>
    .book-item {
        padding: 1rem;
    }

    .cover {
        float: left;
        width: 4.125rem;
        height: 5.5rem;
        margin-right: .5rem;
    }

    .desc {
        text-align: left;
        overflow: hidden;
    }

    .book-title {
        color: #464c5b;
        font-size: 16px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .book-intro {
        height: 2.25rem;
        color: #9ea7b4;
        font-size: .65rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
</style>