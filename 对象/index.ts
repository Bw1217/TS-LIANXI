// 除了原始类型，对象是 JavaScript 最基本的数据结构。TypeScript 对于对象类型有很多规则。
// 对象类型的最简单声明方法，就是使用大括号表示对象，在大括号内部声明每个属性和方法的类型。

const obj: { x: number, y: number } = { x: 1, y: 1 }
console.log(obj);

// 一旦声明了类型，对象赋值时，就不能缺少指定的属性，也不能有多余的属性。
type myobj = {
  x: number,
  y: number
}
const o1: myobj = { x: 1, y: 1 }

// 对象的方法使用函数类型描述
const obj1: {
  x: number;
  y: number;
  add(x: number, y: number): number;
  // 或者写成
  // add: (x:number, y:number) => number;
} = {
  x: 1,
  y: 1,
  add(x, y) {
    return x + y;
  },
};

// 除了type命令可以为对象类型声明一个别名，TypeScript 还提供了interface命令，可以把对象类型提炼为一个接口。
// 写法一
type MyObj2 = {
  x: number;
  y: number;
};
const obj2: MyObj2 = { x: 1, y: 1 };
// 写法二
interface MyObj {
  x: number;
  y: number;
}

const obj3: MyObj = { x: 1, y: 1 };

// 可选属性
// 如果某个属性是可选的（即可以忽略），需要在属性名后面加一个问号。
const obj4: { x: string, y?: number } = { x: '123' }
// 可选属性等同于允许赋值为undefined，下面两种写法是等效的。
type User1 = {
  firstName: string;
  lastName?: string;
};

// 等同于
type User2 = {
  firstName: string;
  lastName: string | undefined;
};

// 只读属性​
// 属性名前面加上readonly关键字，表示这个属性是只读属性，不能修改。
interface MyInterface {
  readonly prop: number;
}

//对象的结构赋值
const product2  = {id:'123',arr:'456',price:1}
const {id,arr,price}: {id: string;arr: string; price: number;} = product2;

// 空对象​
// 空对象是 TypeScript 的一种特殊值，也是一种特殊类型。
const pt0 = {};
const pt1 = { x: 3 };
const pt2 = { y: 4 };

const pt = {
  ...pt0,
  ...pt1,
  ...pt2,
};
console.log(pt);
