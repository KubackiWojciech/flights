import './FormContainer.css';
import {ButtonToFindPath} from '../ShortestPath';

export default function FormContainer() {
  return (
    <div id='form-container' >
      <div className="form-group">
        <label>Departure airport</label>
        <input id = 'start' className="form-control" aria-describedby="emailHelp" placeholder="Departure airport" />
      </div>
      <div className="form-group">
        <label>Arrival airport</label>
        <input id = 'end' className="form-control" placeholder="Arrival airport" />
      </div>
      <ButtonToFindPath />
    </div>
  )
}