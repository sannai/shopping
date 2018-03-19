const queryString = require('querystring')

function checkStatus(response) {
    if(response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

export async function fetchData(uri, query) {
    const response = await fetch(`${uri} ? ${queryString.stringify(query)}`, {method:'GET'})
    checkStatus(response)
    const data = await response.json()
    return data
}

export async function fetchDataPost(uri, body) {
    const response = await fetch(`${uri}`, {
        method:'POST',
        headers:{ 'Accept': 'application/json', 'Content-Type': 'application/json',},
        body:JSON.stringify({"param":[body]})
    })
    checkStatus(response)
    const data = await response.json()
    return data
}