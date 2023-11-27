import { ChangeEvent } from "react";

type Props = {
  value: string;
  id: string;
  placeholder: string;
  isPass?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
const FormControl = ({ value, onChange, placeholder, id, isPass }: Props) => {
  return (
    <div>
      <label htmlFor={id}>User name</label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div>{isPass ? "통과" : "실패"}</div>
    </div>
  );
};

export default FormControl;
