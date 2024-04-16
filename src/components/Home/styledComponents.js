import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 92vh;
  display: flex;
  width: 100%;
`
export const Sidebar = styled.div`
  width: 20%;
  margin: 0px;
  transition: 0.5s;
  position: sticky;
  padding: 0px;
  background-color: ${props => (props.isDark === true ? '#231f20' : '#ffffff')};
`
export const MainSection = styled.div`
  width: 80%;
  transition: 0.5s;
  background-color: ${props => (props.isDark === true ? '#181818' : '#f9f9f9')};
  overflow-y: auto;
  overflow-x: hidden;
`
export const Div1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ImgLg = styled.img`
  height: 30px;
`
export const Prime = styled.div`
  display: ${props => (props.getPrime === false ? 'none' : 'block')};
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 250px;
  padding: 26px;
  background-size: cover;
  color: #0f0f0f;
  font-family: 'roboto';
`
export const ButtonClose = styled.button`
  padding: 6px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 24px;
`
export const P = styled.p`
  font-weight: 500;
  line-height: 1.2;
  font-size: 19px;
  padding-top: 20px;
`

export const ButtonGet = styled.button`
  background-color: transparent;
  border: 1px solid #0f0f0f;
  color: #0f0f0f;
  padding: 8px;
  font-weight: 500;
  margin-top: 20px;
  border-radius: 5px;
`
export const InputCard = styled.div`
  display: flex;
  transition: 0.5s;
  align-items: center;
  justify-content: space-between;
  width: 38%;
  padding: 0px;
  background-color: ${props => (props.isDark === true ? '#313131' : '#f1f5f9')};
  margin: 20px;
  border: 1px solid #7e858e;
  border-radius: 4px;
`
export const Input1 = styled.input`
  background-color: transparent;
  transition: 0.5s;
  outline: none;
  background-color: ${props => (props.isDark === true ? '#181818' : '#f1f5f9')};
  width: 90%;
  color: ${props => (props.isDark === true ? '#f1f5f9' : '#181818')};
  border-width: 0px;
  padding: 7px;
  border-right-width: 1px;
  border-color: #7e858e;
  border-radius: 4px 0px 0px 4px;
`
export const ButtonSrc = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 18px;
  width: 60px;
  text-align: center;
  margin: 0px;
  cursor: pointer;
  border-radius: 4px;
`
export const UlCard = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 18px;
  width: 100%;
  gap: 20px;
`
export const Li2 = styled.li`
  width: 30%;
  cursor: pointer;
`
export const ImgThumb = styled.img`
  width: 100% !important;
`
export const Imglg = styled.img`
  width: 25px;
  height: 25px;
`
export const Div4 = styled.div`
  display: flex;
  gap: 10px;
  font-family: 'roboto';

  padding: 10px;
`
export const Div6 = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
`
export const PP = styled.p`
  font-size: 15px;
  padding: 0px;
  margin: 0px;
  color: ${props => (props.isDark === true ? '#f1f5f9' : '#181818')};
  font-weight: 400;
  line-height: 1.5;
`
export const P1 = styled.p`
  font-size: 15px;
  padding: 0px;
  margin: 0px;
  color: #475569;
  font-weight: 400;
`
export const Div44 = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  list-style-type: dot;
`
