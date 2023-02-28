import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import FirstName from "./FirstName";
import SecondName from "./SecondName";

const NameWrapper = () => {
  const methods = useForm({defaultValues:{
    firstName:"",
    secondName:""
  }});
  const {getValues,handleSubmit,reset,watch,formState:{isDirty,dirtyFields}} =methods
  useEffect(()=>{
    setTimeout(()=>{
      const apiData = {
        firstName:"Anil",
        secondName:"Bhasi"
      }
      reset(apiData)
    },3000)
  },[])
  useEffect(()=>{
    console.log('isDirty->',isDirty,'dirtyFields->',dirtyFields,'watch->',watch());
    
  })
  const onSubmit = () =>{
    console.log(getValues());
  }
  return (
    <div onSubmit={handleSubmit(onSubmit)}>
      <FormProvider {...methods}>
        <form>
          <FirstName />
          <SecondName />
          <button type='submit'>View the values</button>
        </form>
      </FormProvider>
    </div>
  );
};
export default NameWrapper;
