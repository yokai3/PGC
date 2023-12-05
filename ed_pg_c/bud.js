var z=0;


function soma() {
    let sex = document.getElementById("sex").value;
    let alt = document.getElementById("alt").value;
    let pesc = document.getElementById("pesc").value;
    let qua = document.getElementById("qua").value;
    let cin = document.getElementById("cin").value;
    var res = document.getElementById("res");
    res.innerHTML = "";
    if(sex=1){
        z=495/(1.033 - 0.191 * Math.log10(cin-pesc) + 0.155 * Math.log10(alt)) - 450;
        res.innerHTML = "A a porcentagem é " + z + "%";
    }
    else if(sex=2){
        z=495/(1.296-0.350*Math.log10(qua+cin-pesc)+0.221*Math.log10(alt))-450;
        res.innerHTML = "A porcentagem é " + z + "%";
    }
    else{
    res.innerHTML = "Digite um sexo valido";
    }
    
    document.getElementById("sex").value = "";
    document.getElementById("alt").value = "";
    document.getElementById("pesc").value = "";
    document.getElementById("qua").value = "";
    document.getElementById("cin").value = "";
    document.getElementById("sex").focus();
}