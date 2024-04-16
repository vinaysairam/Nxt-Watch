import styled from 'styled-components'

export const Ul = styled.ul`
  display: flex;
  transition: 0.5s;

  flex-direction: column;
  background-color: ${props => (props.isDark === true ? '#231f20' : '#ffffff')};
  gap: 0px;
  row-gap: 10px;
  text-decoration: none !important;
  padding: 0px;
`

export const Li = styled.li`
  transition: 0.5s;
  text-decoration: none !important;
  background-color: ${props => (props.isDark === true ? '#231f20' : '#ffffff')};
  display: flex;
  color: ${props => (props.isActiveBar === true ? '#ff0000' : '#7e858e')};
  align-items: center;
  gap: 18px;
  cursor: pointer;
  padding: 10px 25px 10px 25px;
  margin: 0px;
  font-size: 18px;
`
export const P = styled.p`
  text-decoration: none !important;
  color: ${props => (props.isDark === true ? '#f1f1f1' : '#000000')};
  padding: 0px;
  transition: 0.5s;
  margin: 0px;
  font-family: 'roboto';
  font-weight: ${props => (props.isActiveBar === true ? '550' : 500)};
`
export const Div1 = styled.div`
  display: flex;
  padding-bottom: 10px;
  margin-bottom: 10px;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`
export const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
  gap: 10px;
  justify-content: flex-end;
  padding-bottom: 0px;
  color: ${props => (props.isDark === true ? '#f1f1f1' : '#181818')};
`

export const H1 = styled.p`
  color: ${props => (props.isDark === true ? '#f1f1f1' : '#181818')};
  padding: 3px 0px 3px 0px;
  margin: 3px;
  font-size: 20px;
`
export const ImgLg = styled.img`
  height: 30px;
  width: 30px;
  cursor: pointer;
`
export const UL = styled.ul`
  display: flex;
  gap: 10px;
  padding: 0px;
  color: ${props => (props.isDark === true ? '#f1f1f1' : '#181818')};
  margin: 0px;
`
export const Li1 = styled.li`
  list-style-type: none;
  padding: 10px 0px 10px 0px;
`
export const Para = styled.p`
  color: ${props => (props.isDark === true ? '#f1f1f1' : '#181818')};
  padding: 0px;
  margin: 0px;
  font-weight: 500;
  padding-bottom: 20px;
`
