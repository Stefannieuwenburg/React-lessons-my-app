import React from 'react'
import ContactCard from './comp-props/ContactCard'

function App() {
    return (
        <div>
            <ContactCard 
            name=">mr.Whiskersenson"
            imgUrl="http://placekitten.com/200/300"
            phone="(212)-575-1234"
            Email="mr.whiskas@catnap.meow"
            />
            <ContactCard
            name=">mr.senson"
            imgUrl="http://placekitten.com/200/300"
            phone="(212)-585-1234"
            Email="mr.whiskas@catnap.meow" />
            <ContactCard 
            name=">mr. kersenson"
            imgUrl="http://placekitten.com/200/300"
            phone="(212)-585-1234"
            Email="mr.whiskas@catnap.meow"/>
            <ContactCard 
            name=">mr.hiskersenson"
            imgUrl="http://placekitten.com/200/300"
            phone="(212)-505-1234"
            Email="mr.whiskas@catnap.meow"/>
        </div>
    )
}

export default App
