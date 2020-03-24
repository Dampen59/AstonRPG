import * as readline from 'readline';

import { GoodGuy } from './GoodGuy';
import { BadGuy } from './BadGuy';
import { Weapon } from './Weapon';

export class Game {

    private _goodGuys :GoodGuy[];
    private _badGuys :BadGuy[];
    private _badGuysPerGoodGuys :Number;
    private capitalize = require('capitalize');

    private readline = require('readline');
    private readlineInterface = this.readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })


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

    constructor(prmBadGuysPerGoodGuys = 1) {

        this._goodGuys = new Array<GoodGuy>();
        this._badGuys = new Array<BadGuy>();

        this.readlineInterface.question("Do you want to start a game ? [y/n]", (answer :String) => {
            switch (answer) {
                case "n":
                    console.log("Goodbye!");
                    process.exit();
                case "y":
                    this.readlineInterface.question("How much Good Guys do you want ?", (answerNbGoodGuys :Number) => {
                        if (!isNaN(<number>answerNbGoodGuys) && answerNbGoodGuys > 0) {
                            this.setupGame(answerNbGoodGuys);
                        } else {
                            console.log("Wrong values were provided! Goodbye!");
                            process.exit();
                        }
                    });
                    break;
            }
        });   
       
        this._badGuysPerGoodGuys = prmBadGuysPerGoodGuys;

    }

    setupGame = (prmNbGoodGuys :Number) => {

        for (let i = 0; i < prmNbGoodGuys; i++) {
        }

        this._badGuys = new Array<BadGuy>();
        for (let i = 0; i < (this._goodGuys.length * <number>this._badGuysPerGoodGuys); i++) {
            this._badGuys.push(new BadGuy(this.randomName(), 10, 10, 10, new Weapon()))
        }
    }

    randomName = () => { 
        return this.capitalize(Math.random().toString(36).substring(7));
    };

}