import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import * as actionTypes from "../../store/actions/actions";
import { connect } from "react-redux";
import classes from './Auth.module.css';

class Auth extends Component {
    
    state = {
        name: "",
        password: ""
    }

    onChangeHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    onPasswordChangeHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user !== null) {
            return this.props.onLogin(user.name);
        }
    }

    render() {
        const { onLogin, user, onLogout, children } = this.props;
        const { name, password } = this.state

        if (user.name) {
            return (
                <div>
                    <div className={classes.loginWrapper}>
                        <p>Welcome, {user.name}</p>
                        <button className={classes.authButton} style={{width: '10%'}} onClick={() => onLogout()}>Logout</button>
                    </div>
                    {children}
                </div>
            );
        }

        return (
            <div className={classes.signInWrapper}>
                <img src='/images/pngguru.com.png' className={classes.logo} alt='company-logo'/>
                <div className={classes.signInBox}>
                    <div>
                        <label htmlFor='name'>Your Name:</label>
                        <br/>
                        <input type='text' name='name' onChange={(e) => this.onChangeHandler(e)} placeholder='Please input your name'  autoComplete="new-password"/>
                    </div>
                    <div>
                        <label htmlFor='password'>Your Password:</label>
                        <br/>
                        <input type='password' name='password' onChange={(e) => this.onPasswordChangeHandler(e)} placeholder='Please input your password' autoComplete="new-password"/>
                    </div>
                    <button 
                        className={classes.authButton} 
                        onClick={onLogin.bind(this, name, password)} 
                        disabled={!name}>
                        Login
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.authReducer.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onLogin: (name, password) => {
        const user = { name: name, password: password };
        localStorage.setItem("user", JSON.stringify(user));
        return dispatch({
          type: actionTypes.LOGIN,
          payload: {
            user: user
          }
        });
      },

      onLogout: () => {
        localStorage.removeItem("user");
        return dispatch({
          type: actionTypes.LOGOUT
        })
      }
    }
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth))
