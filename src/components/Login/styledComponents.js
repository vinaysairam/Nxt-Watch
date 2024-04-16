import styled from 'styled-components'

export const Div1 = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark === true ? '#212121' : '#ffffff')};
`

export const Container = styled.div`
  background-color: ${props => (props.isDark === true ? '#0f0f0f' : '#ffffff')};
  width: 450px;
  align-items: center;
  display: flex;
  font-family: 'Roboto';
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  box-shadow: ${props =>
    props.isDark === true ? 'null' : ' rgba(149, 157, 165, 0.2) 0px 8px 24px'};
  border-radius: 8px;
`
export const ImgLogo = styled.img`
  height: 40px;
  margin-top: 16px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 20px;
`
export const Input = styled.input`
  padding: 10px;
  outline: none;
  margin-bottom: 20px;
  border: 1px solid ${props => (props.isDark === true ? '#475569' : '#475569')};
  border-radius: 4px;
  font-weight: 500;
  color: ${props => props.isDark === true && '#ffffff'};
  background-color: ${props =>
    props.isDark === true ? 'transparent' : '#ffffff'};
`
export const Label = styled.label`
  color: ${props => (props.isDark === true ? '#ffffff' : '#64748b')};
  font-weight: 500;
  font-size: 13px;
  padding-bottom: 4px;
`
export const CheckBox = styled.input`
  padding-right: 10px;
  cursor: pointer;
`
export const Div2 = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`
export const LoginBtn = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  border: none;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  padding: 10px;
  margin-top: 20px;
`
export const P = styled.p`
  color: #ff0000;
  text-align: center;
`
export const Lb = styled.label`
  color: ${props => (props.isDark === true ? '#ffffff' : '#000000')};
  font-size: 14px;
`
