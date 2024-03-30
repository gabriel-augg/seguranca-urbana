import {useRef, useState} from "react"
import { useNavigate } from "react-router-dom"

import InputMask from "react-input-mask"

import Container from "../../components/Container"
import Title from "../../components/Title"
import Input from "../../components/Input"

import styles from "./styles.module.css"
import api from "../../utils/api"

export default function Home(){
    const nameRef = useRef()
    const [cep, setCep] = useState("")
    const crimeRateRef = useRef()
    const publicLightRef = useRef()
    const policePresenceRef = useRef()
    const [recommendation, setRecommendation] = useState("")

    const navigate = useNavigate()


    function handleCreate(e){
        e.preventDefault()

        if(!nameRef.current.value || !crimeRateRef.current.value || !publicLightRef.current.value || !policePresenceRef.current.value || !recommendation || !cep) {
            alert("Preencha todos os campos")
            return
        }

        api.post("/neighborhoods/create", {
            name: nameRef.current.value,
            crimeRate: crimeRateRef.current.value,
            publicLight: publicLightRef.current.value,
            policePresence: policePresenceRef.current.value,
            recommendation: recommendation,
            cep
        })
        .then(()=> {
            alert("Sucesso!")
            navigate("/")
        })
        .catch(()=> {
            nameRef.current.value = ""
            crimeRateRef.current.value = ""
            publicLightRef.current.value = ""
            policePresenceRef.current.value =""
            setRecommendation("")
            setCep("")
            alert("Houve algum erro, por favor tente novamente mais tarde!")
        })
    }

    function handleInputSearch(e){
        const formattedCep = e.target.value.replace("-", "")
        setCep(formattedCep)
    }

    return(
        <Container>
            <section className={styles.create_container}>
                <Title title="Adicionando um bairro" />
                <form onSubmit={handleCreate}>
                    <Input title="Nome do bairro" onRef={nameRef} type="text" name="name" placeholder="Digite o nome do bairro" />
                    <Input title="CEP"  name="cep" cep={handleInputSearch} placeholder="CEP" isCep={true} />
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