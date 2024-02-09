<template>
    <div class="tag">
        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length" class="layout">
            <PostList :posts="tagPosts" />
            <TagCloud :posts="posts" />
        </div>
        <div v-else>
            <Spinner />
        </div>
    </div>
</template>
<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner.vue'
import TagCloud from '../components/TagCloud.vue'

export default {
    components: { Spinner, PostList, TagCloud },
    setup() {
        const route = useRoute()
        const tag = route.params.tag
        const { posts, error, load } = getPosts();
        load()

        const tagPosts = computed(() => {
            return posts.value.filter(ele => ele.tags.includes(tag))
        })

        return {
            error, tagPosts, posts
        }
    }
}
</script>
<style>
    .tag {
        max-width: 1200px;
        margin: 0 auto;
        padding: 10px
    }
</style>