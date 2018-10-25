import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions';

class SignUp extends Component {
    state = {
        fullname: '',
        email: '',
        password: '',
        passwordRepeat: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }
    render() {
        console.log(this.props)
        const {auth, authError } = this.props;
        if (auth.uid) return (<Redirect to='/'></Redirect>)
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">
                    Sign up
                    </h5>
                    <div className="input-field">
                        <label htmlFor="fullname">Full name</label>
                        <input type="text" id="fullname" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="passwordRepeat">password repeat</label>
                        <input type="password" id="passwordRepeat" onChange={this.handleChange}/>
                    </div>
                    <div className="red-text center">
                        { authError ? <p>{ authError }</p> : null }
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">
                            SignUp
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth,
      authError: state.auth.authError
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignUp)