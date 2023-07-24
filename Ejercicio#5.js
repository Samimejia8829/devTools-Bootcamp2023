function dibujarX(tamanho) {
    let fila = "";
    for(let x = 0; x < tamanho; x++) {
        for (let y = 0; y < tamanho; y++){
            fila += (x === y || x + y === tamanho -1) ? "*": " ";
        }   
        console.log(fila);
        fila = "";
    }    
    
}

dibujarX(7);