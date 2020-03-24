import { GoodGuy } from 'GoodGuy';
import { BadGuy } from 'BadGuy';
import { Weapon } from './Weapon';

class Game {

    private _goodGuys :GoodGuy[];
    private _badGuys :BadGuy[];
    private _badGuysPerGoodGuys :Number;


    /**
     * Getter badGuysPerGoodGuys
     * @return {Number}
     */
	public get badGuysPerGoodGuys(): Number {
		return this._badGuysPerGoodGuys;
	}

    /**
     * Setter badGuysPerGoodGuys
     * @param {Number} value
     */
	public set badGuysPerGoodGuys(value: Number) {
		this._badGuysPerGoodGuys = value;
	}

    /**
     * Getter goodGuys
     * @return {GoodGuy[]}
     */
	public get goodGuys(): GoodGuy[] {
		return this._goodGuys;
	}

    /**
     * Getter badGuys
     * @return {BadGuy[]}
     */
	public get badGuys(): BadGuy[] {
		return this._badGuys;
	}

    /**
     * Setter goodGuys
     * @param {GoodGuy[]} value
     */
	public set goodGuys(value: GoodGuy[]) {
		this._goodGuys = value;
	}

    /**
     * Setter badGuys
     * @param {BadGuy[]} value
     */
	public set badGuys(value: BadGuy[]) {
		this._badGuys = value;
	}

    constructor(prmGoodGuys :GoodGuy[], prmBadGuysPerGoodGuys = 1) {
        this._goodGuys = prmGoodGuys;
        this._badGuys = new Array<BadGuy>();
        this._badGuysPerGoodGuys = prmBadGuysPerGoodGuys;
        
        for (let i = 0; i < (this._goodGuys.length * <number>this._badGuysPerGoodGuys); i++) {
            this._badGuys.push(new BadGuy(this.randomName(), 10, 10, 10, new Weapon()))
        }

    }

    randomName = () => { 
        return Math.random().toString(36).substring(7);
    };

}