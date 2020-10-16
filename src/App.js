import React,{useState} from "react";
import Form from "./components/Form"
import Home from "./components/Home"
import {Switch, Route} from "react-router-dom"
import * as yup from "yup";
import schema from "./validation/formSchema";
import Axios from "axios";

const initialFormValues = {
  size: "",
  topping: "",
  pepperoni: false,
  sausage: false,
  onion:false,
  olives:false,
  pineapple:false,
  extraCheese:false,
  garlic:false,
  customerNote:"",
  username:""
}
const initialFormErrors = {
  username: "",
  size: "",
  customerNote:"",
  pepperoni: false,
  sausage: false,
  onion:false,
  olives:false,
  pineapple:false,
  extraCheese:false,
  garlic:false,
  topping: "",

};

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);


  const submitForm = () => {
    let newCustomer = {
  
      username: formValues.username,
      size: formValues.size,
      topping: formValues.topping,
      customerNote: formValues.customerNote,
      types: ["pepperoni","sausage","onion","olives","pineapple","garlic","extraCheese" ].filter(
        (types)=>formValues[types]
      )
    }; 
    postNewCustomer(newCustomer)  
  }  

const postNewCustomer = (newCustomer) => {
  Axios
    .post("https://reqres.in/api/users", newCustomer)
    .then((res)=>{
      console.log(res.data)
      setFormValues(initialFormValues);
    })
    .catch((err) => {
        console.log(err);
      });
}

const inputChange = (name, value) => {

  yup
      .reach(schema, name)
      .validate(value).then(()=>{
        setFormErrors({
          ...formErrors, [name]: "",
        })
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value, 
    });
  };

  return (
    <>
      <Switch>
        <Route path="/pizza">
          <Form values={formValues} change={inputChange} errors={formErrors} submit={submitForm} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default App;
