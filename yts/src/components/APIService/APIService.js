export default class APIService{
    // Insert an article
    static getSummary(body){
        return fetch(`http://localhost:5000/summary`,{
            'method':'POST',
             headers : {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*'
      },
      body:JSON.stringify(body)
    })
    .then(response => response.json())
    .catch(error => console.log(error))
    }

    static getTranslation(body){
        return fetch(`http://localhost:5000/translate`,{
            'method':'POST',
             headers : {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*'
      },
      body:JSON.stringify(body)
    })
    .then(response => response.json())
    .catch(error => console.log(error))
    }

}