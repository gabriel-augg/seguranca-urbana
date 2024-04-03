import { useState} from "react"

import Container from "../../components/Container"
import Title from "../../components/Title"
import Card from "../../components/Card"
import Input from "../../components/Input"
import Select from "../../components/Select"

import ilustration from "../../assets/ilustration.svg"
import styles from "./styles.module.css"
import api from "../../utils/api"

export default function Search(){
    const [card, setCard] = useState(null)
    const [select, setSelect] = useState("Tudo")
    const [cep, setCep] = useState("")

    function handleSearch(){

        api.get(`/neighborhoods/${ select === "Tudo" ?  "cep/" + cep : "crimerate/cep/" + cep}`)
        .then((res) => {
            setCep("")
            setCard(res.data.neighborhood)
        })
        .catch((error)=> {
            if(error.response.data.message.includes("not-found")){
                alert("Não conseguimos localizar este bairro, por favor, digite o cep novamente")
                return
            }

            alert("Houve um erro inesperado, por favor, tente novamente")
        })
    }

    function handleCep(e){
        const formattedCep = e.target.value.replace("-", "").replace("_", "")
        setCep(formattedCep)
    }

    return(
        <section>
        <Container>
            <section>
                <Title title="Procurando um bairro" />
                <div className={styles.search_area}>
                    <div>
                        <Input 
                            name="cep" 
                            value={cep}
                            change={handleCep} 
                            placeholder="CEP" 
                            isCep={true} 
                        />
                        <div>
                            <button disabled={(cep.length < 8)} onClick={handleSearch}>
                                Buscar
                            </button>
                        </div>
                    </div>
                    <Select 
                        title="Taxa de criminalidade" 
                        value={select} 
                        change={(e) => setSelect(e.target.value)} 
                        name="select" 
                        options={["Tudo", "Taxa de criminalidade"]}
                        isSearch={true}
                    />


                </div>
                <div className={styles.card_area}>
                    {card ? (
                        <Card 
                            key={card.id} 
                            id={card.id} 
                            name={card.name} 
                            crimeRate={card.crimeRate} 
                            publicLight={card.publicLight} 
                            recomendation={card.recommendation} 
                            cep={card.cep} 
                            isSearch={select}
                         />
                    ) : (
                        <div className={styles.no_card}>
                            <h1>Não há nenhum card no momento.</h1>
                            <img src={ilustration} alt="ilustracao" />
                        </div>
                    )}
                    
                </div>
            </section>
        </Container>
        </section>
    )
}