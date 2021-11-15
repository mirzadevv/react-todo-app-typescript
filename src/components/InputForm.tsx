import { ChangeEvent, useState } from "react";
interface InputFormProps {
  onAdd: (todoValue: string | number) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onAdd }) => {
  const [toodValue, setTodoValue] = useState<string | number>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onAdd(toodValue);
    setTodoValue("");
  };

  return (
    <div className="add-items d-flex">
      <input
        type="text"
        className="form-control todo-list-input"
        placeholder="What do you need to do today?"
        onChange={handleChange}
        value={toodValue}
      />
      <button
        className="add btn btn-primary font-weight-bold todo-list-add-btn"
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  );
};

export default InputForm;
