// TypeScript 的 interface 接口
// interface 是对象的模板，可以看作是一种类型约定，中文译为“接口”。使用了某个模板的对象，就拥有了指定的类型结构

interface Person {
  one:string,
  two:string,
  three:number
}

const first:Person = {
  one: '123',
  two: '123',
  three: 123,
}

// 如果属性是可选的，就在属性名后面加一个问号。
interface Foo {
  x?: string;
}
// 如果属性是只读的，需要加上readonly修饰符。
interface A {
  readonly a: string;
}

// （3）对象的方法
// 对象的方法共有三种写法。

// 写法一
interface A {
  f(x: boolean): string;
}

// 写法二
interface B {
  f: (x: boolean) => string;
}

// 写法三
interface C {
  f: { (x: boolean): string };
}

// interface 继承 interface
// interface 可以使用extends关键字，继承其他 interface。
interface Shape {
  name: string;
}

interface Circle extends Shape {
  radius: number;
}


// interface 允许多重继承。
interface Style {
  color: string;
}

interface Shape {
  name: string;
}

interface Circle2 extends Style, Shape {
  radius: number;
}

//接口合并
// 多个同名接口会合并成一个接口。

interface Box {
  height: number;
  width: number;
}

interface Box {
  length: number;
}

let arrr = 0.1 + 0.2
console.log(1,arrr);


// interface 与 type 的区别有下面几点。

// （1）type能够表示非对象类型，而interface只能表示对象类型（包括数组、函数等）。

// （2）interface可以继承其他类型，type不支持继承。