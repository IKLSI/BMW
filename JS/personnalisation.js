// Script js permettant de changer le lien de l'image de la voiture selon la couleur et les jantes sélectionnées dans le
// configurateur grâce au valeur définie dans l'index

document.addEventListener("DOMContentLoaded", function () {
	const couleurSelect = document.getElementById("couleur");
	const jantesSelect = document.getElementById("jantes");
	const voiturePersonnalisee = document.querySelector(".voiture-personnalisee img");

	couleurSelect.addEventListener("change", updateCar);
	jantesSelect.addEventListener("change", updateCar);

	function updateCar() {
		const selectedCouleur = couleurSelect.value;
		const selectedJantes = jantesSelect.value;

		const cheminImage = `./ASSETS/m4-${selectedCouleur}-${selectedJantes}.png`;

		voiturePersonnalisee.src = cheminImage;
		console.log(cheminImage);
	}
});
