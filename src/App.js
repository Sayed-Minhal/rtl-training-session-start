import RegistrationForm from "./components/RegistrationForm/RegistrationForm";

function App({name}) {

  const onSubmitHandler = (formData)=>{
    console.log(formData)
  };

  return (
    <div className="App">
      <div>Hello, my name is {name}</div>
      <RegistrationForm onSubmitHandler={onSubmitHandler} data-testid="registrationForm"/>
    </div>
  );
}

export default App;
