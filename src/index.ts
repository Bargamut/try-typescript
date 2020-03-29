let a: any = 1;
let b: number = a;

// Type conversion
let c: unknown = 1;
let d: number = <number>c;

// same as
let e: number = c as number;

// ----------------------

let f: any = `123`;
let g: number = (<string>f).length;

// Type union
let h: number | string = 123;
h = `123`;

type unionType = number | string;

let H: unionType = 123;
H = `123`;

// ----------------------

type J = 1 | 2 | 3 | `a` | `b` | `c`;

let j: J = 1;
j = 2;
j = 3;
j = `a`;
j = `b`;
j = `c`;

type K = { a: string } | { b: number };

let l: K = { a: `123` };
l = { b: 123 };
l = { a: `123`, b: 123 };