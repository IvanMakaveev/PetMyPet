import * as petService from './../../services/petService'
import PetFormView from './../PetFormView'
import { Component} from 'react';

class Edit extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            description: '',
        }
    }

    componentDidMount(){
        petService.getOne(this.props.match.params.pedId)
            .then(pet =>{
                this.setState(pet);
            })
    }

    onEditPetSubmitHandler(e) {
        e.preventDefault();

        console.log(e.target)
    }

    render(){
        return (
            <PetFormView
                onSubmitHandler={this.onEditPetSubmitHandler.bind(this)}
                petName={this.state.name}
                setPetName={(name) => this.setState({name})}
            />
        );
    }
}

export default Edit;