/*!
* Start Bootstrap - Bare v5.0.0 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


document.getElementById('habitantes').addEventListener('keyup', total);
document.getElementById('dies').addEventListener('change', total);
document.getElementById('once').addEventListener('change', total);
document.getElementById('doce').addEventListener('change', total);
document.getElementById('trece').addEventListener('change', total);
document.getElementById('catorce').addEventListener('change', total);
document.getElementById('quinto').addEventListener('change', total);
document.getElementById('dieciseis').addEventListener('change', total);
document.getElementById('diecisiete').addEventListener('change', total);
document.getElementById('dieciocho').addEventListener('change', total);
document.getElementById('diecinueve').addEventListener('change', total);
document.getElementById('veinte').addEventListener('change', total);
document.getElementById('Vent_Factor').addEventListener('change', total);
document.getElementById('Strain').addEventListener('change', total);
document.getElementById('Ind_Analysis').addEventListener('keyup', total);


function total(){
	var hb = document.getElementById('habitantes').value;
	var dies = document.getElementById('dies').value;
	var once = document.getElementById('once').value;
	var doce = document.getElementById('doce').value;
	var trece = document.getElementById('trece').value;
	var catorce = document.getElementById('catorce').value;
	var quinto = document.getElementById('quinto').value;
	var dieciseis = document.getElementById('dieciseis').value;
	var diecisiete = document.getElementById('diecisiete').value;
	var dieciocho = document.getElementById('dieciocho').value;
	var diecinueve = document.getElementById('diecinueve').value;
	var veinte = document.getElementById('veinte').value;
	var Vent_Factor = document.getElementById('Vent_Factor').value;
	var Strain = document.getElementById('Strain').value;



	if(dies == 1){
		var c10 = 20.62;
		dies2 = ( c10 / 100) * hb;
		var d10 = hb - dies2;
		diesporc = 20.62;
		diespore = 100.00 - diesporc;
		var f10 = 14.60,
		g10 = 27.80,
		e10 = diespore;

	}else{
		var c10 = 0,
		d10 = hb,
		e10 = 100.00,
		f10 = 0,
		g10 = 0;
	}

	if (once==1) {
		var oncep = (20.00/100) * e10;
		var c11 = oncep.toFixed(2);
		var f11 = ((16.00/100) * e10).toFixed(2);
	    var g11 = ((24.00/100) * e10).toFixed(2);

	}else if(once==2) {
		var oncep = (9.60/100) * e10;
		var c11 = oncep.toFixed(2);
		var f11 = ((7.00/100) *  e10).toFixed(2);
	    var g11 = ((12.00/100) * e10).toFixed(2);

	}else {
		var c11 = 0,
		d11 = d10,
		e11 = e10,
		f11 = 0,
		g11 = 0;
		nodoce = true;
	}
	if(typeof noonce === 'undefined'){
		var oncet = (parseFloat(c10)+parseFloat(oncep));
		var d11 = (hb - ((oncet/100) * hb ).toFixed(2)).toFixed(2);
		if(d11<0){var d11 = -d11;}
		var e11 = e10 - oncep;
	}


	if (doce == 1) {
		var docep = (99.00/100) * e11;
		var c12 = docep;
		var f12 = ((98.50/100) * e11).toFixed(2);
	    var g12 = ((99.49/100) *  e11).toFixed(2);


	}else if (doce == 2) {
		var docep = (98.50/100) * e11;
		var c12 = docep;
		var f12 = ((97.76/100) *  e11).toFixed(2);
	    var g12 = ((99.24/100) *  e11).toFixed(2);


	}else if (doce == 3) {
		var docep = (90.14/100) * e11;
		var c12 = docep;
        var f12 = ((85.29/100) *  e11).toFixed(2);
	    var g12 = ((95.15/100) *  e11).toFixed(2);

	}else if (doce == 4) {
		var docep = (88.78/100) * e11;
		var c12 = docep;
        var f12 = ((88.45/100) *  e11).toFixed(2);
	    var g12 = ((89.10/100) *  e11).toFixed(2);

	}else if (doce == 5) {
		var docep = (80.50/100) * e11;
		var c12 = docep;
        var f12 = ((75.65/100) *  e11).toFixed(2);
	    var g12 = ((85.51/100) *  e11).toFixed(2);

	}else if (doce == 6) {
		var docep = (55.00/100) * e11;
		var c12 = docep;
        var f12 = ((46.44/100) *  e11).toFixed(2);
	    var g12 = ((64.48/100) *  e11).toFixed(2);

	}else if (doce == 7) {
		var docep = (58.00/100) * e11;
		var c12 = docep;
        var f12 = ((53.20/100) *  e11).toFixed(2);
	    var g12 = ((63.06/100) *  e11).toFixed(2);

	}else if (doce == 8) {
		var c12 = 0,
		d12 = d11,
		e12 = e11,
		f12 = 0,
		g12 = 0,
		nodoce = true;
	}

	if(typeof nodoce === 'undefined'){
		var docet = (parseFloat(c10)+parseFloat(c11)+parseFloat(docep));
		var d12 = (hb - ((docet/100) * hb ).toFixed(2)).toFixed(2);
		if(d12<0){var d12 = -d12;}
		var e12 = e11 - docep;
	}

	if (trece == 1) {
		var trecep = ((99.91/Strain)/100) * e12;
		var c13 = trecep;
        var f13 = (((99.86/Strain)/100) *  e12).toFixed(2);
	    var g13 = (((99.95/Strain)/100) *  e12).toFixed(2);

	}else if (trece == 2) {
		var trecep = ((97.00/Strain)/100) * e12;
		var c13 = trecep;
        var f13 = (((95.36/Strain)/100) *  e12).toFixed(2);
	    var g13 = (((98.65/Strain)/100) *  e12).toFixed(2);

	}else if (trece == 3) {
		var trecep = ((87.50/Strain)/100) * e12;
		var c13 = trecep;
        var f13 = (((82.65/Strain)/100) *  e12).toFixed(2);
	    var g13 = (((92.52/Strain)/100) *  e12).toFixed(2);

	}else if (trece == 4) {
		var trecep = ((66.00/Strain)/100) * e12;
		var c13 = trecep;
        var f13 = (((58.11/Strain)/100) *  e12).toFixed(2);
	    var g13 = (((74.53/Strain)/100) *  e12).toFixed(2);

	}else if (trece == 5) {
		var trecep = ((13.50/Strain)/100) * e12;
		var c13 = trecep;
        var f13 = (((11.40/Strain)/100) *  e12).toFixed(2);
	    var g13 = (((15.82/Strain)/100) *  e12).toFixed(2);

	}else if (trece == 6) {
		var c13 = 0,
		d13 = d12,
		e13 = e12,
		f13 = 0,
		g13 = 0,
		notrece= true;
	}

	if(typeof notrece === 'undefined'){
		var trecet = (parseFloat(c10)+parseFloat(c11)+parseFloat(c12)+parseFloat(trecep));
		var d13 = (hb - ((trecet/100) * hb ).toFixed(2)).toFixed(2);
		if(d13<0){var d13 = -d13;}
		var e13 = e12 - trecep;
	}



	if (catorce == 1 || catorce == 2 ){
		var catorcep = (15.00/100) * e13;
		var c14 = catorcep;
        var f14 = ((11.95/100) *  e13).toFixed(2);
	    var g14 = ((18.49/100) *  e13).toFixed(2);

	}else if(catorce == 3) {
		var catorcep = (15.00/100) * e13;
		var c14 = catorcep;
        var f14 = ((12.66/100) *  e13).toFixed(2);
	    var g14 = ((17.58/100) *  e13).toFixed(2);

	}else if (catorce == 4) {
		var catorcep = (10.00/100) * e13;
		var c14 = catorcep;
        var f14 = ((8.44/100) *  e13).toFixed(2);
	    var g14 = ((11.72/100) * e13).toFixed(2);

	}else if (catorce == 5) {
		var catorcep = (5.00/100) * e13;
		var c14 = catorcep;
        var f14 = ((4.22/100) *  e13).toFixed(2);
	    var g14 = ((5.86/100) *  e13).toFixed(2);

	}else if (catorce == 6) {
		var c14 = 0,
		d14 = d13,
		e14 = e13,
		f14 = 0,
		g14 = 0,
		nocatorce= true;
	}

	if(typeof nocatorce === 'undefined'){
		var catorcet = (parseFloat(c10)+parseFloat(c11)+parseFloat(c12)+parseFloat(c13)+parseFloat(catorcep));
		var d14 = (hb - ((catorcet/100) * hb ).toFixed(2)).toFixed(2);
		if(d14<0){var d14 = -d14;}
		var e14 = e13 - catorcep;
	}




	if (quinto == 1) {
		var quintop = ((90.00/Strain)/100) * e14 * Vent_Factor ;
		var c15 = quintop;
        var f15 = (((85.15/Strain)/100) *  e14 * Vent_Factor).toFixed(2);
	    var g15 = (((95.01/Strain)/100) *  e14 * Vent_Factor).toFixed(2);

	}else if (quinto == 2) {
		var quintop = ((89.50/Strain)/100) * e14 * Vent_Factor ;
		var c15 = quintop;
        var f15 = (((84.65/Strain)/100) *  e14 * Vent_Factor).toFixed(2);
	    var g15 = (((94.52/Strain)/100) *  e14 * Vent_Factor).toFixed(2);

	}else if (quinto == 3) {
		var quintop = ((80.00/Strain)/100) * e14 * Vent_Factor ;
		var c15 = quintop;
        var f15 = (((71.28/Strain)/100) *  e14 * Vent_Factor).toFixed(2);
	    var g15 = (((89.35/Strain)/100) *  e14 * Vent_Factor).toFixed(2);

	}else if (quinto == 4) {
		var quintop = ((36.10/Strain)/100) * e14 * Vent_Factor ;
		var c15 =quintop;
		var f15 = (((31.38/Strain)/100) *  e14 * Vent_Factor).toFixed(2);
	    var g15 = (((41.23/Strain)/100) *  e14 * Vent_Factor).toFixed(2);

	}else if (quinto == 5) {
		var quintop = ((10.00/Strain)/100) * e14 * Vent_Factor ;
		var c15 = quintop;
        var f15 = (((8.44/Strain)/100) *  e14 * Vent_Factor).toFixed(2);
	    var g15 = (((11.72/Strain)/100) *  e14 * Vent_Factor).toFixed(2);
	}else if (quinto == 6) {
		var quintop = ((5.00/Strain)/100) * e14 * Vent_Factor ;
		var c15 = quintop;
        var f15 = (((4.22/Strain)/100) *  e14 * Vent_Factor).toFixed(2);
	    var g15 = (((5.86/Strain)/100) *  e14 * Vent_Factor).toFixed(2);

	}else if (quinto == 7) {
		var c15 = 0,
		d15 = d14,
		e15 = e14,
		f15 = 0,
		g15 = 0,
		noquinto= true;
	}

	if(typeof noquinto === 'undefined'){
		var quintot = (parseFloat(c10)+parseFloat(c11)+parseFloat(c12)+parseFloat(c13)+parseFloat(c14)+parseFloat(quintop));
		var d15 = (hb - ((quintot/100) * hb).toFixed(2)).toFixed(2);
		if(d15<0){var d15 = -d15;}
		var e15 = e14 - quintop;
	}



	if(dieciseis== 1 || dieciseis== 2 ){
		var dieciseisp = (98.00/100) * e15 * Vent_Factor ;
		var c16 = dieciseisp;
        var f16 = ((97.67/100) *  e15 * Vent_Factor).toFixed(2);
	    var g16 = ((98.33/100) *  e15 * Vent_Factor).toFixed(2);
	}else if(dieciseis== 3){
		var dieciseisp = (36.00/100) * e15 * Vent_Factor ;
		var c16 = dieciseisp;
        var f16 = ((32.81/100) *  e15 * Vent_Factor).toFixed(2);
	    var g16 = ((39.38/100) *  e15 * Vent_Factor).toFixed(2);
	}else if(dieciseis== 4 ){
		var dieciseisp = (22.00/100) * e15 * Vent_Factor ;
		var c16 = dieciseisp;
        var f16 = ((20.39/100) *  e15 * Vent_Factor).toFixed(2);
	    var g16 = ((23.68/100) *  e15 * Vent_Factor).toFixed(2);
	}else {
		var c16 = 0,
		d16 = d15,
		e16 = e15,
		f16 = 0;
		g16 = 0,
		nodieciseis = true;
	}

	if(typeof nodieciseis === 'undefined'){
	    var dieciseist = (parseFloat(c10)+parseFloat(c11)+parseFloat(c12)+parseFloat(c13)+parseFloat(c14)+parseFloat(c15)+parseFloat(dieciseisp));
		var d16 = (hb - ((dieciseist/100) * hb ).toFixed(2)).toFixed(2);
		if(d16<0){var d16 = -d16;}
		var e16 = e15 - dieciseisp;
	}
	var f17 = ((17.10/100) *  e16).toFixed(2);
	var g17 = ((23.14/100) *  e16).toFixed(2);

	if (diecisiete == 1) {
		var diecisietep = ((20.25/100)/Strain) * e16;
		var c17 = diecisietep;

	}else if (diecisiete == 2) {
		var c17 = 0,
		d17 = d16,
		e17 = e16,
		f17 = 0,
		g17 = 0,
		nodiecisiete= true;

	}

	if(typeof nodiecisiete === 'undefined'){
		var diecisietet = (parseFloat(c10)+parseFloat(c11)+parseFloat(c12)+parseFloat(c13)+parseFloat(c14)+parseFloat(c15)+parseFloat(c16)+parseFloat(diecisietep));
		var d17 = (hb - ((diecisietet/100) * hb ).toFixed(2)).toFixed(2);
		if(d17<0){var d17 = -d17;}
		var e17 = e16 - diecisietep;

	}

	if (dieciocho == 1) {
		var dieciochop = ((13.50/Strain)/100) * e17;
		var c18 = dieciochop;
        var f18 = ((11.40/100) *  e17).toFixed(2);
	    var g18 = ((15.82/100) *  e17).toFixed(2);
	}else {
		var c18 = 0,
		d18 = d17,
		e18 = e17,
		f18 = 0,
		g18 = 0,
		nodieciocho = true;
	}

	if(typeof nodieciocho === 'undefined'){
		var dieciochot = (parseFloat(c10)+parseFloat(c11)+parseFloat(c12)+parseFloat(c13)+parseFloat(c14)+parseFloat(c15)+parseFloat(c16)+parseFloat(c17)+parseFloat(dieciochop));
		var d18 = (hb - ((dieciochot/100) * hb ).toFixed(2)).toFixed(2);
		if(d18<0){var d18 = -d18;}
		var e18 = 100.00 - dieciochot;
	}

	if (diecinueve == 1) {
		var diecinuevep = (10.80/100) * e18;
		var c19 = diecinuevep;
        var f19 = ((9.12/100) *  e18).toFixed(2);
	    var g19 = ((12.66/100) *  e18).toFixed(2);
	}else if (diecinueve == 2) {
		var c19 = 0,
		d19 = d18,
		e19 = e18,
		f19 = 0,
		g19 = 0,
		nodiecinueve= true;
	}

	if(typeof nodiecinueve === 'undefined'){
		var diecinuevet = (parseFloat(c10)+parseFloat(c11)+parseFloat(c12)+parseFloat(c13)+parseFloat(c14)+parseFloat(c15)+parseFloat(c16)+parseFloat(c17)+parseFloat(c18)+parseFloat(diecinuevep));
		var d19 = (hb - ((diecinuevet/100) * hb ).toFixed(2)).toFixed(2);
		if(d19<0){var d19 = -d19;}
		var e19 = e18 - diecinuevep;
	}

	if (veinte == 1) {
		var veintep = (12.50/100) * e19;
		var c20 = veintep;
        var f20 = ((12.33/100) *  e19).toFixed(2);
	    var g20 = ((12.66/100) *  e19).toFixed(2);
	}else {
		var c20 = 0,d20 = d19,e20 = e19, f20 = e19, g20 = e19, noveinte= true;
	}

	if(typeof noveinte === 'undefined'){
		var veintet = (parseFloat(c10)+parseFloat(c11)+parseFloat(c12)+parseFloat(c13)+parseFloat(c14)+parseFloat(c15)+parseFloat(c16)+parseFloat(c17)+parseFloat(c18)+parseFloat(c19)+parseFloat(veintep));
		var d20 = (hb - ((veintet/100) * hb ).toFixed(2)).toFixed(2);
		if(d20<0){var d20 = -d20;}
		var e20 = e19 - veintep;
	}
	var Ind_Analysis = document.getElementById('Ind_Analysis').value;
	var analysis = (d20/100000)*Ind_Analysis;
	var total = 1/analysis;
	document.getElementById('Ind_Analysis_total').innerHTML = (analysis).toFixed(2);
	document.getElementById('total').innerHTML = (total).toFixed(2);

	document.getElementById('c10').innerHTML = Math.abs(c10.toFixed(2))+"%";
	document.getElementById('d10').innerHTML = d10;
	document.getElementById('e10').innerHTML = Math.abs(e10.toFixed(2))+"%";

	document.getElementById('c11').innerHTML = c11+"%";
	document.getElementById('d11').innerHTML = d11;
	document.getElementById('e11').innerHTML = Math.abs(e11.toFixed(2))+"%";

	document.getElementById('c12').innerHTML = c12.toFixed(2)+"%";
	document.getElementById('d12').innerHTML = d12;
	document.getElementById('e12').innerHTML = Math.abs(e12.toFixed(2))+"%";

	document.getElementById('c13').innerHTML = Math.abs(c13.toFixed(2))+"%";
	document.getElementById('d13').innerHTML = d13;
	document.getElementById('e13').innerHTML = Math.abs(e13.toFixed(2))+"%";

	document.getElementById('c14').innerHTML = Math.abs(c14.toFixed(2))+"%";
	document.getElementById('d14').innerHTML = d14;
	document.getElementById('e14').innerHTML = Math.abs(e14.toFixed(2))+"%";

	document.getElementById('c15').innerHTML = Math.abs(c15.toFixed(2))+"%";
	document.getElementById('d15').innerHTML = d15;
	document.getElementById('e15').innerHTML = Math.abs(e15.toFixed(2))+"%";

	document.getElementById('c16').innerHTML = Math.abs(c16.toFixed(2))+"%";
	document.getElementById('d16').innerHTML = d16;
	document.getElementById('e16').innerHTML = Math.abs(e16.toFixed(2))+"%";

	document.getElementById('c17').innerHTML = Math.abs(c17.toFixed(2))+"%";
	document.getElementById('d17').innerHTML = d17;
	document.getElementById('e17').innerHTML = Math.abs(e17.toFixed(2))+"%";

	document.getElementById('c18').innerHTML = Math.abs(c18.toFixed(2))+"%";
	document.getElementById('d18').innerHTML = d18;
	document.getElementById('e18').innerHTML = Math.abs(e18.toFixed(2))+"%";

	document.getElementById('c19').innerHTML = Math.abs(c19.toFixed(2))+"%";
	document.getElementById('d19').innerHTML = d19;
	document.getElementById('e19').innerHTML = Math.abs(e19.toFixed(2))+"%";

	document.getElementById('c20').innerHTML = Math.abs(c20.toFixed(2))+"%";
	document.getElementById('d20').innerHTML = d20;
	document.getElementById('e20').innerHTML = Math.abs(e20.toFixed(2))+"%";

	var c21 = parseFloat(c10)+parseFloat(c11)+parseFloat(c12)+parseFloat(c13)+parseFloat(c14)+parseFloat(c15)+parseFloat(c16)+parseFloat(c17)+parseFloat(c18)+parseFloat(c19)+parseFloat(c20);
	var d21 = parseFloat(f10)+parseFloat(f11)+parseFloat(f12)+parseFloat(f13)+parseFloat(f14)+parseFloat(f15)+parseFloat(f16)+parseFloat(f17)+parseFloat(f18)+parseFloat(f19)+parseFloat(f20);
	var e21 =  parseFloat(g10)+parseFloat(g11)+parseFloat(g12)+parseFloat(g13)+parseFloat(g14)+parseFloat(g15)+parseFloat(g16)+parseFloat(g17)+parseFloat(g18)+parseFloat(g19)+parseFloat(g20);
    document.getElementById('restante').innerHTML = parseFloat(g19).toFixed(2)+"%";
	document.getElementById('c21').innerHTML = c21.toFixed(2)+"%";
	document.getElementById('d21').innerHTML = d21.toFixed(2)+"%";
	document.getElementById('e21').innerHTML = e21.toFixed(2)+"%";
};

total();
