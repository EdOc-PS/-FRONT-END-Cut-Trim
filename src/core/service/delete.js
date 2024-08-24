export function Delete (url, body){
    return fetch(url ,{
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      .then(response => response.json()) 
      .then(jBody => jBody)
      .catch(error => console.log(error))
  }