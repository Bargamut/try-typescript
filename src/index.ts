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