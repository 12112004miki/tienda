$(document).ready(function () {
    alert("hola mundo")
    $("div").click(function () { 
        $("p").hide();
    });
});

$("#div2").mouseenter(function () { 
    alert("el mouse entro en el div2")
});

$("#div1").mouseenter(function () { 
    $(this).addClass("color");
});

$.ajax({
    type: "method",
    url: "url",
    data: "data",
    dataType: "dataType",
    success: function (response) {
    }
});
$(!"#div1").append();

