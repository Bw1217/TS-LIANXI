// TypeScript 的数组类型​
// JavaScript 数组在 TypeScript 里面分成两种类型，分别是数组（array）和元组（tuple）。

// 数组的类型有两种写法。第一种写法是在数组成员的类型后面，加上一对方括号。

let arr: number[] = [1, 2, 3];
arr[3] = 4
arr.length = 2
console.log(arr);

// 上面示例中，数组arr的类型是number[]，其中number表示数组成员类型是number。

// 如果数组成员的类型比较复杂，可以写在圆括号里面。
let arr2: (number | string)[] = ['1',123]
let arr3: (number | string | boolean)[] = ['s',1,true]
console.log(arr2);

// 数组类型的第二种写法是使用 TypeScript 内置的 Array 接口。

let arrre: Array<number | string | true> = [1, 2, 3,'1',true];
let nn:number[] = []
// 数组类型声明了以后，成员数量是不限制的，任意数量的成员都可以，也可以是空数组。

// 数组的类型推断
// 如果数组变量没有声明类型，TypeScript 就会推断数组成员的类型。这时，推断行为会因为值的不同，而有所不同。
// 如果变量的初始值是空数组，那么 TypeScript 会推断数组类型是any[]。

// 推断为 any[]
 const amn:any[] = [];
amn.push(123); // 推断类型为 number[]
amn.push("abc"); // 推断类型为 (string|number)[]

// 但是，类型推断的自动更新只发生初始值为空数组的情况。如果初始值不是空数组，类型推断就不会更新。

// 推断类型为 number[]
const abv = [123];

// abv.push("abc"); // 报错
// 上面示例中，数组变量arr的初始值是[123]，TypeScript 就推断成员类型为number。新成员如果不是这个类型，TypeScript 就会报错，而不会更新类型推断。


// 只读数组，const 断言​
// JavaScript 规定，const命令声明的数组变量是可以改变成员的。

const arr21: number[] = [0, 1];
arr21[0] = 2;
console.log(arr21);
// 上面示例中，修改const命令声明的数组的成员是允许的。

const arr212: readonly number[] = [0, 1];
// arr212[0] = 2;
console.log(arr212);
// TypeScript 允许声明只读数组，方法是在数组类型前面加上readonly关键字。

function getSum(n:number[]){

}
let aml: readonly number[] = [1]
// getSum(aml)  //函数传入只读数组会报错，只读数组是数组的父类型，夫类型不能代替子类型 ， 解决方法是使用类型断言getSum(arr as number[])

// TypeScript 提供了两个专门的泛型，用来生成只读数组的类型。
const a1:ReadonlyArray<number> = [1,2,3]
const a2:Readonly<number[]> = [1,2,3]

// 只读数组还有一种声明方法，就是使用“const 断言”。

const arr222 = [0, 1] as const;

// arr[0] = [2]; // 报错
// 上面示例中，as const告诉 TypeScript，推断类型时要把变量arr推断为只读数组，从而使得数组成员无法改变。

// 多维数组
// TypeScript 使用T[][]的形式，表示二维数组，T是最底层数组成员的类型。
var mult: number[][] = [
  [1,23],[12,3]
]
// 上面示例中，变量multi的类型是number[][]，表示它是一个二维数组，最底层的数组成员类型是number。

