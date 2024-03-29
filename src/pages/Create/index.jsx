import Container from "../../components/Container"
import Title from "../../components/Title"
import Input from "../../components/Input"

import styles from "./styles.module.css"

export default function Home(){
    return(
        <Container>
            <section className={styles.create_container}>
                <Title title="Adicionando um bairro" />
                <form>
                    <Input title="Nome do bairro" type="text" name="name" placeholder="Digite o nome do bairro" />
                    <Input title="CEP" type="number" name="cep" placeholder="Digite o cep" />
                    <Input title="Taxa de criminalidade" type="number" name="crimeRate" placeholder="Digite a taxa de criminalidade" />
                    <Input title="Iluminação pública" type="text" name="publicLight" placeholder="Digite o estado da iluminação publica" />
                    <div className={styles.textarea_control}>
                        <label>Recomendação de segurança</label>
                        <textarea placeholder="Digite uma recomendação" />
                    </div>
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>

            </section>
        </Container>
    )
}