import { useFormContext, Controller } from "react-hook-form";

const FirstName = () => {
  const { control } = useFormContext();
  return (
    <div>
      <label>First Name  : </label>
      <Controller
        name="firstName"
        control={control}
        render={({ field: { value, onChange } }) => (
          <input value={value} onChange={onChange} />
        )}
      />
    </div>
  );
};
export default FirstName;
