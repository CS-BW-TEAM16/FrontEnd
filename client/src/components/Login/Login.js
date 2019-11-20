import React, { Component } from "react";
import axios from "axios";
import config from "../../config/index";
import { connect } from 'react-redux';
import { handleOnChange, login } from '../../redux/actions'
import { Link } from "react-router-dom";
import {
    Form,
    FormInput,
    FormLabel,
    FormSubmitButton,
    FormHeader,
} from "../Custom/Forms";

const Login = props => {

    const handleInput = e => {
        props.handleOnChange({name: e.target.name, value: e.target.value})
    };

    const handleSubmit = e => {

        e.preventDefault();

        const credentials = {
            "username": props.username,
            "password": props.password,
        };

        props.login(credentials, 'login', props.history)


    };

   
        console.log(props)
        return(
            
            <Form onSubmit={handleSubmit}>
                <FormHeader>Treasure Island Login</FormHeader>

                <FormLabel name="Username">
                    <FormInput
                        onChange={handleInput}
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={props.username}
                        />
                </FormLabel>

                <FormLabel name="password">
                    <FormInput 
                    onChange={handleInput}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={props.password}
                    />
                </FormLabel>

                <FormSubmitButton type="submit" onClick={handleSubmit} >
                    Login
                </FormSubmitButton>

                <Link to="/register">
                    Not registered yet?
                </Link>

            </Form>
            
        );
   
}

const mapStateToProps = state => ({
    username: state.loginState.username,
    password: state.loginState.password
})

export default connect(
    mapStateToProps,
    { handleOnChange, login }
)(Login);