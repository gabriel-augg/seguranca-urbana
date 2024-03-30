import {useRef, useState} from "react"

import Container from "../../components/Container"
import Title from "../../components/Title"
import Input from "../../components/Input"

import styles from "./styles.module.css"
import api from "../../utils/api"

export default function Home(){
    const nameRef = useRef()
    const cepRef = useRef()
    const crimeRateRef = useRef()
    const publicLightRef = useRef()
    const policePresenceRef = useRef()
    const [recommendation, setRecommendation] = useState("")


    function handleCreate(e){
        e.preventDefault()
        api.post("/neighborhoods/create", {
            name: nameRef.current.value,
            crimeRate: crimeRateRef.current.value,
            publicLight: publicLightRef.current.value,
            policePresence: policePresenceRef.current.value,
            recommendation: recommendation,
            cep: cepRef.current.value
        })
        .then(()=> {
            alert("Sucesso!")
        })
        .catch(()=> {
            alert("Erro!")
        })
    }

    return(
        <Container>
            <section className={styles.create_container}>
                <Title title="Adicionando um bairro" />
                <form onSubmit={handleCreate}>
                    <Input title="Nome do bairro" onRef={nameRef} type="text" name="name" placeholder="Digite o nome do bairro" />
                    <Input title="CEP" type="number" onRef={cepRef} name="cep" placeholder="Digite o cep" />
                    <Input title="Taxa de criminalidade" onRef={crimeRateRef} type="number" name="crimeRate" placeholder="Digite a taxa de criminalidade" />
                    <Input title="Iluminação pública" onRef={publicLightRef} type="text" name="publicLight" placeholder="Digite o estado da iluminação publica" />
                    <Input title="Presença policial" onRef={policePresenceRef} type="text" name="policePresence" placeholder="Digite o estado da presença policial" />
                    <div className={styles.textarea_control}>
                        <label>Recomendação de segurança</label>
                        <textarea onChange={(e)=> setRecommendation(e.target.value)} name="recommendation" placeholder="Digite uma recomendação" />
                    </div>
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>

            </section>
        </Container>
    )
}