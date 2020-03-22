function loadView(id, aTag){
	console.log(id);
	newContent = "";

	if (aTag.nextElementSibling.innerHTML != ""){ // Clear view
		newContent = "";
		aTag.nextElementSibling.removeAttribute('style');
	}else{ // Set view
		switch (id){
			case 1:
				newContent = '<iframe src="./COVID-19-2103-BG-v1-exportWeb.html"></iframe>';
				aTag.nextElementSibling.style.paddingBottom = "56.25%";
				break;			
			case 2:
				newContent = '<iframe src="./COVID-19-2103-BG-v2-exportWeb.html"></iframe>';
				aTag.nextElementSibling.style.paddingBottom = "56.25%";
				break;			
			default:
				newContent = '<iframe src="./COVID-19.html"></iframe>';
				aTag.nextElementSibling.style.paddingBottom = "56.25%";
				break;
		}
	}

	aTag.nextElementSibling.innerHTML = newContent;

}