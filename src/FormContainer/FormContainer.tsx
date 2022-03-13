import './FormContainer.css';
import {ButtonToFindPath} from '../ShortestPath';
import ListOfPorts from './ListOfPorts';

export default function FormContainer() {
  return (
    <div id='form-container' >
      <div className="form-group">
        <label>Departure airport</label>
        <select id = 'start' className="form-control">
          <ListOfPorts />
        </select>
      </div>
      <div className="form-group">
        <label>Arrival airport</label>
        <select id = 'end' className="form-control">
          <ListOfPorts />
        </select>
      </div>
      <ButtonToFindPath />
    </div>
  )
}