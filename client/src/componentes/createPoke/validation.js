function Validation(input){
        
    let error = {required: false};
    console.log(error)
    if(!input.name){
        error.name = 'Ingrese el Poke-Nombre'
        error.required = true;
    } else if (!/\S{1,15}[^0-9]/.test(input.name)){
        error.name = 'Nombre invalido. Debe contener entre 2 a 15 caracteres';
        error.required = true
    }
    
    if(input.life < 1 || input.life > 150){
        error.life = 'El campo debe contener un numero a partir de 1 sin exceder los 150 puntos'
        error.required = true
    }
    
    if(input.attack < 1 || input.attack > 150){
        error.attack = 'El campo debe contener un numero a partir de 1 sin exceder los 150 puntos'
        error.required = true
    }

    if(input.defense < 1 || input.defense > 150){
        error.defense = 'El campo debe contener un numero a partir de 1 sin exceder los 150 puntos'
        error.required = true
    }

    if(input.speed < 1 || input.speed > 150){
        error.speed = 'El campo debe contener un numero a partir de 1 sin exceder los 150 puntos'
        error.required = true
    }

    if(input.weight < 1 || input.weight > 150){
        error.weight ='El campo debe contener un numero a partir de 1 sin exceder los 150 puntos'
        error.required = true
    }
    if(input.height < 1 || input.height > 150){
        error.height = 'El campo debe contener un numero a partir de 1 sin exceder los 150 puntos'
        error.required = true
    }
    
    return error;
}

export default Validation;