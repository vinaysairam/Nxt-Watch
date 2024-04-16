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
  background-color: ${props => (props.isDark === true ? '#0f0f0f' : '#f9f9f9')};
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
  background-color: ${props => (props.isDark === true ? '#0f0f0f' : '#f9f9f9')};
  flex-direction: column;
  width: 100%;
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
export const LI1 = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
`
export const Div22 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Div441 = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  border: none;
  color: ${props => (props.isLike === true ? '#2563eb' : '#64748b')} !important;
  gap: 10px;
  font-size: 18px;
  cursor: pointer;
`
export const Div442 = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  border: none;
  font-size: 18px;

  color: ${props =>
    props.isDisLike === true ? '#2563eb' : '#64748b'} !important;
  gap: 10px;
  cursor: pointer;
`
export const Div443 = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  border: none;
  font-size: 18px;

  color: ${props => (props.isSave === true ? '#2563eb' : '#64748b')} !important;
  gap: 10px;
  cursor: pointer;
`
