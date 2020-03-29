function a (x: number, y: number): number {
	return x + y;
}
const b = (x: number, y: number): number => x + y;

/**
 * Function Signature
 */
let c: (x: number, y: number) => number;

c = b;

/**
 * Finction without return
 * 
 * @param {number} x
 * @param {number} y
 */
let d = (x: number, y: number): void => {
	console.log(x + y);
};

/**
 * Never ending function witout endpoint
 * 
 * @param {string} x
 */
let e = (x: string): never => {
	throw new Error(x);
};

/**
 * Reload functions
 */


let f = (x: any, y: any): any => {
	if (typeof x === 'number') {
		return x + y;
	} else if (typeof x === 'string') {
		return `${x} ${y}`;
	}
};

console.log(f(1, 2));
console.log(f(`Ответ`, 3));

function F (x: number, y: number): number;
function F (x: string, y: number): string;
function F (x: any, y: any): any {
	if (typeof x === 'number') {
		return x + y;
	} else if (typeof x === 'string') {
		return `${x} ${y}`;
	}
};

console.log(F(1, 2));
console.log(F(`Ответ`, 3));