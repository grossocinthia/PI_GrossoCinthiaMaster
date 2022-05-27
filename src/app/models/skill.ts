export class Skill {

    id?: number;
    
    nombreSkill: string;
    percent: string;
 
    
    constructor(nombreSkill: string, percent: string){
        
        this.nombreSkill = nombreSkill;
        this.percent = percent;
     
    }
}