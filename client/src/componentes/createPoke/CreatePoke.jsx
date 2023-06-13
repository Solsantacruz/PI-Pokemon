import {Link} from 'react-router-dom';
import { createPokemon, getTypes } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import validate from './validation';
import { useNavigate } from 'react-router-dom';

const CreatePoke = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const types = useSelector((state) => state.types)
    const [error, setError] = useState({required: true});
    const [input, setInput] = useState({
        name: "",
        image: "",
        life: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
        type: []
    });

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value

        })
        let objError = validate({
            ...input, [e.target.name] : e.target.value
        })
        setError(objError)

    }

    function handleSelect(e){
        setInput({
            ...input,
            type: [...input.type, e.target.value]
        })
        let objError = validate({
            ...input, [e.target.name] : e.target.value
        })
        setError(objError)
    }

    function handleSubmit(e){
        if(error.required){
            e.preventDefault();
            alert("Complete todos los campos para continuar")
        } else {
            e.preventDefault();
        dispatch(createPokemon(input))
            alert('¡Pokemon creado exitosamente!')
            setInput({
                name: '',
                image:'',
                life:0,
                attack:0,
                defense:0,
                speed:0,              
                height:0,
                weight:0,
                type: [],
            })
        }
        navigate('/home');
    }

    function handleDelete(option){
        setInput({
            ...input,
            type: input.type.filter(type=>type !== option)
        })
    }
    

    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch])

    return(
    <div>
    <Link to='/home'><button> Volver </button></Link>
    <h1> Crea tu pokemon </h1>
    <form onSubmit={handleSubmit}>
        <div>
            <label> Nombre: </label>
            <input type='text' value={input.name} name="name" placeholder='Ingresa el nombre' onChange={handleChange}/>
            {!error.name ? null : (<span className="span">{error.name}</span>)}
        </div>
        <div>
            <label> Imagen: </label>
            <input type='text' value={input.image} name="image" placeholder='Ingresa imagen' onChange={handleChange}/>
        </div>
        <div>
            <label> Life: </label>
            <input type='number' value={input.life} name="life" placeholder='Ingresa valor numerico' onChange={handleChange}/>
            {!error.life ? null : (<span className="span">{error.life}</span>)}
        </div>
        <div>
            <label> Attack: </label>
            <input type='number' value={input.attack} name="attack" placeholder='Ingresa valor numerico' onChange={handleChange}/>
            {!error.attack ? null : (<span className="span">{error.attack}</span>)}
        </div>
        <div>
            <label> Defense: </label>
            <input type='number' value={input.defense} name="defense" placeholder='Ingresa valor numerico' onChange={handleChange}/>
            {!error.defense ? null : (<span className="span">{error.defense}</span>)}
        </div>
        <div>
            <label> Speed: </label>
            <input type='number' value={input.speed} name="speed" placeholder='Ingresa valor numerico' onChange={handleChange}/>
            {!error.speed ? null : (<span className="span">{error.speed}</span>)}
        </div>
        <div>
            <label> Height: </label>
            <input type='number' value={input.height} name="height" placeholder='Ingresa valor numerico' onChange={handleChange}/>
            {!error.height ? null : (<span className="span">{error.height}</span>)}
        </div>
        <div>
            <label> Weight: </label>
            <input type='number' value={input.weight} name="weight" placeholder='Ingresa valor numerico' onChange={handleChange}/>
            {!error.weight ? null : (<span className="span">{error.weight}</span>)}
        </div>
        <div>
            <label> Types: </label>
           <select onChange={handleSelect}>
            {types?.map((ty)=>{
                return(
                    <option value={ty.name} key={ty.name} name='type'> {ty.name}</option>
                );
            })}
           </select>
           {!error.type ? null : (<span className="span">{error.type}</span>)}
        </div>
        <div className="div">
                  {input.type.map((el) => {
                    return (
                        <div key={el}>
                            <h4 className="h4">{el}</h4>
                            <button className="x_button" onClick={() => {handleDelete(el)}}>x</button>
                        </div>
                    );
                  })}
        <button type='submit'> Crear personaje </button>
        </div>
        

    </form>
    </div>
         
    )
}

export default CreatePoke;