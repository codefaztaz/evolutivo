import React, {useState} from 'react'

import { Contact } from '../../models/contact.class'
//import { LEVELS } from '../../models/levels.enum'
import ContactComponent from '../pure/contact'

const ContactListComponent = () => {

    const defaultContact = new Contact('pepe', 'perez','perez@perez.com',
    true);

    const [conected, setconected] = useState(true);

    const changeState = () =>
    {
        console.log(conected);
       
        setconected(conected => !conected);
    }




    return (
        <div>

            <div>
                your Contacts: 
            </div>
            <ContactComponent contact={defaultContact}></ContactComponent>
            <div>
                <button onClick={changeState}>
                    cambiar estado conectado
                </button>
            </div>
          
        </div>
    )
}



export default ContactListComponent;
