import styles from "./styles.module.css"
import InputMask from "react-input-mask"

export default function Input({title, type, name, onRef, placeholder, isCep, cep}){

    if(isCep){
        return(
        <div className={styles.input_control}>
            <label htmlFor={name}>{title}</label>

           <InputMask mask="99999-999" onChange={cep} id={name} name={name} placeholder={placeholder}/>
        </div> 
        )
    }

    return(
        <div className={styles.input_control}>
            <label htmlFor={name}>{title}</label>
            <input type={type} id={name} name={name} ref={onRef} placeholder={placeholder} />
        </div>
    )
}