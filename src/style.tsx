import styled from "styled-components";

interface Coordenats {
  x: number;
  y: number;
}

export const Container = styled.div`
  background: #1d1e20;
`;

export const ContainerClick = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  cursor: pointer;
`;

export const Point = styled.div(
  ({ x, y }: Coordenats) => `
    position: absolute;
    border-radius: 50%;
    border: 3px solid red;
    padding: 7px;
    left: ${x}px;
    top: ${y}px;
    margin: -8px 0 0 -8px;
`
);

export const Buttons = styled.div`
  position: absolute;
  z-index: 999999;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  padding: 20px;

  button{
    display: flex;
    align-items: center;
    transition: .5s;
    
    &:disabled{
        background: #fff;
        color: #444;
        opacity: .2;
    }

    svg{
        margin-right: 6px;
    }
  }
`;