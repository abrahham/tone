var imagenes = ['marlowe2.jpg', 'doris.jpg', 'live.jpg', 'price.jpg'];
var showcase = document.querySelector("#top-showcase");
var lista = document.querySelectorAll("#top-lista > li");
lista.forEach((item, index) => {
	item.addEventListener('mouseover', () => {
		showcase.style.backgroundImage = `url('img/${imagenes[index]}')`;
	});			
});
