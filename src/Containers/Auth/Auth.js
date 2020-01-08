import React, {Component} from 'react';
import * as actionTypes from "../../store/actions/actions";
import { connect } from "react-redux";
import classes from './Auth.module.css';

class Auth extends Component {
    state = {
        value: ""
    }

    onChangeHandler = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem("user"));

        if (user !== null) {
            return this.props.onLogin();
        }
    }

    render() {
        const { onLogin, user, onLogout, children } = this.props;
        const { value } = this.state

        if (user.name) {
            return (
                <div>
                    <div className={classes.loginWrapper}>
                        <p>Welcome, {user.name}</p>
                        <button className={classes.authButton} style={{width: '10%'}} onClick={onLogout}>Logout</button>
                    </div>
                    {children}
                </div>
            );
        }

        return (
            <div className={classes.signInWrapper}>
                <img src='/images/pngguru.com.png' className={classes.logo} />
                <div className={classes.signInBox}>
                    <div>
                        <label for='name'>Your Name:</label>
                        <br/>
                        <input type='text' name='name' onChange={(e) => this.onChangeHandler (e)} placeholder='Please input your name'  autoComplete="new-password"/>
                    </div>
                    <div>
                        <label for='password'>Your Password:</label>
                        <br/>
                        <input type='password' name='password' placeholder='Please input your password' autoComplete="new-password"/>
                    </div>
                    <button 
                        className={classes.authButton} 
                        onClick={onLogin.bind(this, this.state.value)} 
                        disabled={!value}>
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
      onLogin: (name) => {
        const user = { name: name };
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

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
