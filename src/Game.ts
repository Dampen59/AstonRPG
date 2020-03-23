import { GoodGuy } from 'GoodGuy';
import { BadGuy } from 'BadGuy';

class Game {

    private _goodGuys :GoodGuy[];
    private _badGuys :BadGuy[];

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

    constructor(prmGoodGuys :GoodGuy[]) {
        this._goodGuys = prmGoodGuys;
        this._badGuys = new Array<BadGuy>();
        // Create badguys
    }

}