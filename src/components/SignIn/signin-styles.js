import styled from "styled-components";
import * as Palette from "../../styles/palette";
import { Row, Column, Button } from "../../styles/global";

export const SignInContainer = styled(Column)`
  height: 100vh;
  /* align-items: center; */
  background-color: ${Palette.paletteColor2};
`;

export const ContentContainer = styled(Column)`
justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* margin-top: 80px; */
  /* padding-left: 30px; */
`;

export const H2Login = styled.h2`
  color: black;
  font-size: ${Palette.fontSizeSlogan};
  /* margin-bottom: 100px; */
  margin-bottom: 5%;
  text-align: center;
  cursor: default;
`;

export const UsernameLabel = styled.label`
  color: black;
`;

export const PasswordLabel = styled.label`
  color: black;
`;

export const UsernameInput = styled.input`
  color: black;
  padding: 15px 32px;
  margin: 20px;
  text-align: center;
  font-size: 20px;
  width: 300px;
  height: 30px;
  border-radius: 20px;
  border: 2px solid ${Palette.paletteColor1};
`;

export const PasswordInput = styled.input`
  color: black;
  padding: 15px 32px;
  margin: 20px;
  text-align: center;
  font-size: 20px;
  width: 300px;
  height: 30px;
  border-radius: 20px;
  border: 2px solid ${Palette.paletteColor1};
`;

export const SignInButton = styled(Button)`
  color: black;
  padding: 5px;
  text-align: center;
  font-size: 20px;
  width: 150px;
  height: 40px;
  background-color: ${Palette.paletteColor1};
  border-radius: 20px;
  border: none;
`;
