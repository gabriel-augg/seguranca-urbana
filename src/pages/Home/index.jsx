import { useState, useEffect } from "react"

import api from "../../utils/api"

import Title from "../../components/Title"
import Card from "../../components/Card"

import styles from "./styles.module.css"

export default function Home(){
    const [cards, setCards] = useState([])

    useEffect(()=> {
        api.get("/neighborhoods").then((res) => {
            setCards(res.data.neighborhoods)
            console.log(res.data.neighborhoods)
        })
    },[])

    return(
        <section className={styles.home_container}>
            <Title title="Todos os bairros" />
            <div className={styles.card_container}>
                { cards.length !== 0 && (
                    cards.map((card) => {
                        return(
                            <Card 
                                key={card.id} 
                                id={card.id} 
                                name={card.name} 
                                crimeRate={card.crimeRate} 
                                publicLight={card.publicLight} 
                                recomendation={card.recommendation} 
                                cep={card.cep} 
                                isSearch="Tudo" 
                            />
                        )
                    })
                )}
                                
            </div>
        </section>
    )
}