import React from 'react';
// Assets import
import startVideo from '../../assets/startingVideo.mp4';
//Styled components import
import {
  StartPageContainer,
  PageHeader,
  ContentContainer,
  Slogan,
  AppName,
  PageButton,
  AppDescription,
  LoginButton,
  SignupButton,
  PageFooter,
  LinkToGithub,
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

const StartingPage = () => {
  return (
    <span>
      <video autoPlay loop muted style={videoStyle}>
        <source src={startVideo} type="video/mp4" />
      </video>
      <StartPageContainer>
        <PageHeader>
          <LoginButton>Login</LoginButton>
          <SignupButton>Sign up</SignupButton>
        </PageHeader>
        <ContentContainer>
          <Slogan>Take your money flow under control</Slogan>
          <AppName>BudgetHelper</AppName>
          <AppDescription>
            BudgetHelper helps you to control your expenses and incomes, as well as to plan your budget.
            {' '}
            You can also limit your expenses in order to achieve your financial goals.
            {' '}
            Start using BudgetHelper and control your cash flow today.
          </AppDescription>
          <PageButton>Join now</PageButton>
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

export default StartingPage;
