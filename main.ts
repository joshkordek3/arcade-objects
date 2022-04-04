//% color=#FFA500 weight=0 icon="\uf247" block="Objects"
namespace objects {
    //% block="create object using values: $values keys: $keys"
    export function objectify(values: [any], keys: [string]) {
        let obj: any = {};
        for (let i = 0; i < keys.length; i++) {
            obj[keys[i]] = values[i];
        }
        return obj;
    }
    //% block="get property $property of $obj"
    export function getProperty(obj: any, property: string) {
        return obj[property];
    }
    //% block="set property $property of $obj to $value"
    export function setProperty(obj: any, property: string, value: any) {
        obj[property] = value;
    }
}