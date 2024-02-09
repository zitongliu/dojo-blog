import { ref } from 'vue'

const getPost = (id) => {
    const post = ref(null);
    const error = ref(null);

    const uri = 'http://localhost:3000/posts/' + id
    const load = async () => {
        try {
            // simulate delay
            await new Promise(resolve => {
                setTimeout(resolve, 500)
            })

            const res = await fetch(uri);
            if (!res.ok) {
                throw Error('Error fetching post data');
            }
            post.value = await res.json();
        } catch(err) {
            error.value = err.message;
        }
    }
    return { post, error, load }
}

export default getPost