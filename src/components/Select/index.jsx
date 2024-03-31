import styles from "./styles.module.css"

export default function Select({title, value, change, options, name, isSearch}){
    return(
        <div className={styles.select_container}>
            { !isSearch && <label htmlFor={name}>{title}</label> }
            <select id={name} value={value} onChange={change}>
                {options.length && (
                    options.map((option) => {
                        return(
                            <option value={option}>{option}</option>
                        )
                    })
                )}
            </select>
        </div>
    )
}