function loadView(id, aTag){
	console.log(id);
	newContent = "";

	if (aTag.nextElementSibling.innerHTML != ""){ // Clear view
		newContent = "";
		aTag.nextElementSibling.removeAttribute('style');
	}else{ // Set view
		switch (id){
			case 1:
				newContent = '<iframe src="./COVID-19 - v1.html"></iframe>';
				aTag.nextElementSibling.style.paddingBottom = "56.25%";
				break;			
			//case 3:
			default:
				newContent = '<iframe src="./COVID-19.html"></iframe>';
				aTag.nextElementSibling.style.paddingBottom = "56.25%";
				break;
		}
	}

	aTag.nextElementSibling.innerHTML = newContent;

}