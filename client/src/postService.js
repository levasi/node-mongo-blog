import axios from 'axios'
const url = 'api/posts'

class PostService {
    static getPosts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url)
                const data = res.data
                resolve(
                    data
                )
            }
            catch (error) {
                reject(error)
            }
        })
    }
    static insertPost(title) {
        return axios.post(url, {
            title
        })
    }
    static deletePost(id) {
        return axios.delete(`${url}/${id}`)
    }
}

export default PostService