export function Get (url){
    return fetch(url ,{
        method: "GET",
        headers: {"Accept": "application/json"},
      })
      .then(response => response.json()) 
      .then(jBody => jBody)
      .catch(error => console.log(error))
  }

export function GetImg (url){
    return fetch(url ,{
        method: "GET",
      })

      .then(response => response.blob()) 
      .then(blob => blob)
      .catch(error => console.log(error))
  }