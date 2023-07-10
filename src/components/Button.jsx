import styled from "styled-components";

const ButtonComponent = styled.div`
  width: 800px;
  margin: 0 auto;
`

const ButtonContainer = styled.div`
  padding: 0 20px 20px 20px;
`

const StyledButton = styled.button`
  margin-right: 10px;
  width: 180px;
  height: 40px;
  font-size: 16px;
  border: none;

  &:nth-of-type(2) {
    width: 100px;
  }

  &:nth-of-type(3) {
    width: 60px;
  }
`

const Button = () => {
  const onClickPrimaryButton = () => {
    alert("Primary Button Clicked!!")
  };

  const onClickNevigateButton = () => {
    alert(prompt("Nevigate Button Clicked!!"));
  };

  return (
    <>
      <ButtonComponent>
        <div>
          <h1>Button</h1>
        </div>
      
        <ButtonContainer>
          <StyledButton
            onClick={onClickPrimaryButton}
          >
            Large Primary Button
          </StyledButton>

          <StyledButton>Medium</StyledButton>
          <StyledButton>small</StyledButton>
        </ButtonContainer>

        <ButtonContainer>
          <StyledButton
            onClick={onClickNevigateButton}
          >
            Large Nevigate Button
          </StyledButton>

          <StyledButton>Medium</StyledButton>
          <StyledButton>small</StyledButton>
        </ButtonContainer>
      </ButtonComponent>
    </>
  )
}

export default Button