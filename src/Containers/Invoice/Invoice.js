import React from 'react';
import {useEffect} from 'react';
import Spinner from '../../Components/UI/Spinner/Spinner';

const Invoice = (props) => {

    useEffect(() => setTimeout(() => {
        props.history.push('/')
    }, 3000), []);

    return (
        <div>
            <p>
                You will be redirected to your bank now...
            </p>
            <Spinner />
        </div>
    )
}

export default Invoice