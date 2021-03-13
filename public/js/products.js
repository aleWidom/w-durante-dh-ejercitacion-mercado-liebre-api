//consulta a ruta Api
fetch('/api/products/latest')
.then(function(response) {
    return response.json()
})
.then(function(resultado) {

    
   //for para rellenar segun cada elemento que devuelve el resultado.data
   for (cadaUno of resultado.data) {
  //Capturo
  divPrincipalLatest = document.querySelector('.latest')

  //Lo que capture voy sumando la etiqueta seccion con todo lo que trae
    divPrincipalLatest.innerHTML += `<section class="product-box">
        <a href="/products/detail/">
            <figure class="product-box_image">
                <img src="/images/products/${cadaUno.image}" alt="" class="img">
            </figure>
            <article class="product-box_data">
                <h2 class="price">$${cadaUno.price}</h2>
                <span class="discount">${cadaUno.discount} % OFF</span>
                <p class="name">${cadaUno.name}</p>
                <i class="fas fa-truck"></i>
            </article>
        </a>
    </section>`

    //Lo que agregue lo pongo dentro de la captura que traigo con el id
    document.querySelector('#offers-products').appendChild(divPrincipalLatest)
     
}
})
.catch(function(err){
    console.log(err)
}) 



//Mismo sistema que lo anterior
fetch('/api/products/offers')
.then(function(response) {
    return response.json()
})
.then(function(resultado) {

    
   //for para rellenar segun cada elemento que devuelve el resultado.data
   for (cadaUno of resultado.data) {

  divPrincipalOffers = document.querySelector('.offers')

    divPrincipalOffers.innerHTML += `<section class="product-box">
        <a href="/products/detail/">
            <figure class="product-box_image">
                <img src="/images/products/${cadaUno.image}" alt="" class="img">
            </figure>
            <article class="product-box_data">
                <h2 class="price">$${cadaUno.price}</h2>
                <span class="discount">${cadaUno.discount} % OFF</span>
                <p class="name">${cadaUno.name}</p>
                <i class="fas fa-truck"></i>
            </article>
        </a>
    </section>`

    document.querySelector('#latest-products').appendChild(divPrincipalOffers)
     
}
})
.catch(function(err){
    console.log(err)
}) 