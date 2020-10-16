import React from 'react'
import { NavLink } from "react-router-dom"

export default function form(props) {
const { values, submit, change, errors } = props;

    const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
   const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };
    return (
        <div>
            <nav className="navBar">
                <div className="navText">
                    <h5>LAMBDA EATS</h5>
                </div>
                <div>
                    <NavLink className="navLinks" exact to="/">Home</NavLink>
                    <NavLink className="navLinks" to="/help">Help</NavLink>
                </div>
            </nav>
            <banner>
                <h1>Build your own pizza</h1>
            </banner>
            <form onSubmit={onSubmit} id="submitForm">
                <label>Choice of size<br />
                    Required <br />
                </label>
                    <select onChange={onChange} name="size" value={values.size} >
                        <option>Select a size</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                    <br />
                    <br />
                    <p>Choice of Sauce</p>
                    <p>Required</p>
                    <label>
                      <input type="radio" name="topping" onChange={onChange} value={"Original Red"} checked={values.topping === "Original Red"} />Original Red
                    </label>
                    <br />
                    <label>
                      <input type="radio" name="topping" onChange={onChange} value={"Garlic Ranch"} checked={values.topping === "Garlic Ranch"} />Garlic Ranch
                    </label>
                    <br />
                    <label>
                     <input type="radio" name="topping" onChange={onChange} value={"BBQ Sauce"} checked={values.topping === "BBQ Sauce"} />BBQ Sauce
                    </label>
                    <br />
                    <label>
                      <input type="radio" name="topping" onChange={onChange} value={"Spinach Alfredo"} checked={values.topping === "Spinach Alfredo"} />Spinach Alfredo
                    </label> 
                    <div>{errors.topping}</div>
                    <br />
                    <br />
                    <p>Add Topping</p>
                    <p>Choose up to 7</p>
                    <label>
                        
                        <input
                            type="checkbox"
                            name="pepperoni"
                            onChange={onChange}
                            checked={values.pepperoni}
                        />
                        Pepperoni
                    </label>
                    <br />
                    <label>
                        
                        <input
                            type="checkbox"
                            name="sausage"
                            onChange={onChange}
                            checked={values.sausage}
                        />
                        Sausage
                    </label>
                    <br />
                    <label>
                        
                        <input
                            type="checkbox"
                            name="onion"
                            onChange={onChange}
                            checked={values.onion}
                        />
                        Onion
                    </label>
                    <br />
                    <label>
                        
                        <input
                            type="checkbox"
                            name="olives"
                            onChange={onChange}
                            checked={values.olives}
                        />
                        Olives
                    </label>
                    <br />
                    <label>
                        
                        <input
                            type="checkbox"
                            name="pineapple"
                            onChange={onChange}
                            checked={values.pineapple}
                        />
                        Pineapple
                    </label>
                    <br />
                    <label>
                        
                        <input
                            type="checkbox"
                            name="extraCheese"
                            onChange={onChange}
                            checked={values.extraCheese}
                        />
                        Extra Cheese
                    </label>
                    <br />
                    <label>
                        
                        <input
                            type="checkbox"
                            name="garlic"
                            onChange={onChange}
                            checked={values.garlic}
                        />
                        Garlic
                    </label>
                    
                    <br />
                    <br />
                    <p>Special Instructions</p>
                    <input type="text" name="customerNote" placeholder="Anything else to add?" onChange={onChange} value={values.customerNote} />
                    <div>{errors.customerNote}</div>
                    <br />
                    <br />
                    <label>Name:
                    <br />
                        <input type="text" name="username" placeholder="Enter name" onChange={onChange} value={values.username} />
                    </label>
                     <div>{errors.username}</div>
                    <br />
                    
                    <button >Submit</button>        
            </form>    
        </div>
    )
}
