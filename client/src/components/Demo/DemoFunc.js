import { useState } from 'react'

const Demo = () => {
    const [ username, setUsername ] = useState('Pesho');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(e.target.username.value);
        console.log(e.target.age.value);
    };

    const onUsernameChangeHandler = (e) => {
        setUsername(e.target.value);
    }

    return (
        <div>
            <h1>Demo form</h1>

            <form onSubmit={onSubmitHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" value={username} onChange={onUsernameChangeHandler} />
                <label htmlFor="age">Age</label>
                <input type="number" name="age" id="age" />

                <input type="submit" value="Send" />
            </form>
        </div>
    );
}

export default Demo;