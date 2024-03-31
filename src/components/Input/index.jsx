import styles from "./styles.module.css"
import InputMask from "react-input-mask"

export default function Input({title, change, value, name, placeholder, isCep}){

    if(isCep){
        return(
        <div className={styles.input_control}>
            <label htmlFor={name}>{title}</label>
           <InputMask id={name} mask="99999-999" value={value} onChange={change} placeholder={placeholder}/>
        </div> 
        )
    }

    return(
        <div className={styles.input_control}>
            <label htmlFor={name}>{title}</label>
            <input id={name} value={value} onChange={change} placeholder={placeholder} />
        </div>
    )
}