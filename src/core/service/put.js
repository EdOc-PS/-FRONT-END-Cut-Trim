export function Put (url, body){
    return fetch(url ,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      .then(response => response.json()) 
      .then(jBody => jBody)
      .catch(error => console.log(error))
  }