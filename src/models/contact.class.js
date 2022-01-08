//import { LEVELS } from "./levels.enum";

export class Contact {
    name = '';
    surname = '';
    email = '';
    conected = true;
   // level = LEVELS.NORMAL;

    constructor(name, surname, email, conected) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.conected = conected;

    }
}