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
  font-family: 'roboto';
  background-color: ${props => (props.isDark === true ? '#181818' : '#f9f9f9')};
  overflow-y: auto;
  overflow-x: hidden;
`
export const Div2 = styled.div`
  padding: 18px;
  font-size: 23px;
  border-radius: 1000%;
  background-color: ${props => (props.isDark === true ? '#000000' : '#cbd5e1')};
  color: #ff0000;
`
export const Div1 = styled.div`
  background-color: ${props => (props.isDark === true ? '#0f0f0f' : '#ebebeb')};
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 20px 60px 20px 60px;
`
export const Heading = styled.h1`
  font-size: 29px;
  color: ${props => (props.isDark === true ? '#ebebeb' : '#0f0f0f')};
`
export const UlEl = styled.ul`
  list-style-type: none;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  margin: 10px;
`
export const LiEl = styled.li`
  display: flex;
  width: 90%;
  gap: 10px;
  cursor: pointer;
`
export const ImgTh = styled.img`
  width: 50%;
`
