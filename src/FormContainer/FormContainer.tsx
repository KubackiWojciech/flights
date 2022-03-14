import {ButtonToFindPath} from '../ShortestPath';
import InputField from './InputField';

import './FormContainer.css';

export default function FormContainer() {
  return (
    <div id='form-container' >
      <InputField label = 'Departure airport' id = 'start' />
      <InputField label = 'Arrival airport' id = 'end' />
      <ButtonToFindPath />
    </div>
  )
}