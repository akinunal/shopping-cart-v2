import React from 'react';
import {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import Spinner from '../../Components/UI/Spinner/Spinner';

const Invoice = (props) => {

    useEffect(() => {
        const timer = setTimeout(() => {
          props.history.push('/');
        }, 3000);
        return () => clearTimeout(timer);
      }, []);

    return (
        <div>
            <p>
                You will be redirected to your bank now...
            </p>
            <Spinner />
        </div>
    )
}

export default withRouter(Invoice)