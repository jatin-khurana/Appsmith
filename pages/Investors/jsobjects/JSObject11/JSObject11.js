export default {
	myVar1: [],
	QuestionTextjson: {},

	myFun1 () {
		for (let i = 0; i < get_DFTOS.data.elements.length; i++) {
			for (let j = 0; j < get_DFTOS.data.elements[i].elements.length; j++) {
				var Questiontext  = get_DFTOS.data.elements[i].elements[j].customTypeDetails.discoveryFramework.questionText.toString(); 
				this.QuestionTextjson[Questiontext] = "";
				Questiontext = "";
			}
			console.log(this.QuestionTextjson);
			return this.QuestionTextjson;
		}
	}
}