import styles from "./styles.module.css"

export default function Input({title, type, name, onRef, placeholder}){
    return(
        <div className={styles.input_control}>
            <label htmlFor={name}>{title}</label>
            <input type={type} id={name} name={name} ref={onRef} placeholder={placeholder} />
        </div>
    )
}