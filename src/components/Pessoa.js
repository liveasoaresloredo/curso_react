function Pessoa({nome, idade, profissao, foto}){
    return(
        <div>
            <img src={foto} alt={nome}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
            {/* <p>Profissão: {props.Profissao}</p> */}
        </div>
    )
}

export default Pessoa