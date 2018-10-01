declare const lodashModuleExports: any;
const _ = lodashModuleExports();
const lodash = _;
const Lodash = _;

export { _, lodash, Lodash };

export function sheetbase_lodash_example1(): void {
    const chunk = _.chunk(['a', 'b', 'c', 'd'], 2);
    // => [['a', 'b'], ['c', 'd']]
    Logger.log(chunk);
}

export function sheetbase_lodash_example2(): void {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    const value: number = _.get(object, 'a[0].b.c');
    // => 3
    Logger.log(value);
}

export function sheetbase_lodash_example3(): void {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    _.set(object, 'a[0].b.c', 4);
    _.set(object, 'a[0].b.d', 'Hello');
    // { 'a': [{ 'b': { 'c': 4, 'd': 'Hello' } }] }
    Logger.log(object);
}
