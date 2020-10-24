import React from 'react'

 function Faq() {

    const faqArray = [
        {
            title: 'Jaki cel ma nasza aplikacja?', 
            answear: 'HABITER powstał w celu kontrolowania swoich codziennych aktywności i przywiązywania wagi do małych rzeczy, które możemy wykonać w ciągu dnia.'
        },

        {
            title: "Jak zdobyć większy poziom?",
            answear: "Poziom wzrasta wraz z ilością wykonanych zadań."
        },
        {
            title: "Dlaczego nie mogę przejść do zadań?",
            answear: "Aby przejść do zadań należy się zalogować i nacisnąć na obrazek symbolizujący kategorie."
        },
        {
            title: "", 
            answear: ""
        },
        {
            title: 'Jakich technologii użyliśmy do stworzenia naszej aplikacji?', 
            answear: `Do stworzenia backendu użyliśmy języka programowania Java wraz z Spring Frameworkiem oraz bazy danych PostgreSQL. 
                    Natomiast do napisania klienta wybraliśmy Javasript wraz z Frameworkiem React.`
        },

        
    ]

    return (
        <div className="napis-faq">
            <h1>FAQ</h1>
            {faqArray.map(item => (
              <FaqItem title={item.title} answear={item.answear} />
            ))}
        </div>
    )
}

const FaqItem = ({title, answear}) => (
    <div className="faq">
        <h1 className="faq-pytanie">{title}</h1>
        <p className="faq-odp">{answear}</p>
    </div>
)

export default Faq;