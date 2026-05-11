import { useEffect } from "react";
import { useState } from "react"
import Message from "./Message";

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Saisho',
        email: 'saisho@hotmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        })
    };

    useEffect(() => {
        /* console.log('This will be printed when component mount!'); */
    }, []);

    useEffect(() => {
        /*  console.log('This will be printed when FormState change!'); */
    }, [formState]);

    useEffect(() => {
        /* console.log('This will be printed when EMAIL from FormState change!'); */
    }, [email]);

    return (
        <>
            <h1>Formulario simple</h1>
            <hr />

            <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange} />
            {username === 'Saisho' && <Message />}

            <input type="email" className="form-control mt-2" placeholder="example@google.com" name="email" value={email} onChange={onInputChange} />
        </>
    )
}

export default SimpleForm
