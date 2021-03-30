const url = 'http://localhost:5000/pets';

export const getAll = (category = '') => {
    let petsUrl = url + ((category && category != 'All') ? `?category=${category}` : '');

    return fetch(petsUrl)
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const getOne = (petId) => {
    let petUrl = url + `/${petId}`;

    return fetch(petUrl)
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const create = (petName, description, imageURL, category) => {
    let newPet = {
        name: petName,
        description,
        imageURL,
        category,
        likes: 0
    }

    return fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPet)
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const update = (petId, pet) => {
    return fetch(`${url}/${petId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pet)
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const pet = (petId, likes) => {
    return fetch(`${url}/${petId}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ likes })
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}