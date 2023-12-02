import { ChangeEvent, ReactNode, createContext, useContext } from "react";

type Props = {
  id: string;
  value: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  children: ReactNode;
};

// Context API를 통해서 컴포넌트 내부에서 공유될 상태를 정의한다.
const InputContext = createContext({
  id: "",
  value: "",
  type: "text",
  onChange: () => {},
});

// 부모 컴포넌트를 생성하여 위의 Context API를 공유한다.
const InputWrapper = ({ id, value, type, onChange, children }: Props) => {
  const contextValue = { id, value, type, onChange };
  return (
    <InputContext.Provider value={contextValue}>
      {children}
    </InputContext.Provider>
  );
};

const Input = ({ ...props }) => {
  const { id, value, onChange, type } = useContext(InputContext);
  return (
    <input
      id={id}
      value={value}
      type={type}
      onChange={onChange}
      {...props}
      className=""
    />
  );
};

const Label = ({ children, ...props }: { children: ReactNode }) => {
  const { id } = useContext(InputContext);
  return (
    <label htmlFor={id} {...props}>
      {children}
    </label>
  );
};

const Caption = ({ text, isVaild }: { text: string; isVaild: boolean }) => (
  <p className={isVaild ? "block" : "invisible"}>{text}</p>
);

InputWrapper.Input = Input;
InputWrapper.Label = Label;
InputWrapper.Caption = Caption;

export default InputWrapper;
