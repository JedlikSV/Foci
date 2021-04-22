import Meccs from "./Meccs";
import fs from "fs";
import { resolve } from "path";

export default class Megoldas {
    private _eredmények: Meccs[] = [];

    public get ForduloBeker() {
        let fordulo: number = parseInt(params.fodulo as string);
        if (isNaN(fordulo)) fordulo = 0;
        res.write(`Adja meg a forduló számát!: <input type='number' name='fordulo' value=${fordulo}'>\n`);
        return fordulo;

        for (const jatakos of this_eredmények) {
            if (jatakos._forduló == fordulo) {
               fordulo = jatakos._forduló

               res.write(`${jatakos._hazaicsapat}-${jatakos._vendégcsapat}: ${jatakos._hazaigól}-${jatakos._vendéggól} (${jatakos._elsőfélidő}-${jatakos._másodikfélidő})`);
            }
        }
    }

    public get EredmenyMegforditok(): Meccs{
        private forditok: Meccs[] = [];
        for (const j of this_eredmények) {
            if (j._hazaigól > j._vendéggól && j._elsőfélidő < j._másodikfélidő || j._hazaigól < j._vendéggól && j._elsőfélidő > j._másodikfélidő) {
               return j;
               this_forditok.push(j);
        }
        for (const i of this_forditok) {
           resolve.write(`${i._forduló}. forduló: ${this.forditok}`);
        }
    }

    public get CsapatNevBeker(): string {
        let valasztottCsapat: string;
        res.write(`A választott csapat: <input type='number' name='fordulo' value=${valasztottCsapat}'>\n`);
        return valasztottCsapat;

        let hazailott;
        let vendeglott;
        let hazaikapott;
        let vendegkapott;

        for (const v of this_eredmények) {
            if(valasztottCsapat == v._hazaicsapat){
                hazailott = v._hazaicsapat.SUM();
                hazaikapott = v._vendégcsapat.SUM();
            }
            if(valasztottCsapat == v._vendégcsapat){
                vendeglott = v._vendégcsapat.SUM();
                vendegkapott = v._hazaicsapat.SUM();
            }           
        }
        let lott = hazailott + vendeglott;
        let kapott = hazaikapott + vendegkapott;
        res.write(`Lőtt: ${lott} kapott: ${kapott}`);

    }
 

    public constructor(forrás: string) {
        const sorok: string[] = fs.readFileSync(forrás).toString().split("\n");
        for (let i = 2; i < sorok.length; i++) {
            if (sorok[i].length != 0) {
                this._eredmények.push(new Meccs(sorok[i]));
            }
        }
    }
}
