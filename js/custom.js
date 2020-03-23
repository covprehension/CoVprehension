function loadView(id, aTag){
	console.log(id);
	newContent = "";

	if (aTag.nextElementSibling.innerHTML != ""){ // Clear view
		newContent = "";
		aTag.nextElementSibling.removeAttribute('style');
	}else{ // Set view
		switch (id){
			case 1:
				newContent = '<iframe src="../COVID-19-2103-BG-v1-exportWeb.html"></iframe>';
				aTag.nextElementSibling.style.paddingBottom = "56.25%";
				break;			
			case 2:
				newContent = '<iframe src="../COVID-19-2103-BG-v2-exportWeb.html"></iframe>';
				aTag.nextElementSibling.style.paddingBottom = "56.25%";
				break;			
			default:
				newContent = '<iframe src="../COVID-19.html"></iframe>';
				aTag.nextElementSibling.style.paddingBottom = "56.25%";
				break;
		}
	}

	aTag.nextElementSibling.innerHTML = newContent;


}

function single_loadView(id, aTag){
	console.log(id);
	newContent = "";

	if (aTag.nextElementSibling.innerHTML != ""){ // Clear view
		newContent = "";
		aTag.nextElementSibling.removeAttribute('style');
	}else{ // Set view
		switch (id){
			case 1:
				newContent = '<p>Commençons par simplifier le problème, de manière à n’en conserver que son moteur principal : d’un côté des gens qui vivent leur vie et, ce faisant, entrent en interaction physique les uns avec les autres et d’un autre côté un virus introduit par une personne (son hôte). A partir du moment où une personne infectée par le virus est contagieuse, elle pourra le transmettre à d’autres personnes saines avec qui elle entrera en contact. Nous venons de formuler ici les bases d’un modèle très simple, que l’on peut ensuite simuler.</p><a href="#" class="btn btn-primary" onclick="loadView(1, this); return false;">Simulation numéro 1</a><div class="iframeContainer"></div><p>Dans ce cas le plus simple, on voit que la vitesse de propagation du virus dans la population présente est directement liée au nombre de personnes infectées et que cette dynamique fonctionne comme une boule de neige une fois le nombre de personnes infectées suffisamment important : plus ce nombre augmentera au cours de l’épidémie et plus le nombre de personnes infectées à chaque nouveau pas de temps sera important. C’est la phase d’accélération de l’épidémie, celle que l’on qualifie de croissance exponentielle.</p><p>Une fois le nombre de personnes susceptibles d\'être infectées devient trop faible, la propagation du virus ralenti rapidement et l’épidémie fini par s’éteindre d’elle-même.</p><p>Naturellement, cette vitesse de propagation va dépendre des caractéristiques du virus, mais aussi de la fréquence des contacts entre les gens. Si on reproduit la même simulation avec dix fois plus de monde, on s’aperçoit immédiatement que la dynamique de l’épidémie est beaucoup plus rapide.</p><a href="#" class="btn btn-primary" onclick="loadView(2, this); return false;">Simulation numéro 2</a><div class="iframeContainer"></div><p>Au final, plus nous entrons en contact les uns avec les autres et plus nous favorisons la propagation du virus. C’est aussi simple que ça !</p>';

				break;			
			default:
				newContent = '<iframe src="../COVID-19.html"></iframe>';
				aTag.nextElementSibling.style.paddingBottom = "56.25%";
				break;
		}
	}

	aTag.nextElementSibling.innerHTML = newContent;


}