// import React from "react:";
import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    align-self: center;
    margin: 0 auto;
`;

export const FormInput = styled.input`
    border: 1px solid black;
    padding-left: 2em;
    height: 1.5em;
    font-size: 1em;
    width: 70%;
    background-color: #e3e8e4;
    padding-top: 0.3em;
`;

export const FormLabel = styled.label`
    width: 50%;
    border: 1px solid black;
    border-radius: 50px;
    height: 3em;
    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: 2em;
    margin-bottom: 3em;
    background-color: #e3e8e4;
`;

export const FormSubmitButton = styled.button`
    cursor: pointer;
    height: 2.5em;
    border-radius: 50px;
    font-size: 1em;
    font-weight: bold;
    background-color: #094512;
    border: 1px solid #747574;
    color: #e4ebe5;
    width: 25%;

    &:hover {
        box-shadow: 5px 5px 20px rgba(255, 255, 255, 0.35);
        transition: box-shadow 0.1s ease-in-out;
    }
`;

export const FormHeader = styled.h1`
    color: black;
    font-size: 3.5em;
    color:#016b18;
    margin-bottom: 1.2em;
`;