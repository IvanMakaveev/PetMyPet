const url = 'http://localhost:5000/pets';

export const getAll = (category = '') =>{
    let petsUrl = url + ((category && category != 'All') ? `?category=${category}` : '');

    return fetch(petsUrl)
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const getOne = (petId) =>{
    let petUrl = url + `/${petId}`;

    return fetch(petUrl)
        .then(res => res.json())
        .catch(err => console.log(err))
}