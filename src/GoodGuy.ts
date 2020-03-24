import { Character } from './Character';
import { Weapon } from './Weapon';

enum GoodGuyRole {
    ROLE_CLASSIC = 0,
    ROLE_HEALER = 1,
    ROLE_TANK = 2,
    ROLE_ASSASIN = 3
}

export class GoodGuy extends Character {

    private _role :GoodGuyRole;

    /**
     * Getter role
     * @return {GoodGuyRole}
     */
	public get role(): GoodGuyRole {
		return this._role;
	}

    /**
     * Setter role
     * @param {GoodGuyRole} value
     */
	public set role(value: GoodGuyRole) {
		this._role = value;
    }
    
    constructor(prmName :String, prmLifePoints :Number, prmMaxLifePoints :Number, prmDefensePoints :Number, prmWeapon :Weapon, prmRole :GoodGuyRole) {
        super(prmName, prmLifePoints, prmMaxLifePoints, prmDefensePoints, prmWeapon);
        this._role = prmRole;
    }


}