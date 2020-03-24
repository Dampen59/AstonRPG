import { Weapon } from './Weapon';

export class Character {

    private _name :String;
    private _lifePoints :Number;
    private _maxLifePoints :Number;
    private _defensePoints :Number;
    private _weapon :Weapon;

    /**
     * Getter name
     * @return {String}
     */
	public get name(): String {
		return this._name;
	}

    /**
     * Getter lifePoints
     * @return {Number}
     */
	public get lifePoints(): Number {
		return this._lifePoints;
	}

    /**
     * Getter maxLifePoints
     * @return {Number}
     */
	public get maxLifePoints(): Number {
		return this._maxLifePoints;
	}

    /**
     * Getter defensePoints
     * @return {Number}
     */
	public get defensePoints(): Number {
		return this._defensePoints;
	}

    /**
     * Setter name
     * @param {String} value
     */
	public set name(value: String) {
		this._name = value;
	}

    /**
     * Setter lifePoints
     * @param {Number} value
     */
	public set lifePoints(value: Number) {
		this._lifePoints = value;
	}

    /**
     * Setter maxLifePoints
     * @param {Number} value
     */
	public set maxLifePoints(value: Number) {
		this._maxLifePoints = value;
	}

    /**
     * Setter defensePoints
     * @param {Number} value
     */
	public set defensePoints(value: Number) {
		this._defensePoints = value;
    }

    /**
     * Getter weapon
     * @return {Weapon}
     */
	public get weapon(): Weapon {
		return this._weapon;
	}

    /**
     * Setter weapon
     * @param {Weapon} value
     */
	public set weapon(value: Weapon) {
		this._weapon = value;
	}

    constructor(prmName :String, prmLifePoints :Number, prmMaxLifePoints :Number, prmDefensePoints :Number, prmWeapon :Weapon) {
        this._name = prmName;
        this._lifePoints = prmLifePoints;
        this._maxLifePoints = prmMaxLifePoints;
        this._defensePoints = prmDefensePoints;
        this._weapon = prmWeapon;
    }



}