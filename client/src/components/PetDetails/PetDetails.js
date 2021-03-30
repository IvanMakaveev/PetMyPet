import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as petService from './../../services/petService';

const PetDetails = ({
    match
}) => {
    let [pet, setPet] = useState({});

    useEffect(() => {
        petService.getOne(match.params.petId)
            .then(setPet);
    }, [])

    const onPetButtonClickHandler = (e) => {
        let incrementedLikes = pet.likes + 1

        petService.pet(match.params.petId, incrementedLikes)
            .then((updatedPet) => {
                setPet(oldState => ({...oldState, likes: incrementedLikes}))
            });
    }

    return (
        <section class="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes}
                <button class="button" onClick={onPetButtonClickHandler}>
                    <i class="fas fa-heart"></i>Pet
                </button>
            </p>
            <p class="img"><img src={pet.imageURL} /></p>
            <p class="description">{pet.description}</p>
            <div class="pet-info">
                <Link to={`/pets/edit/details/${pet.id}`} ><button class="button">Edit</button></Link>
                <Link to="/pets/"><button class="button">Delete</button></Link>
            </div>
        </section>
    );
}

export default PetDetails;