import React, { Component } from "react";
import axios from "axios";
import { connect } from 'react-redux'; 
import config from "../../config/index";
import { Link } from "react-router-dom";
import {
    Form,
    FormInput,
    FormLabel,
    FormSubmitButton,
    FormHeader,
} from "../Custom/Forms";

import { handleOnChange, login } from '../../redux/actions'

const Register = props => {

    const handleInput = e => {
        props.handleOnChange({name: e.target.name, value: e.target.value})
    };

    const handleSubmit = e => {

        e.preventDefault();

        const credentials = {
            "username": props.username,
            "email": props.email,
            "password1": props.password1,
            "password2": props.password2
        };

        props.login(credentials, 'registration', props.history)
        props.history.replace((`/`));

    };
    
        console.log(props)
        return (
            
                <Form onSubmit={handleSubmit}>
                   
                    <FormHeader>Treasure Island Register</FormHeader>

                    <FormLabel name="username">
                        <FormInput
                            onChange={handleInput}
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={props.username}
                        />
                    </FormLabel>

                    <FormLabel name="email">
                        <FormInput
                            onChange={handleInput}
                            type="text"
                            name="email"
                            placeholder="email"
                            value={props.email}
                        />
                    </FormLabel>

                    <FormLabel name="password1">
                        <FormInput
                            onChange={handleInput}
                            type="password"
                            name="password1"
                            placeholder="Password"
                            value={props.password1}
                        />
                    </FormLabel>

                    <FormLabel name="password2">
                        <FormInput
                            onChange={handleInput}
                            type="password"
                            name="password2"
                            placeholder="Confirm Password"
                            value={props.password2}
                        />
                    </FormLabel>

                    <FormSubmitButton type="submit" disabled={!props.password1 && !props.password2} >
                        Register
                    </FormSubmitButton>

                    <Link to="/login">
                        Already Registered?
                    </Link>

                </Form>
        
        );
    
}

const mapStateToProps = state => ({

    username: state.registerState.username,
    email: state.registerState.email,
    password1: state.registerState.password1,
    password2: state.registerState.password2,

})

export default connect(
    mapStateToProps,
    { handleOnChange, login }
)(Register);