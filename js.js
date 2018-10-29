var firstNum = 2;
var secondNum = 2;
var thirdNum = 3;

var firstString = "You";
var secondString = "You";
var thirdString = "Me";

var firstArr = [2,3,4,5];
var secondArr = [2,3,4,5];
var thirdArr = [4,3,5,1];



var firstObject = {
	name: "Dog",
	age: 3,
	happy: true
}
var secondObject = {
	name: "Dog",
	age: 3,
	happy: true
}
var thirdObject= {
	name: "Cat",
	age: 9,
	happy: true
}


function deepEqual(value1, value2){
	switch(typeof (value1)){
		case "number":
			if (value1 !== value2) {
			console.log("Number. Not equal");
			break;
			}
			console.log("Number. Equal");
		break;
		case "string":
			if (value1 !== value2) {
			console.log("String. Not equal");
			break;
			}
			console.log("String. Equal");
		break;
		default:
			var result1  =[];
			var result2 = [];
			for (var key1 in value1){
				result1.push(key1 + value1[key1]);
			}
			for (var key2 in value2){
				result2.push(key2 + value2[key2]);
			}
			for (var i = 0; i <result1.length; i++) {
				if(result1[i] !== result2[i]){
					console.log("Object. Maybe array. Not equal");
					var getOut = 1;
					break;// вихід з умови if
				}
			}
			if(getOut){
					break;//вихід з циклу for
				}
			console.log("Object. Maybe array. Equal");
		break;
	}
}
deepEqual(firstNum, secondNum);
deepEqual(firstNum, thirdNum);

deepEqual(firstString, secondString);
deepEqual(firstString, thirdString);

deepEqual(firstObject, secondObject);
deepEqual(firstObject, thirdObject);

	










