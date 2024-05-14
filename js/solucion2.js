function calcularPromedio() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const numero3 = parseFloat(document.getElementById('numero3').value);
    const numero4 = parseFloat(document.getElementById('numero4').value);

    const promedio = (numero1 + numero2 + numero3 + numero4) / 4;

    let resultado = `El promedio de los números ${numero1}, ${numero2}, ${numero3} y ${numero4} es: ${promedio}`;

    if (numero1 === numero2 && numero1 === numero3 && numero1 === numero4) {
        resultado += `\nLos números son todos iguales.`;
    } else {
        resultado += `\nLos números son diferentes.`;
        const mayor = Math.max(numero1, numero2, numero3, numero4);
        resultado += `\nEl valor mayor es: ${mayor}`;
    }

    document.getElementById('resultado').innerHTML = resultado;
}
