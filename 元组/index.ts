// 元组（tuple）是 TypeScript 特有的数据类型，JavaScript 没有单独区分这种类型。它表示成员类型可以自由设置的数组，即数组的各个成员的类型可以不同。
const s :[string,number,boolean] = ['1',2,true]
// TypeScript 的区分方法是，成员类型写在方括号里面的就是元组，写在外面的就是数组。
let a: [number] = [1];
// 使用元组时，必须明确给出类型声明（上例的[number]），不能省略，否则 TypeScript 会把一个值自动推断为数组。
// a 的类型为 (number | boolean)[]
let aa = [1, true];

// 元组成员的类型可以添加问号后缀（?），表示该成员是可选的。 注意，问号只能用于元组的尾部成员，也就是说，所有可选成员必须在必选成员之后
let a1: [number, number?] = [1];

type myTuple = [number, number, number?, string?];
// 上面示例中，元组myTuple的最后两个成员是可选的。也就是说，它的成员数量可能有两个、三个和四个。

let x: [string, string] = ["a", "b"];
// x[2] = "c"; // 报错

// 但是，使用扩展运算符（...），可以表示不限成员数量的元组。

type NamedNums = [string, ...number[]];

const a12: NamedNums = ["A", 1, 2];
const b12: NamedNums = ["B", 1, 2, 3];


