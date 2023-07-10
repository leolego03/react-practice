import styled from "styled-components";

const ButtonComponent = styled.div`
  width: 800px;
  margin: 20px auto;
  padding: 20px 20px 80px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
`

const Title = styled.h1`
  margin: 0;
`

const ButtonContainer = styled.div`
  margin-top: 20px;
`

const LargeButton = styled.button`
  margin-right: 10px;
  width: 200px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  border: 2px solid ${(props) => props.$bordercolor};
  background-color: transparent;
  cursor: pointer;

  &:active {
    color: ${(props) => props.$bordercolor};
  }
`

const StyledButton = styled.button`
  margin-right: 10px;
  width: 200px;
  height: 40px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:nth-of-type(2) {
    background-color: #75baff;
    width: 120px;
  }

  &:nth-of-type(2):active {
    background-color: #509be6;
  }

  &:nth-of-type(3) {
    background-color: #ff9e9e;
    width: 80px;
  }

  &:nth-of-type(3):active {
    background-color: #ed7979;
  }
`

const colorList = ["#0091ff", "#eb4034"];

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
          <Title>Button</Title>
        </div>

        {colorList.map((color) => (
          <ButtonContainer key={color}>
            <LargeButton
              $bordercolor={color}
              onClick={color === "#0091ff" ? onClickPrimaryButton : onClickNevigateButton}
            >
              {color === "#0091ff" ? "Large Primary Button" : "Large Nevigate Button"}
            </LargeButton>

            <StyledButton>
              Medium
            </StyledButton>
            <StyledButton>
              small
            </StyledButton>
          </ButtonContainer>
        ))}
      </ButtonComponent>
    </>
  )
}

export default Button