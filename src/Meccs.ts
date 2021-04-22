export default class Meccs {
    private _forduló: number;
    private _hazaigól: number;
    private _vendéggól: number;
    private _elsőfélidő: number;
    private _másodikfélidő: number;
    private _hazaicsapat: string;
    private _vendégcsapat: string;

    public get forduló(): number {
        return this._forduló;
    }

    public get hazaiGól(): number {
        return this._hazaigól;
    }

    public get vendégGól(): number {
        return this._vendéggól;
    }

    public get elsőFélidő(): number {
        return this._elsőfélidő;
    }

    public get másodikFélidő(): number {
        return this._másodikfélidő;
    }

    public get hazaiCsapat(): string {
        return this._hazaicsapat;
    }

    public get vendégCsapat(): string {
        return this._vendégcsapat;
    }

    constructor(sor: string) {
        const m: string[] = sor.trim().split(" ");
        this._forduló = parseInt(m[0]);
        this._hazaigól = parseInt(m[1]);
        this._vendéggól = parseInt(m[2]);
        this._elsőfélidő = parseInt(m[3]);
        this._másodikfélidő = parseInt(m[4]);
        this._hazaicsapat = m[5];
        this._vendégcsapat = m[6];
    }
}