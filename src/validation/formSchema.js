import * as yup from "yup";

export default yup.object().shape({
    username:yup
        .string()
        .required("name is required")
        .min(2, "name must be atleast 2 characters"),
    customerNote: yup
        .string(),
    size: yup
        .string()
        .required("size is required"),
    topping:yup
        .string()
        .required("topping is required"),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    onion: yup.boolean(),
    olives: yup.boolean(),
    pineapple: yup.boolean(),
    extraCheese: yup.boolean(),
    garlic: yup.boolean(),

})