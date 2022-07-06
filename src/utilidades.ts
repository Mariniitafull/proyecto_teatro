
export function obtenerTipo(edad: number): string{

     // 0 <= edad <= 12
     if((edad >= 0) && (edad <= 12)) {
        return 'INFANTIL';
    }
    // 13 <= edad <= 17
    else if((edad >= 13) && (edad <= 17)) {
        return 'MENOR';
    }
    // 18 <= edad <= 64
    else if((edad >=18) &&  (edad <= 64)){
        return 'MAYOR';
    }
    // edad >= 65
    else if(edad >= 65) {
        return 'JUBILADO';
    }   
}

export function obtenerPrecioEntrada(tipo: string): number {
    const precioEntrada = 30;

    if(tipo === 'INFANTIL'){
        return precioEntrada - precioEntrada * 0.5; // 50%
    }
    else if (tipo ==='MENOR'){
        return precioEntrada - precioEntrada * 0.2; // 20%
    }
    else if(tipo === 'MAYOR'){ //0%
        return precioEntrada;
    }
    else if(tipo === 'JUBILADO'){
        return precioEntrada - precioEntrada * 0.66; // 66%
    }
    return precioEntrada;
}