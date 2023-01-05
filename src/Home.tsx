import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material';
import { ImUndo, ImLoop2 } from "react-icons/im";
import { Buttons, Container, ContainerClick, Point } from './style'

interface Coordenats {
  XPosition: number;
  YPosition: number;
}

const Home = () => {

  const [PointList, setPointList] = useState<Coordenats[]>([]);
  const [AnulationPointList, setAnulationPointList] = useState<Coordenats[]>([]);
  const [AllowAnulation, setAllowAnulation] = useState<boolean>(true);
  const [AllowRemade, setAllowRemade] = useState<boolean>(true);
  
  useEffect(() => {
    if(!PointList.length) setAllowAnulation(true)
    else setAllowAnulation(false)
  }, [PointList, AnulationPointList]);
  
  useEffect(() => {
    if(!AnulationPointList.length) setAllowRemade(true)
    else setAllowRemade(false)
  }, [PointList, AnulationPointList]);


  const ShowCursorPosition = (event: React.MouseEvent<HTMLElement>) => {
      const { clientX, clientY } = event 
      const [XPosition, YPosition] = [clientX, clientY]
      setPointList([...PointList, { XPosition, YPosition }])
  }
  
  const AnularMarcation = () => {
    const Item = PointList[PointList.length - 1]
    setAnulationPointList([...AnulationPointList, Item])
    PointList.pop()
  }
  
  const DesfazerAnulation = () => {
    const Item = AnulationPointList[AnulationPointList.length - 1]
    setPointList([...PointList, Item])
    AnulationPointList.pop()
  }


  return (
    <Container>
      <Buttons>
        <Button variant='contained' color='error' disabled={AllowAnulation} onClick={AnularMarcation}><ImUndo /> Anular</Button>
        <Button variant='contained' disabled={AllowRemade} onClick={DesfazerAnulation}><ImLoop2 /> Refazer</Button>
      </Buttons>
      <ContainerClick onClick={ShowCursorPosition}>
        {PointList.map(({ XPosition, YPosition }, index) => (
          <Point key={index} x={XPosition} y={YPosition} />
        ))}
      </ContainerClick>
    </Container>
  )
}

export default Home