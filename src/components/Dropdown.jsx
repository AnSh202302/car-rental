import { useDispatch } from "react-redux";
import makes from "../../makes.json";
import { setSelected } from "../redux/selected/selectedSlise";
const Dropdown = () => {
  const dispatch = useDispatch();

  const handleMakeChange = (event) => {
    dispatch(setSelected(event.target.value));
  };
  return (
    <select placeholder="Car brand" onChange={handleMakeChange}>
      <option value="Car brand">Car brand</option>
      {makes.map((make) => (
        <option key={make} value={make}>
          {make}
        </option>
      ))}
    </select>
  );
};
export default Dropdown;
