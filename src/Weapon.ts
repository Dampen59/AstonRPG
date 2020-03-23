export class Weapon {

    private _minWeaponDamages :Number;
    private _maxWeaponDamages :Number;
    private _criticalHitChances : Number;

    /**
     * Getter minWeaponDamages
     * @return {Number}
     */
	public get minWeaponDamages(): Number {
		return this._minWeaponDamages;
	}

    /**
     * Getter maxWeaponDamages
     * @return {Number}
     */
	public get maxWeaponDamages(): Number {
		return this._maxWeaponDamages;
	}

    /**
     * Getter criticalHitChances
     * @return {Number}
     */
	public get criticalHitChances(): Number {
		return this._criticalHitChances;
	}

    /**
     * Setter minWeaponDamages
     * @param {Number} value
     */
	public set minWeaponDamages(value: Number) {
		this._minWeaponDamages = value;
	}

    /**
     * Setter maxWeaponDamages
     * @param {Number} value
     */
	public set maxWeaponDamages(value: Number) {
		this._maxWeaponDamages = value;
	}

    /**
     * Setter criticalHitChances
     * @param {Number} value
     */
	public set criticalHitChances(value: Number) {
		this._criticalHitChances = value;
	}


    constructor() {
        this._minWeaponDamages = Math.floor(Math.random() * 10) + 1;
        this._maxWeaponDamages = Math.floor(Math.random() * 10) + 15;
        this._criticalHitChances = Math.floor(Math.random() * 30) + 1;
    }


}