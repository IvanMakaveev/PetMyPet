import * as petService from './../../services/petService';
import { useEffect, useState } from 'react';
import InputError from './../Shared/InputError';

const EditPet = ({
    match,
    history
}) => {
    const [pet, setPet] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        petService.getOne(match.params.petId)
            .then(pet => setPet(pet));
    }, [])

    const onEditDescriptionSubmitHandler = (e) => {
        e.preventDefault();

        if (errorMessage == '') {
            let petId = match.params.petId;
            let updatedPet = { ...pet, description: e.target.description.value }

            petService.update(petId, updatedPet)
                .then(() => {
                    history.push(`/pets/details/${petId}`)
                });
        }
    }

    const onDescriptionBlurHandler = (e) => {
        if (e.target.value.length < 10) {
            setErrorMessage('Description is too short');
        }
    }

    const onDescriptionChangeHandler = (e) => {
        if (e.target.value.length >= 10) {
            setErrorMessage('');
        }
    }

    return (
        <section className="detailsMyPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: <i className="fas fa-heart"></i> {pet.likes}</p>
            <p className="img">
                <img src={pet.imageURL} />
            </p>
            <form onSubmit={onEditDescriptionSubmitHandler}>
                <textarea type="text" name="description" onBlur={onDescriptionBlurHandler} onChange={onDescriptionChangeHandler} defaultValue={pet.description}></textarea>
                <InputError>{errorMessage}</InputError>
                <button className="button"> Save</button>
            </form>
        </section>
    );
}

export default EditPet;