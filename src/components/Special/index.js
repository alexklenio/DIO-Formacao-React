import { Button3 } from "./styles";

const Special = ({label, onClick}) => {
  return <Button3 onClick={onClick}>
    {label}
    </Button3>;
};

export default Special;
