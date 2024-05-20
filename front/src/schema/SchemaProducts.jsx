import * as yup from "yup"

const SchemaProducts = yup.object().shape({
    imgSRC:yup.string().required("Please image"),
    title:yup.string().required("Please title"),
    price:yup.number().required("Please price")
})

export default SchemaProducts