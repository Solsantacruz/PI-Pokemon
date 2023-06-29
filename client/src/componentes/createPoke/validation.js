function Validation(input){
        
    let error = {required: false};
    console.log(error)
    if(!input.name){
        error.name = 'Ingrese el Poke-Nombre'
        error.required = true;
    } else if (!/\S{1,15}[^0-9]/.test(input.name)){
        error.name = 'Nombre invalido. Debe contener entre 2 a 15 caracteres';
        error.required = true
    } else if
        (!/^[a-z]{2,15}$/.test(input.name)){
            error.name = 'Nombre inválido. Debe contene letras minúsculas';
            error.required = true;
    }
    
    if(input.life < 1 || input.life > 150){
        error.life = 'Deslice por un valor'
        error.required = true
    }
    
    if(input.attack < 1 || input.attack > 150){
        error.attack = 'Deslice por un valor'
        error.required = true
    }

    if(input.defense < 1 || input.defense > 150){
        error.defense = 'Deslice por un valor'
        error.required = true
    }

    if(input.speed < 1 || input.speed > 150){
        error.speed = 'Deslice por un valor'
        error.required = true
    }

    if(input.weight < 1 || input.weight > 150){
        error.weight ='Deslice por un valor'
        error.required = true
    }
    if(input.height < 1 || input.height > 150){
        error.height = 'Deslice por un valor'
        error.required = true
    }

    //Validations of Types Imput
  if (!input.type.length) {
    error.type = 'Debes elegir al menos un type';
    error.required = true
  }
  if (input.type.length > 2) {
    error.type = `solo pueden ser dos types`;
    error.required = true
  }
    return error;
}

export default Validation;