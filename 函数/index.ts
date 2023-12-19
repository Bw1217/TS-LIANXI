// 上面示例中，函数hello()在声明时，需要给出参数txt的类型（string），以及返回值的类型（void），后者写在参数列表的圆括号后面。void类型表示没有返回值，详见后文。

// 如果不指定参数类型（比如上例不写txt的类型），TypeScript 就会推断参数类型，如果缺乏足够信息，就会推断该参数的类型为any。
// 返回值的类型通常可以不写，因为 TypeScript 自己会推断出来。
function hello(txt:string){
  console.log("hello"+txt);
}

// 如果函数的类型定义很冗长，或者多个函数使用同一种类型，写法二用起来就很麻烦。因此，往往用type命令为函数类型定义一个别名，便于指定给其他变量。
type MyFunc = (txt: string) => void;

const hello2: MyFunc = function (txt) {
  console.log("hello " + txt);
};

// 箭头函数是普通函数的一种简化写法，它的类型写法与普通函数类似。
const repeat = (str: string, times: number): string => str.repeat(times);
// 上面示例中，变量repeat被赋值为一个箭头函数，类型声明写在箭头函数的定义里面。其中，参数的类型写在参数名后面，返回值类型写在参数列表的圆括号后面。

function greet(fn: (a: string) => void): void {
  fn("world");
}
//上面示例中，函数greet()的参数fn是一个函数，类型就用箭头函数表示。这时，fn的返回值类型要写在箭头右侧，而不是写在参数列表的圆括号后面。

// 可选参数​
// 如果函数的某个参数可以省略，则在参数名后面加问号表示
function neabc(a:string,b?:number) {
}

//参数默认值​
// TypeScript 函数的参数默认值写法，与 JavaScript 一致。
// 设置了默认值的参数，就是可选的。如果不传入该参数，它就会等于默认值。
function aop(a:string,b:number = 10):[string,number]{
  return [a,b]
}

// 参数结构可以结合类型别名（type 命令）一起使用，代码会看起来简洁一些。
type ABC = { a: number; b: number; c: number };

function sum({ a, b, c }: ABC) {
  console.log(a + b + c);
}

// rest 参数表示函数剩余的所有参数，它可以是数组（剩余参数类型相同），也可能是元组（剩余参数类型不同）。
// rest 参数为数组
function joinNumbers(...nums: number[]) {
  // ...
}
// rest 参数为元组
function f(...args: [boolean, number]) {
  // ...
}

// 函数重载​
// 有些函数可以接受不同类型或不同个数的参数，并且根据参数的不同，会有不同的函数行为。这种根据参数类型不同，执行不同逻辑的行为，称为函数重载（function overload）。
function reverse(str: string): string;
function reverse(arr: any[]): any[];
function reverse(stringOrArray: string | any[]): string | any[] {
  if (typeof stringOrArray === "string")
    return stringOrArray.split("").reverse().join("");
  else return stringOrArray.slice().reverse();
}