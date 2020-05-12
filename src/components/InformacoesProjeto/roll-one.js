import React from 'react';
import { useSpring, animated } from 'react-spring'

import './styles.css'
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
function InformacoesProjeto(props) {//tension :350
  const [Props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 20, tension: 100, friction: 800 } }))

  return (
        <animated.div id='one-line-roll'
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: Props.xys.interpolate(trans) }}
        >
        {
            props.uri ? <img id='img-one-roll' src={props.uri} alt='image-5' /> 
            :
            null
        }
        </animated.div>
  )
}

export default InformacoesProjeto;