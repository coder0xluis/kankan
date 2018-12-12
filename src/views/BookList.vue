<template>
    <div id="list">
        <Row class="book-item">
            <i-col class="col-item" span="24">
                <img class="cover" src="https://bookcover.yuewen.com/qdbimg/349573/1003692682/150"/>
                <div class="desc">
                    <h3 class="book-title">小说名称</h3>
                    <p class="book-intro">文章介绍描述文章介绍描述文章介绍描述文章介绍描述文章介绍描述文章介绍描述文章介绍描述文章介绍描述文章介绍描述文章介绍描述文章介绍描述</p>
                </div>
                <div class="book-about">
                    <span class="book-author">
                        <Icon type="md-person"/> 张三
                    </span>
                    <span class="labels">
                        <Tag class="book-tag" color="default">梦幻</Tag>
                        <Tag class="book-tag" color="default">女生</Tag>
                    </span>
                </div>
            </i-col>
        </Row>
        <Row class="book-item">
            <i-col class="col-item" span="24">
                <img class="cover" src="https://bookcover.yuewen.com/qdbimg/349573/1009329519/150"/>
                <div class="desc">
                    <h3 class="book-title">小说名称</h3>
                    <p class="book-intro">文章介绍描述文章介绍描述文章介绍描述文章介绍描述文章介绍描述文章介绍描述文章介绍描述文章介绍描述文章介绍描述文章介绍描述文章介绍描述</p>
                </div>
                <div class="book-about">
                    <span class="book-author">
                        <Icon type="md-person"/> 张三
                    </span>
                    <span class="labels">
                        <Tag class="book-tag" color="default">梦幻</Tag>
                        <Tag class="book-tag" color="default">武侠</Tag>
                    </span>
                </div>
            </i-col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "BookList"
    }
</script>

<style scoped>
    .book-item {
        padding: 1rem;
        text-align: left;
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
        line-height: 1.18rem;
        color: #9ea7b4;
        font-size: .65rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin: .38rem 0;
    }

    .book-about {
        line-height: 1.4rem;
        font-size: .65rem;
        overflow: hidden;
    }

    .book-author {
        color: #9ea7b4;
        float: left;
    }

    .labels {
        float: right;
    }
    
    .labels .book-tag{
        color: #9ea7b4;
    }
</style>