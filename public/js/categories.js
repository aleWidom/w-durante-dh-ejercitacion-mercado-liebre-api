
fetch('api/products/categories')
.then(function(response) {
    return response.json()
})
.then(function(resultado) {
    console.log(resultado)
})
.catch(function(err) {
    console.log(err)
})