var number = function (busStops) {
	if (busStops.length < 2) return busStops;
	let on = busStops[0][0];
	let off = busStops[0][1];
	let remainder = on - off;

	return remainder + number(busStops.splice(0, 1));
};

let result = number([
	[10, 0],
	[3, 5],
	[5, 8],
]);
console.log(result);

// 10 + number(busStops.splice(0, 1)) [[3, 5], [5, 8],]
// 10 + number(busStops.splice(0, 1)) [[3, 5], [5, 8],]
