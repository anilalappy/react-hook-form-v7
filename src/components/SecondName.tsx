import { Controller, useFormContext } from "react-hook-form";

const SecondName = () => {
  const { control } = useFormContext();

  return (
    <div>
      <label>Second Name  : </label>
      <Controller
        name="secondName"
        control={control}
        render={({ field: { value, onChange } }) => (
          <input value={value} onChange={onChange} />
        )}
      />
    </div>
  )
}
export default SecondName