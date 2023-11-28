import { MouseEvent, useState } from "react";
type Props = {
  options: [];
};
const SelectBox = ({ options }: Props) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  const select = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    setSelectedItem(target.textContent);
    toggleOpen();
  };

  return (
    <section>
      <button>{selectedItem ?? "open me!"}</button>
      {open && (
        <section>
          {options.map((option, idx) => {
            return (
              <div
                key={idx}
                onClick={select}
                className={`optionItem ${
                  selectedItem === option && "selected"
                }`}
              >
                {option}
              </div>
            );
          })}
        </section>
      )}
    </section>
  );
};

export default SelectBox;
