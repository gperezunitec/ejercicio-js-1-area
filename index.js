function calcular() {

    let strA=document.getElementById("valorA").value;
    let strB=document.getElementById("valorB").value;

    if (strA===""){
        alerta("valor a en blanco")

    }else if (strB===""){
        alerta("valor b en blanco")
    } else{
        let a =parseFloat(strA);
        let b =parseFloat(strB);
        let area=a*b;
        document.getElementById("valorArea").value=area;
    }



}

function limpiar() {
    document.getElementById("valorArea").value="";
    document.getElementById("valorA").value="";
    document.getElementById("valorB").value="";
}

function alerta(mensaje) {
    Swal.fire({
        title: "Error!",
        text: mensaje,
        icon: "warning",
    });

}