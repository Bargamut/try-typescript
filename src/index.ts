let a : number;
let b : string;
let c : boolean;
let d : null;
let e : undefined;
let f : object;
let F = {};
let FF : { text: string };
let g : any;

a = 1;
b = `Hello`;
c = true;
d = null;
e = undefined;
f = new Object;
FF = { text: `123` };

console.table({
	'a : number': {type: typeof a, value: a},
	'b : string': {type: typeof b, value: b},
	'c : boolean': {type: typeof c, value: c},
	'd : null': {type: typeof d, value: d},
	'e : undefined': {type: typeof e, value: e},
	'f : object': {type: typeof f, value: f},
	'F = {}': {type: typeof F, value: F},
	'FF : { text : string}': {type: typeof FF, value: FF},
	'g : any': {type: typeof g, value: g},
});