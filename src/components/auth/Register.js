import React from 'react'
import pilkarz from "../../assets/pilkarz.png"


 function Register() {
    return (
        <main> 
                <div className="App">
                    <div className="box">
                        <div className="obrazek">
                        <img id="cien" src={pilkarz} alt=""></img>
                        </div>
                        <h1 id="start">DOŁĄCZ DO NAS</h1>
                        <h2 id="konto">Posiadasz już konto?</h2>
                        <h2 id="zaloguj">Zaloguj się</h2>
                        <div className="res">
                            <input type="text" placeholder="Nazwa Użytkownika"/>
                            <input type="text" placeholder="Adres Email"/>
                            <i class="far fa-envelope"></i>
                            <input type="password" placeholder="Hasło"/>
                            <input type="password" placeholder="Potwierdź hasło"/>
                                <div className="checkbox">
                                    <input type="checkbox"  value="checkedall" />
                                    <h4> Wyrażam zgode na przetwarzanie moich danych osobowych.</h4>
                                </div>
                            <button type="submit">Stwórz konto</button>
                        </div>
                            
                    </div>
                </div>
            </main>
    )
}


export default Register;