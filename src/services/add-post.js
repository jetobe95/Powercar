import PORT from '../VARIABLES/PORTS'
function AddPost(post) {
    return new Promise((resolve, reject) => {
        try {
            fetch(`${PORT.SERVER_IP_DEV}/addPost`, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(post)
            }).then(response => resolve(response))
        } catch (error) {
            reject(error)
        }
    })

}
export default AddPost;