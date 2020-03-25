$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function loadView(id, aTag){
	console.log(id);
	newContent = "";

	if (aTag.nextElementSibling.innerHTML != ""){ // Clear view
		newContent = "";
		aTag.nextElementSibling.removeAttribute('class');
		aTag.nextElementSibling.classList.add("iframeContainer");
	}else{ // Set view
		switch (id){
			case 1:
				newContent = '<iframe class="embed-responsive-item" src="../../../simulations/COVID-19-2103-BG-v1-exportWeb.html"></iframe>';
				break;			
			case 2:
				newContent = '<iframe class="embed-responsive-item" src="../../../simulations/COVID-19-2103-BG-v2-exportWeb.html"></iframe>';
				break;			
			default:
				newContent = '<iframe class="embed-responsive-item" src="../../../simulations/COVID-19.html"></iframe>';
				break;
		}
		aTag.nextElementSibling.removeAttribute('class');
		aTag.nextElementSibling.classList.add("embed-responsive");
		aTag.nextElementSibling.classList.add("embed-responsive-4by3");
	}

	aTag.nextElementSibling.innerHTML = newContent;
}