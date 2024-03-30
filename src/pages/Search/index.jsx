import { useState, useRef, useEffect } from "react"

import Container from "../../components/Container"
import Title from "../../components/Title"
import Card from "../../components/Card"

import ilustration from "../../assets/ilustration.svg"
import styles from "./styles.module.css"
import api from "../../utils/api"

export default function Search(){
    const [card, setCard] = useState(null)
    const [select, setSelect] = useState(0)
    const searchRef = useRef()

    function handleSearch(){
        api.get(`/neighborhoods/${ !select ?  "cep/" + searchRef.current.value : "crimerate/cep/" + searchRef.current.value}`)
        .then((res) => {
            searchRef.current.value = ""
            setCard(res.data.neighborhood)
        })
        .catch(()=> {
            alert("Houve um erro inesperado, por favor, tente novamente")
        })
    }

    return(
        <section>
        <Container>
            <section>
                <Title title="Procurando um bairro" />
                <div className={styles.search_area}>
                    <div>
                        <input type="number" ref={searchRef} name="search" placeholder="Digite aqui o cep"  />
                        <button onClick={handleSearch}>Buscar</button>
                    </div>
                    <select onChange={(e) =>setSelect(e.target.value)}>
                        <option value={0} >Tudo</option>
                        <option value={1}>Taxa de criminalidade</option>
                    </select>
                </div>
                <div className={styles.card_area}>
                    {card ? (
                        <Card key={card.id} id={card.id} name={card.name} crimeRate={card.crimeRate} publicLight={card.publicLight} recomendation={card.recommendation} cep={card.cep} isSearch={select}  />
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