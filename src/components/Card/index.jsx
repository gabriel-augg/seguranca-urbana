import styles from "./styles.module.css"

export default function Card({name, crimeRate, publicLight, recomendation, cep }){
    return(
        <div className={styles.card}>
            <div>
                <h1>Bairro</h1>
                <span>{name}</span>
            </div>
            <div>
                <h1>Taxa de criminalidade</h1>
                <span>{crimeRate}</span>
            </div>
            <div>
                <h1>Iluminação publica</h1>
                <span>{publicLight}</span>
            </div>
            <div>
                <h1>Recomendação</h1>
                <span>{recomendation}</span>
            </div>
            <div>
                <h1>CEP</h1>
                <span>{cep}</span>
            </div>
        </div>
    )
}