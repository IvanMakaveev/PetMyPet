import React, { Component } from 'react';
import './Demo.css';

const options = [
    { label: 'It', value: 'it' },
    { label: 'Engineer', value: 'engineer' },
    { label: 'Unemployed', value: 'unemployed' },
]

class Demo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            bio: 'asdasdasdasdasds',
            occupation: 'unemployed',
            errors: {
                email: false
            }
        };

        this.emailInput = React.createRef();

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(e.target.username.value);
        console.log(e.target.age.value);

        if (!this.emailInput.current.value.includes('@')) {
            console.log('error');

            this.setState({ errors: { email: true } });
            this.emailInput.current.focus();
        }

        console.log(this.emailInput.current.value);
    };

    // onUsernameChangeHandler = (e) => {
    //     console.log(e.target.value);
    //     this.setState({username: e.target.value});
    // }

    // onAgeChangeHandler = (e) => {
    //     this.setState({age: e.target.value});
    // }

    onChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <h1>Demo form</h1>

                <form onSubmit={this.onSubmitHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" value={this.state.username} onChange={this.onChangeHandler} />

                    <label htmlFor="age">Age</label>
                    <input type="number" name="age" id="age" defaultValue="18" />

                    <textarea name="bio" id="bio" onChange={this.onChangeHandler} value={this.state.bio}></textarea>

                    <select name="occupation" id="occupation" onChange={this.onChangeHandler} value={this.state.occupation}>
                        {options.map(x =>
                            <option key={x.value} value={x.value}>{x.label}</option>
                        )}
                    </select>

                    <label htmlFor="email">Email</label>
                    <input ref={this.emailInput} type="text" id="email" name="email" placeholder="example@pesho.com" />
                    <div className={`input-validation ${this.state.errors.email && 'show'}`}>Invalid email</div>

                    <input type="submit" value="Send" />
                </form>
            </div>
        );
    }
}

export default Demo;