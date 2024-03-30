import Container from "../../components/Container"
import Title from "../../components/Title"
import Card from "../../components/Card"

import ilustration from "../../assets/ilustration.svg"
import styles from "./styles.module.css"

export default function Search(){
    return(
        <section>
        <Container>
            <section>
                <Title title="Procurando um bairro" />
                <div className={styles.search_area}>
                    <div>
                        <input type="number" name="search" placeholder="Digite aqui o cep"  />
                        <button>Buscar</button>
                    </div>
                    <select>
                        <option>Tudo</option>
                        <option>Taxa de criminalidade</option>
                        <option>Iluminação pública</option>
                        <option>Recomendação de segurança</option>
                    </select>
                </div>
                <div className={styles.card_area}>
                    {/* <Card id="12313" name="Santa maria" crimeRate="5,2" publicLight="Boa" recomendation="Não ande muito tarde a noite" cep="49044274z"  /> */}
                    <div className={styles.no_card}>
                        <h1>Não há nenhum card no momento.</h1>
                        <img src={ilustration} alt="ilustracao" />
                    </div>
                </div>
            </section>
        </Container>
        </section>
    )
}