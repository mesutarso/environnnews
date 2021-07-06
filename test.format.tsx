const array = ['bonjour', 'au revoir', 22, 3232.3, 32];
const direBonjour = (element) => element;
for (let i = 0; i < array.length; i += 1) {
	const element = array[i];
	console.log(direBonjour(element));
}
export {};
