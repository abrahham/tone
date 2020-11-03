var imagenes = ['marlowe2.jpg', 'doris.jpg', 'live.jpg', 'price.jpg'];
var showcase = document.querySelector("#top-showcase");
var lista = document.querySelectorAll("#top-lista > li");
lista.forEach((item, index) => {
	item.addEventListener('mouseover', () => {
		cambiarImagen(index);
	});
	item.addEventListener('click', () => {
		item.classList.add("seleccionado");
	});
});

function recorrerLista() {
	var index = 0;
	setInterval(function() {
		lista.forEach(item => item.classList.remove("seleccionado"));
		lista[index].classList.add("seleccionado");
		cambiarImagen(index);
		index = (index == lista.length - 1) ? 0 : index + 1;
	}, 900);
}
function cambiarImagen(index) {
	showcase.style.backgroundImage = `url('img/${imagenes[index]}')`;
}