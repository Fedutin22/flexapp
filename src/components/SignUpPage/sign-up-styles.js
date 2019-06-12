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
justify-content: center;
  align-items: center;
width: 100%;
height: 100%;
margin-top: 0px;

align-items: center;
`;

export const Slogan = styled.h2`
color: ${Palette.paletteColor2};
text-transform: uppercase;
font-size: ${Palette.fontSizeSlogan};

cursor: default;
margin: 20px;
`;

export const AppName = styled.h1`

color: ${Palette.paletteColor1};
font-size: ${Palette.fontSizeAppName};
cursor: default;
`;



export const MyInput = styled.input`

  margin: 20px;
  text-align: center;
  font-size: 20px;
  width: 370px;
  height: 30px;
  border-radius: 20px;
  border: 2px solid ${Palette.paletteColor1};
`;


export const SignupButton = styled (Button)`
color: ${Palette.paletteColor2};
background-color: ${Palette.paletteColor1};
margin-left: 20px;
height: 30px;
width: 370px;
margin: 20px;
border-radius: 20px;
font-size: 20px;
transition: all 0.1s linear;
&:hover{
    transform: scale(1.1);
}
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
