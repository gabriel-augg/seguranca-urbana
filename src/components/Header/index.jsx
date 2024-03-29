import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import styles from "./styles.module.css"

export default function Header(){
    return(
        <header className={styles.header}>
           <div>
                <img src={logo} width={160} alt={logo} />
            </div> 
            <ul>
                <li>
                    Todos os bairros
                </li>
                <li>
                    Pesquisar
                </li>
                <li>
                    Cadastrar
                </li>
            </ul>
        </header>
    )
}