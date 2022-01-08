import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import { Contact } from '../../models/contact.class';

const ContactComponent = (contact ) => {


    // const [conected, setconected] = useState(false);

    // const changeState = () =>
    // {
    //     console.log(conected);
       
    //     setconected(conected => !conected);
    // }


    return ( 
        <div>

        <h2>
        nombre: { contact.name } 
        </h2>

        <h3>
        descripción: { contact.surname } 
        </h3>

        <h4>
        level: { contact.email } 
        </h4>

        <h5>
        this state is: {contact.conected ? 'conectado': 'disponible'} 
        </h5>
        {/* <div>
                <button onClick={changeState}>
                    cambiar estado conectado
                </button>
            </div> */}

        </div>
    );
}



ContactComponent.propTypes = {
    conected: PropTypes.bool,

}

export default ContactComponent;