import PORT from '../VARIABLES/PORTS';
const SendComment = function (body) {

    return new Promise((resolve, reject) => {
        try {

            fetch(`/addComment`, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })
                .then(response => response.json())
                .then(response => resolve(response))
        } catch (e) {
            reject(e)
        }



    })

}
export default SendComment;