import React from 'react';
// Assets import
import startVideo from '../../assets/startingVideo.mp4';
//Styled components import
import {
  Form,
  FormGroup,
  
} from 'reactstrap';
import {
  StartPageContainer,
  PageHeader,
  ContentContainer,
  Slogan,
  AppName,
  SignupButton,
  PageFooter,
  LinkToGithub,
  MyInput,
} from './styles';

//style preferences for video
const videoStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  minWidth: '100%',
  minHeight: '100%',
  width: 'auto',
  height: 'auto',
  filter: 'opacity(40%)',
  zIndex: -100,
  transform: 'translateX(-50%) translateY(-50%)',
};

const SignUpPage = () => {
  return (
    <span>
      <video autoPlay loop muted style={videoStyle}>
        <source src={startVideo} type="video/mp4" />
      </video>
      <StartPageContainer>
        <PageHeader>
          
          
        </PageHeader>
        <ContentContainer>
        <AppName>BudgetHelper</AppName>
          <Slogan>Take your money flow under control</Slogan>
          
          <Slogan>Sign up now</Slogan>
          <Form >
          <FormGroup row>
                <MyInput
                 
                  placeholder="Enter your name"
                />
              </FormGroup>
              <FormGroup row>
                <MyInput
                 
                  placeholder="username"
                />
              </FormGroup>
              <FormGroup row>
                <MyInput
                  type="password"
                 
                  placeholder="password"
                />
              </FormGroup>
              <FormGroup
                row
                style={{ dispay: 'flex', justifyContent: 'flex-end' }}
              >
                <SignupButton>Register</SignupButton>
              </FormGroup>
            </Form>
          
          
        </ContentContainer>
        <PageFooter>
          {' '}
          {'\u00A9'}
          {' '}
          2019 | Made with ❤️ by
          {' '}
          <LinkToGithub
            href="https://github.com/WarOnKhoff/FinApp-Jg"
            target="blank"
          >
            BudgetHelper
          </LinkToGithub>
          {' '}
        </PageFooter>
      </StartPageContainer>
    </span>
  );
};

export default SignUpPage;
