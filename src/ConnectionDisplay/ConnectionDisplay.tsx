import { useBetween } from 'use-between';

import { GetSetPath } from '../ShortestPath'

import {HiArrowNarrowRight} from 'react-icons/hi'
import {IoIosAirplane} from 'react-icons/io'

import './ConnectionDisplay.css'

export default function ConnectionDisplay() {
  const {path} = useBetween(GetSetPath);

  return (
    <ul className = 'portsContainer'> {
      path ? path.map(name => PortPoint(name)) : 'Wrong port name'
      } 
    </ul>
  )
}

const PortPoint = (name) => {
  return (
    <>
    <li className="port">
      <IoIosAirplane  className='icon'/>
      {name}
    </li>
    
    <HiArrowNarrowRight className='arrow'/>
    </>
  )
}