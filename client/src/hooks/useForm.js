import { useState } from "react";

export default function useForm(submitHandler,initialValues){
    
    const[values,setValues] = useState(initialValues);

    const onChange = (e)=>{
       
            let value = '';
            switch (e.target.type) {
                case 'number':
                    value = Number(e.target.value);
                    break;
                case 'checkbox':
                    value = e.target.checked;
                    break;
                default:
                    value = e.target.value;
                    break;
            };
    
            setValues(state => ({
                ...state,
                [e.target.name]: value    //e.target.value,
            }));
    
            console.log(values)
    };

    const onSubmit=(e)=>{
        e.preventDefault();

        submitHandler(values);
    };  

    const onReset=()=>{
       setValues(initialValues);    
    };


    return {
        values,
        onChange,
        onSubmit,
        onReset,
    }

};