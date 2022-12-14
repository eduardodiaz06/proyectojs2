//ordenar productos por nombre (sort)
const productosOrdenados = [...productos]
productosOrdenados.sort((a, b) => {

    const nombreA = a.nombre;
    const nombreB = b.nombre;
    if (nombreA < nombreB) {
        return -1;
    }
    if (nombreA > nombreB) {
        return 1;
    }
    return 0;
});

//ver los productos en oferta en tabla (filter)
const productosConOferta = productosOrdenados.filter(function (element) {
    return element.oferta === true;
})
if (confirm("Quieres ver produtos en oferta?") === true) {

    console.table(productosConOferta)
}
else console.table(productosOrdenados)



//buscar producto y mostrarlo en tabla (find)
const buscador = prompt("Buscar producto")
function buscarPorductos() {
    const buscarProducto = productosOrdenados.find(function (element) {
        return element.nombre == buscador;
    })
    if (buscarProducto) {
        console.log(buscarProducto)
    } else alert("producto no encontrado")
}

buscarPorductos(buscador)