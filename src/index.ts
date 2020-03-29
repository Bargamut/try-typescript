// Intersection Type
// ----------------------

type A = { a: string } & { b: string };

let a: A = { a: `123`, b: `123` };

// Optional items
type B = { a: string } & { b?: string };

let b: B = { a: `123`, b: `123` };
// b = { a: `123` };

if (`b` in b) {
	console.log(`Hello TypeScript!`);
}