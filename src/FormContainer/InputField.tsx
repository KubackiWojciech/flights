import ListOfPorts from "./ListOfPorts"

export default function InputField(props: { label: string, id: string }) {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <select id={props.id} className="form-control">
        <ListOfPorts />
      </select>
    </div>
  )
}
