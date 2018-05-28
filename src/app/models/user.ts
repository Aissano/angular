export class User {
    public id: number;
    public nom: string;
    public prenom: string;
    public password: string;
    public civilite: number;
    public email: string;
    public cgu: boolean;
    public constructor(values: Object = {}){
        Object.assign(this, values);

    }
}
