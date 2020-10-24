import React from 'react'

 function Faq() {

    const faqArray = [
        {
            title: 'Jakie efekty daję używanie naszej aplikacji?', 
            answear: 'Podtrzymuje motywacje i daję energię do działania'
        },
        {
            title: 'Jakich technologii użyliśmy do stworzenia naszej aplikacji?', 
            answear: `Do stworzenia backendu użyliśmy języka programowania Java wraz z Spring Frameworkiem oraz bazy danych Postresql. 
                    Natomiast do napisania klienta wybraliśmy Javasript wraz z Frameworkiem React.`
        },
        {
            title: "Ile czasu zajęło nam stworzenie aplikacji?",
            answear: "Od napisania pierwszej linijki i ostatniej kodu zajęło nam około 30dni."
        },
        {
            title: "Ile osób pracowało przy aplikacji?",
            answear: "Łącznie pracowało 4 osoby."
        },
        {
            title: "W jakiego powodu stworzyliśmy aplikację?", 
            answear: "Stworzyliśmy aplikacji, aby pomóc innym w realizaji ich marzeń i celów."
        }
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