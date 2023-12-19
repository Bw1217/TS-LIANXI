let AFarr:string = '123'  //字符串类型
let isDone:boolean = true  //布尔类型
let ne1w:number = 123  //数字类型

//联合类型
let newlh:number|string = 123
newlh = '123'
// 联合类型可以与值类型相结合，表示一个变量的值有若干种可能
let newlh2:true | false
let newlh3:"male" | "female";
let rainbowColor: "赤" | "橙" | "黄" | "绿" | "青" | "蓝" | "紫" = '橙'

function newarqwe(id:number | string){
    if(typeof id === 'string'){
        console.log(id.toUpperCase());
    }else{
        console.log(id);
    }
}
newarqwe('666hellow')
// 上面示例中，函数体内部会判断一下变量id的类型，如果是字符串，就对其执行toUpperCase()方法。

// “类型缩小”是 TypeScript 处理联合类型的标准方法，凡是遇到可能为多种类型的场合，都需要先缩小类型，再进行处理。实际上，联合类型本身可以看成是一种“类型放大”（type widening），处理时就需要“类型缩小”（type narrowing）。


// 交叉类型​
// 交叉类型（intersection types）指的多个类型组成的一个新类型，使用符号&表示。
let obj: { foo: string } & { bar: string };
obj = {
  foo: "hello",
  bar: "world",
};
// 上面示例中，变量obj同时具有属性foo和属性bar。

type A = { foo: number };
type B = A & { bar: number };
// 上面示例中，类型B是一个交叉类型，用来在A的基础上增加了属性bar。




//类型别名
type s = string //定义
const lhleix:s = '123124'

//Object 和 object     //Object 也可以用 {} 代替 ，推荐用小写object
let newObj:Object = 123
let newObj2:Object = '123'
let newObj3:Object = [1,2,3]
let newObj4:Object = {a:1,b:2}
let newObj6:Object = (a:number)=>a+1
        //但是不能赋值undefined 和 null
        // let newObj5:Object = undefined
        // let newObj5:Object = null

let newobj:object = [1,2,3]
let newobj2:object = {a:1,b:2}
let newobj3:object = (a:number)=> a + 1
        //但是不能复制原始类型值，只包含对象数组函数
            // let newadfa:object = 123
            // let newadfa2:object = '123'
            // let newadfa3:object = true
            // let newadfa3:object = undefined
            // let newadfa3:object = null

// 值类型​
// TypeScript 规定，单个值也是一种类型，称为“值类型”。
const x = 'https' //x的类型为https
const y:string = '123'  //y的类型为string
// 变量x是const命令声明的，TypeScript 就会推断它的类型是值https，而不是string类型。
    //注意，const命令声明的变量，如果赋值为对象，并不会推断为值类型。
const foo = {fo1:1}  // foo 的类型是 { fo1: number }
// 上面示例中，变量foo没有被推断为值类型，而是推断属性fo1的类型是number。这是因为 JavaScript 里面，const变量赋值为对象时，属性值是可以改变的。


//定义数组 第一种方式
let newarr:number[] = [1,2,3]  //定义数组元素为数字类型
let newstr:string[] = ['str1','str2']   //定义数组元素为字符串类型
let newblo:boolean[] = [true,false]
let newnull:null[] = []
let newund:undefined[] = []

//定义数组 第二种方式
let list1:Array<number> = [1,2,3]
let list2:Array<string> = ['str1','str2']
let list3:Array<boolean> = [true,false]
let list4:Array<null> = []
let list5:Array<undefined> = []

//定义函数 以及参数
// void 表示没有返回值,通常可以不写，因为ts会自动推断
function newfun1(a:number,b:number):void{
     console.log(a+b);
}
newfun1(1,3)

const fun2 = (a:number,b:number):number=>{
   return a + b
}
fun2(10,20)


// type命令用来定义一个类型的别名
type age = number
let age:age = 55
// 上面示例中，type命令为number类型定义了一个别名Age。这样就能像使用number一样，使用Age作为类型。

// 别名不允许重名。
// type Color = "red";
// type Color = "blue"; // 报错

// 别名的作用域是块级作用域。这意味着，代码块内部定义的别名，影响不到外部。
type Color = "red";

if (Math.random() < 0.5) {
  type Color = "blue";
}

// typeof 运算符​
// JavaScript 语言中，typeof 运算符是一个一元运算符，返回一个字符串，代表操作数的类型。

typeof "foo"; // 'string'

const a = { x: 0 };

type T0 = typeof a; // { x: number }
type T1 = typeof a.x; // number
// 上面示例中，typeof a表示返回变量a的 TypeScript 类型（{ x: number }）。同理，typeof a.x返回的是属性x的类型（number）。

// 块级类型声明​
// TypeScript 支持块级类型声明，即类型可以声明在代码块（用大括号表示）里面，并且只在当前代码块有效。

if (true) {
  type T = number;
  let v: T = 5;
} else {
  type T = string;
  let v: T = "hello";
}
// 上面示例中，存在两个代码块，其中分别有一个类型T的声明。这两个声明都只在自己的代码块内部有效，在代码块外部无效。

// 类型的兼容​
// TypeScript 的类型存在兼容关系，某些类型可以兼容其他类型。

type T = number | string;

let aqqe: number = 1;
let bqqw: T = aqqe;
// 上面示例中，变量a和b的类型是不一样的，但是变量a赋值给变量b并不会报错。这时，我们就认为，b的类型兼容a的类型。



type fn = (a:number,b:number) => number

const fun3:fn = (a,b)=>{
    return a+b
}
let ac1 = fun3(10,20)
console.log(ac1);




