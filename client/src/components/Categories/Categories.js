import { useEffect, useState, useRef } from 'react';

import * as petService from './../../services/petService';
import Pet from './../Pet'
import CategoryNavigation from './CategoryNavigation'

const Categories = ({
    match
}) => {
    const [pets, setPets] = useState([]);
    const prevCategory = useRef();

    useEffect(() => {
        const category = match.params.category;

        if(prevCategory.current == category && category != undefined){
            return;
        }

        prevCategory.current = category;

        petService.getAll(category)
            .then(res => { 
                setPets(res) 
            });
    })

    return (
        <section className="dashboard">
            <h1>Dashboard</h1>

            <CategoryNavigation />

            <ul className="other-pets-list">
                {pets.map(x =>
                    <Pet key={x.id} {...x} />
                )}
            </ul>
        </section>
    );
};


export default Categories;