import webServicesUrl from "./webServicesUrl.enum";

// get an array with all the scouts
export const getScouts = function() {
    const url = webServicesUrl.scouts;

    let result = fetch(url, {
        method: 'GET',
        mode: 'cors'
    })
        .then(res => {
            if (!res.ok) { throw new Error('Error on petition.'); }
            return res.json();
        })
        .then(data => data)
        .catch(error => { console.error('Error:', error); return [] })
    return (result)
}