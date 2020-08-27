$(document).ready(function(){
    // 1- Generare una griglia 6x6 (36 boxes),
    for (var i = 0; i < 36; i++) {
        $("#container").append("<div class='quadratino'></div>");
    }
    $(".quadratino").on("click", function() {
        var text = $(this);
        // 2- ad ogni click parte una richiesta AJAX che prende
        // un numero random da 1 a 9 (scegliere API opportuna).
        $.ajax(
        {
         "url": "https://flynn.boolean.careers/exercises/api/random/int",
         "method": "GET",
         "success": function (r){
            text.text(r.response)
            // 3- Se è <= 5 il quadrato diventa giallo, se è > di 5
            // il quadrato diventa verde.
            // Il numero ottenuto appare al centro del quadrato.
            if (r.response <= 5) {
                text.addClass("qdrGiallo");
            } else {
                text.addClass("qdrVerde");
            }
         }
        }
        );
    });
});
