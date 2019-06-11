import styled from 'styled-components';
import * as Palette from '../../styles/palette';
import {Row, Column, Button} from '../../styles/global';

export const StartPageContainer = styled (Column)`
height: 100vh;
align-items: flex-end;
background-image: linear-gradient(to left, rgba(4, 57, 94, 0.8) ,rgba(4, 57, 94, 0.7) ,rgba(0, 208, 181, 0.55) );
`;

export const PageHeader = styled (Row)`
position: fixed;
top: 0;
right: 0;
width: 100%;
height: 80px;
box-shadow: 0px -20px 40px 20px black;
background-color: ${Palette.paletteColor5};
justify-content: flex-end;
align-items: center;
padding: 0 50px;
`;
export const PageFooter = styled (Row)`
position: fixed;
bottom: 0;
right: 0;
width: 100%;
height: 30px;
background-color: ${Palette.paletteColor5};
color: ${Palette.paletteColor2};
justify-content: center;
align-items: center;
`;
export const ContentContainer = styled (Column)`
width: 50%;
height: 100%;
margin-top: 80px;
padding-left: 30px;
`;

export const Slogan = styled.h2`
color: ${Palette.paletteColor2};
text-transform: uppercase;
font-size: ${Palette.fontSizeSlogan};
margin-top: 50px;
cursor: default;
`;

export const AppName = styled.h1`
margin-top: 150px;
color: ${Palette.paletteColor1};
font-size: ${Palette.fontSizeAppName};
cursor: default;
`;

export const PageButton = styled (Button)`
color: ${Palette.paletteColor2};
padding: 15px 32px;
text-align: center;
text-decoration: none;
font-size: 20px;
width: 300px;
border-radius: 20px;
border: 2px solid ${Palette.paletteColor1};
transition: all 0.2s linear;
&:hover{
background-color: ${Palette.paletteColor2};
color: ${Palette.paletteColor1};
transform: scale(1.1);
box-shadow: 0px 0px 10px 1px ${Palette.paletteColor1};
  }
`;

export const AppDescription = styled.p`
margin-top: 100px;
margin-bottom: 50px;
font-size: 20px;
width: 70%;
color: ${Palette.paletteColor2};
cursor: default;
`;

export const LoginButton = styled (Button)`
color: ${Palette.paletteColor1};
background-color: ${Palette.paletteColor2};
text-align: center;
text-decoration: none;
font-size: 20px;
width: 150px;
border-radius: 20px;
border:none;
height: 30px;
transition: all 0.1s linear;
&:hover{
    transform: scale(1.1);
}
`;

export const SignupButton = styled (LoginButton)`
color: ${Palette.paletteColor2};
background-color: ${Palette.paletteColor1};
margin-left: 20px;
`;

export const LinkToGithub = styled.a`
color: ${Palette.paletteColor2};
margin-left: 5px;
cursor: pointer;
text-decoration: none;

&:link &:visited &:active {
    text-decoration: none;
}
&:hover{
    color: ${Palette.paletteColor1};
}
`;
