import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: 999;
  top: 0;
  left: 0;
  border-bottom: 1px solid #eee;
  padding: 0 60px;

  @media screen and (max-width: 800px) {
    padding: 10px;
  } ;
`;

export const HeaderContainerInner = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    height: auto;
  } ;
`;

export const LogoContainer = styled(Link)`
  position: relative;
`;

export const LogoImage = styled(Logo)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  } ;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const OptionFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  height: 30px;
  margin-left: 10px;
  border-radius: 50%;
`;
