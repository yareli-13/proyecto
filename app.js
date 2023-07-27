const calcular=()=>{
    let costo=0;
    let Decoracion=0;
    var tipo=parseInt(document.querySelector("#tipos").value);
    var peso=document.querySelector("#peso")
    var uno=document.querySelector("#c");
    var dos=document.querySelector("#f");
    var tres=document.querySelector("#m");
    var cuatro=document.querySelector("#fo");
    var vc=document.querySelector("#vpes");
    var pes=parseInt(peso.value)
    vc.innerHTML=parseInt(peso.value)
    switch(tipo){
        case 1:costo=70;break;
            case 2:costo=100;break;
            case 3:costo=50;break;
            case 4:costo=120;break;
            case 5:costo=130;break;
    }
    if (uno.checked){Decoracion+=200}
    if (dos.checked){Decoracion+=300}
    if (tres.checked){Decoracion+=100}
    if (cuatro.checked){Decoracion+=250}
    costo=(pes*costo)+Decoracion;
    document.querySelector("#COSTO").innerHTML=`<h3>COSTO: $${costo.toFixed(2)} MXN</h3>`
    document.querySelector("#PERSONAS").innerHTML=`<h3>PERSONAS: ${(pes * 10)} </h3>`
 }