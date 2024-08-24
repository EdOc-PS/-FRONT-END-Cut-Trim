export function Get (url){
    return fetch(url ,{
        method: "GET",
        headers: {"Accept": "application/json"},
      })
      .then(response => response.json()) 
      .then(jBody => jBody)
      .catch(error => console.log(error))
  }