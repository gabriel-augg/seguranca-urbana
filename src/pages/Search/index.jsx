import Container from "../../components/Container"
import Title from "../../components/Title"

import styles from "./styles.module.css"

export default function Search(){
    return(
        <section>
        <Container>
            <section>
                <Title title="Procurando um bairro" />
                <div className={styles.search_area}>
                    <div>
                        <input type="text" name="search"  />
                        <button>Buscar</button>
                    </div>
                    <select>
                        <option>Tudo</option>
                        <option>Taxa de criminalidade</option>
                        <option>Iluminação pública</option>
                        <option>Recomendação de segurança</option>
                    </select>
                </div>
            </section>
        </Container>
        </section>
    )
}