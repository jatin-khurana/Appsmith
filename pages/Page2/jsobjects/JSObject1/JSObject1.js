export default {
	myFun1: () => {
		const field = {};
		var jsonString = '{"Name": "John", "age": 30, "city": "New York"}';
		var jsonObject = JSON.parse(jsonString);
		for (var key in jsonObject) {
			console.log(jsonObject)
			field[key] = '';
		}
		return field;
	}
}