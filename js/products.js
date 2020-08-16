//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var show = [];

function MostrarLista(array) {

    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let Products = array[i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + Products.imgSrc + `" alt="` + Products.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ Products.name + `</h4>
                        <small class="text-muted">` + Products.soldCount + ` artículos vendidos</small>
                    </div>
                    <p>` + Products.description + `</p>
                    <p>` + Products.currency +" " + Products.cost + ` </p>

                </div>
            </div>
        </div>
        `

        document.getElementById("product-list-container").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            show = resultObj.data;
            //Muestro las categorías ordenadas
            MostrarLista(show);
        }
    });
});