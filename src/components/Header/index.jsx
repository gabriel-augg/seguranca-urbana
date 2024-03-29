import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import styles from "./styles.module.css"

export default function Header(){
    return(
        <header className={styles.header}>
           <div>
                <Link to="/">
                    <img src={logo} width={140} alt={logo} />
                </Link>
            </div> 
            <ul>
                <li>
                    <Link to="/" >Todos os bairros</Link>
                </li>
                <li>
                    <Link to="/pesquisar">Pesquisar</Link>
                </li>
                <li>
                    <Link to="/cadastrar">Cadastrar</Link>
                </li>
            </ul>
        </header>
    )
}