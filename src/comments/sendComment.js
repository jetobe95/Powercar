const SendComment =function (body) {
    
    return new Promise((resolve,reject)=>{

        fetch('http://localhost:3002/addComment', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(body)
           })
           .then(response=>response.json())
           .then(response=>resolve(response))
           .catch(error=>reject(error))

    })

}
export default SendComment;