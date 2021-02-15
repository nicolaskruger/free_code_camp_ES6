// Only change code below this line
class Thermostat{
    /**
     * 
     * @param {number} temperature 
     */
    constructor(temperature){
        this._temperature = temperature
    }
    get temperature (){
        return 5/9 * (this._temperature - 32)
    }
    set temperature(C){
        this._temperature =   C * 9.0 / 5 + 32;
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius