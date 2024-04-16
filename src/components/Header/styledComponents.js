import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: ${props => (props.isDark === true ? '#231f20' : '#ffffff')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'roboto';
  transition: 0.5s;
  position: sticky;
  padding: 20px 30px 20px 30px;
`
export const Ul = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  gap: 30px;
  align-items: center;
`
export const LogOutBtn = styled.button`
  border: 2px solid ${props => (props.isDark === true ? '#e2e8f0' : '#3b82f6')};
  color: ${props => (props.isDark === true ? '#e2e8f0' : '#3b82f6')};
  background-color: transparent;
  padding: 7px;
  width: 80px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 550;
`
export const ImgLg = styled.img`
  cursor: pointer;
  height: 30px;
`
export const ImgPf = styled.img`
  height: 30px;
  width: 30px;
`
export const ThemeBtn = styled.button`
  color: ${props => (props.isDark === true ? '#ffffff' : '#000000')};
  background-color: transparent;
  border: none;
  font-size: 24px;
  outline: none;
  transition: 0.5s;
  cursor: pointer;
`
export const Div2 = styled.div`
  width: 350px;
  background-color: ${props => (props.isDark === true ? '#231f20' : '#ffffff')};
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 8px 24px 0px rgba(140, 149, 159, 0.2);
`
export const PP = styled.p`
  color: ${props => (props.isDark === true ? '#ffffff' : '#00306e')};
  font-weight: 500;
  font-family: 'roboto';
  padding-bottom: 23px;
`
export const Cancle = styled.button`
  background-color: transparent;
  padding: 9px;
  border-radius: 3px;
  border: 1px solid #7e858e;
  color: #7e858e;
  margin-right: 20px;
  font-weight: 500;
  width: 70px;
  cursor: pointer;
`
export const Confirm = styled.button`
  background-color: #3b82f6;
  padding: 9px;
  font-weight: 500;
  cursor: pointer;
  width: 70px;
  border-radius: 3px;
  border: none;
  color: #ffffff;
`
