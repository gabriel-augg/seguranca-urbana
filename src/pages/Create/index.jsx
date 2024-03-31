import {useState} from "react"
import { useNavigate } from "react-router-dom"
import Container from "../../components/Container"
import Title from "../../components/Title"
import Input from "../../components/Input"
import Select from "../../components/Select"

import styles from "./styles.module.css"
import api from "../../utils/api"

export default function Home(){
    const [name, setName] = useState("")
    const [cep, setCep] = useState("")
    const [crimeRate, setCrimeRate] = useState("Média")
    const [publicLight, setPublicLight] = useState("Boa")
    const [policePresence, setPolicePresence] = useState("Boa")
    const [recommendation, setRecommendation] = useState("")

    const navigate = useNavigate()

    const validadeForm = () => {
        return (
            name && 
            cep &&  
            !(cep.length < 8) && 
            crimeRate && 
            recommendation
        )
    }

    function handleCreate(e){
        e.preventDefault()

        console.log({
            name,
            crimeRate,
            publicLight,
            policePresence,
            recommendation,
            cep
        })

        // api.post("/neighborhoods/create", {
            // name,
            // crimeRate,
            // publicLight,
            // policePresence,
            // recommendation,
            // cep
        // })
        // .then(()=> {
        //     alert("Sucesso!")
        //     navigate("/")
        // })
        // .catch(()=> {
        //     setName("")
        //     setCrimeRate("")
        //     setPublicLight("")
        //     setPolicePresence("")
        //     setRecommendation("")
        //     setCep("")
        //     alert("Houve algum erro, por favor tente novamente mais tarde!")
        // })
    }

    function handleInputCep(e){
        const formattedCep = e.target.value.replace("-", "").replace("_","")
        setCep(formattedCep)
    }

    return(
        <Container>
            <section className={styles.create_container}>
                <Title title="Adicionando um bairro" />
                <form onSubmit={handleCreate}>

                    <Input 
                        title="Nome do bairro" 
                        value={name} change={(e) => setName(e.target.value)} 
                        name="name" 
                        placeholder="Digite o nome do bairro" 
                    />

                    <Input 
                        title="CEP" 
                        name="cep" 
                        cep={handleInputCep} 
                        placeholder="CEP" 
                        isCep={true} 
                    />

                    <Select 
                        title="Taxa de criminalidade" 
                        value={crimeRate} 
                        change={(e) => setCrimeRate(e.target.value)} 
                        name="crimeRate" 
                        options={["Baixa", "Média", "Alta", "Muito alta"]} 
                    />


                    <Select 
                        title="Iluminação pública" 
                        value={publicLight} 
                        change={(e) => setPublicLight(e.target.value)} 
                        name="publicLight" 
                        options={["Ruim", "Boa", "Ótima"]} 
                    />

                    <Select 
                        title="Presença policial"
                        value={policePresence}
                        change={(e) => setPolicePresence(e.target.value)}
                        name="policePresence" 
                        options={["Ruim", "Boa", "Ótima"]} 
                    />

                    <div className={styles.textarea_control}>

                        <label>Recomendação de segurança</label>
                        <textarea 
                            onChange={(e)=> setRecommendation(e.target.value)} 
                            name="recommendation" 
                            placeholder="Digite uma recomendação" 
                        />

                    </div>

                    <button disabled={!validadeForm()}  type="submit">
                        Cadastrar
                    </button>
                </form>

            </section>
        </Container>
    )
}