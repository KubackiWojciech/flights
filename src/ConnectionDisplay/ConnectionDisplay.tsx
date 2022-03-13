import { useBetween } from 'use-between';

import { GetSetPath } from '../ShortestPath'

// import BsArrowRight from 'react-icons'
import {IoIosAirplane} from 'react-icons/io'

import './ConnectionDisplay.css'

export default function ConnectionDisplay() {
  const {path} = useBetween(GetSetPath);

  return (
    <div className = 'portsContainer'>{
      path.map(name => PortPoint(name))
      }</div>
  )
}

const VisualConnections = props => {
  return (
    <>
      props.map
    </>
  )
};

const PortPoint = (name) => {
  return (
    <div className="port">
      <IoIosAirplane />
      {name}

    </div>
  )
}