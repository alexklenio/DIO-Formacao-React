import { Button2 } from "./styles";

const Operator = ({label, onClick}) => {
  return <Button2 onClick={onClick}>
    {label}
    </Button2>;
};

export default Operator;
