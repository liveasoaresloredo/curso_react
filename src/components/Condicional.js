// import { useState } from "react"

function Condicional(){

    function enviarEmail(e){
        e.preventDefault()
        console.log('Testando')
    }

    <div>
        <h2>Cadastre o seu e-mail:</h2>
        <form>
            <input type="email" placeholder="Digite seu e-mail"/>
        <button type="submit" onClick={enviarEmail}>Enviar email</button>
        </form>
    </div>
}

export default Condicional