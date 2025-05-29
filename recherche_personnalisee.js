function demarrer(){
    document.getElementById('partie1').style= 'display:none';
    document.getElementById('partie2').style= 'display:none';
    document.getElementById('partie3').style= 'display:none';
    document.getElementById('partie4').style= 'display:none';
    document.getElementById('partie5').style= 'display:none';
    document.getElementById('partie6').style= 'display:none';
    //document.getElementById('partie7').style= 'display:none';
    document.getElementById('partie8').style= 'display:none';
    document.getElementById('partie9').style= 'display:none';
    //document.getElementById('partie10').style= 'display:none';
    document.getElementById('partie11').style= 'display:none';
    document.getElementById('partie12').style= 'display:none';
    document.getElementById('partie14').style= 'display:none';
}

function partie0(){ //budget
    document.getElementById('bouton1').style= 'display:none';
    document.getElementById('partie1').style= 'display:block';
}

function partie1(){ //logiciel
    document.getElementById('bouton2').style= 'display:none';
    document.getElementById('partie2').style= 'display:block';
}

function partie3(){ //type ordi : portable
    document.getElementById('bouton3').style= 'display:none';
    document.getElementById('bouton4').style= 'display:none';
    document.getElementById('partie3').style= 'display:block';
}

function partie4(){ //type ordi : fixe
    document.getElementById('bouton3').style= 'display:none';
    document.getElementById('bouton4').style= 'display:none';
    document.getElementById('partie4').style= 'display:block';
}

function partie5(){ //build
    document.getElementById('bouton6').style= 'display:none';
    document.getElementById('partie5').style= 'display:block';
}

function partie6(){ //personnaliser avec build
    document.getElementById('bouton5').style= 'display:none';
    document.getElementById('partie6').style= 'display:block';
}

function partie7(){ //autre
    document.getElementById('bouton8').style= 'display:none';
    document.getElementById('bouton9').style= 'display:none';
    document.getElementById('bouton14').style= 'display:none';
    document.getElementById('bouton12').style= 'display:none';
    document.getElementById('bouton17').style= 'display:none';
    document.getElementById('partie11').style= 'display:block';
}

function partie8(){ //accessoires avec build
    document.getElementById('bouton8').style= 'display:none';
    document.getElementById('bouton9').style= 'display:none';
    document.getElementById('partie8').style= 'display:block';
}

function partie10(){ //logiciel avec build
    document.getElementById('bouton17').style= 'display:none';
    document.getElementById('partie9').style= 'display:block';
}

function partie12(){ //personnaliser sans l'option build
    document.getElementById('bouton12').style= 'display:none';
    document.getElementById('bouton7').style= 'display:none';
    document.getElementById('partie12').style= 'display:block';
}

function partie14(){ //accessoires sans l'option build
    document.getElementById('bouton16').style= 'display:none';
    document.getElementById('bouton15').style= 'display:none';
    document.getElementById('partie14').style= 'display:block';
}
