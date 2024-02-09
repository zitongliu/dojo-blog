import { ref } from 'vue'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)
    const uri = "http://localhost:3000/posts";

    const load = async() => {
        try {
            // simulate delay
            await new Promise(resolve => {
                setTimeout(resolve, 500)
            })
            let res = await fetch(uri)

            if (!res.ok) {
                throw Error('no data available')
            }
            posts.value = await res.json()

        } catch (err) {
            error.value = err.message;
            console.error(err)
        }
    }

    return { posts, error, load }
}

export default getPosts