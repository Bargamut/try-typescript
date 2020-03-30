// Arrays
let a = [ 1, 2, 3 ];
let A: number[] = [ 1, 2, 3 ];
let AA: Array<number> = [ 1, 2, 3 ];

let b: (number | string)[] = [ 1, 2, `3` ];
let B: Array<number | string> = [ 1, 2, `3` ];

// Corteges
let c: [number, string] = [ 1, `2` ];
let d: [number, string?] = [ 1, `2` ];
d = [ 1 ];

// Enums
enum E {
	A,
	B
};

console.log(E.A, E.B, E[0], E[1]);
console.log(E[E.A], E[E.B]);

enum EE {
	A = 5,
	B
};

console.log(EE.A, EE.B, EE[EE.A], EE[EE.B]);

enum EEE {
	A = `Hello`,
	B = `TypeScript`
};

console.log(EEE.A, EEE.B);


const enum F {
	A,
	B
};

console.log(F.A, F.B);
