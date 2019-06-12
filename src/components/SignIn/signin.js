import React from "react";
import {
  SignInContainer,
  ContentContainer,
  H2Login,
  UsernameLabel,
  UsernameInput,
  PasswordLabel,
  PasswordInput,
  SignInButton
} from "./signin-styles";

const SignIn = () => {
  return (
    <SignInContainer>
      <ContentContainer>
        <H2Login>Sign In</H2Login>
        <UsernameLabel>Email</UsernameLabel>
        <UsernameInput />
        <PasswordLabel>Password</PasswordLabel>
        <PasswordInput type="password"/>
        <SignInButton>Sign In</SignInButton>
      </ContentContainer>
    </SignInContainer>
  );
};

export default SignIn;
