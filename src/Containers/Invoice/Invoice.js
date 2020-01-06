import React from 'react';
import Spinner from '../../Components/UI/Spinner/Spinner';

const Invoice = (props) => {
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