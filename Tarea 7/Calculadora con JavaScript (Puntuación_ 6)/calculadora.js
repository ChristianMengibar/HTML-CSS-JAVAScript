function sumar() {
	var num1 = parseFloat(document.getElementById('num1').value);
	var num2 = parseFloat(document.getElementById('num2').value);

	if (isNaN(num1) || isNaN(num2)) {
        window.alert("La casilla esta vacia, asigne un valor valido para continuar con la operacion.")
    } else {
    	document.getElementById('resultado').innerHTML = num1 + num2;
    }
}

function restar() {
	var num1 = parseFloat(document.getElementById('num1').value);
	var num2 = parseFloat(document.getElementById('num2').value);

	if (isNaN(num1) || isNaN(num2)) {
        window.alert("La casilla esta vacia, asigne un valor valido para continuar con la operacion.")
    } else {
    	document.getElementById('resultado').innerHTML = num1 - num2;
    }
}

function multiplicar() {
	var num1 = parseFloat(document.getElementById('num1').value);
	var num2 = parseFloat(document.getElementById('num2').value);

	if (isNaN(num1) || isNaN(num2)) {
        window.alert("La casilla esta vacia, asigne un valor valido para continuar con la operacion.")
    } else {
    	document.getElementById('resultado').innerHTML = num1 * num2;
    }
}

function dividir() {
	var num1 = parseFloat(document.getElementById('num1').value);
	var num2 = parseFloat(document.getElementById('num2').value);

	if (isNaN(num1) || isNaN(num2)) {
        window.alert("La casilla esta vacia, asigne un valor valido para continuar con la operacion.")
    } else {
    	document.getElementById('resultado').innerHTML = num1 / num2;
    }
}