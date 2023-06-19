import {Link} from 'react-router-dom';
import { createPokemon, getTypes } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import validate from './validation';
import { useNavigate } from 'react-router-dom';
import style from './CreatePoke.module.css';
import imgSelec from './imgSelect';

const CreatePoke = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const types = useSelector((state) => state.types)
    const [imgSele, setImgSele] =useState("");
    const [error, setError] = useState({required: true});
    const [input, setInput] = useState({
        name: "",
        image:"",
        life: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
        type: []
    });

    function handleChange(e) {
        if(e.target.name === 'image'){
            setInput({
                ...input,
                [e.target.name]: imgSele || e.target.value,
              });
        } else {
            setInput({
                ...input,
                [e.target.name] : e.target.value
            })
        }
        
        let objError = validate({
            ...input, [e.target.name] : e.target.value
        })
        setError(objError)
    }

    function handleImageClick(image) {
        setImgSele(image);
        setInput({
          ...input,
          image: image,
        });
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
    <div className={style.contenedor}>
    <h1 className={style.h1Title}> Crea tu pokemon </h1>
    <div className={style.dexForm}>
    <Link to='/home'><button className={style.btnVolver}> Volver </button></Link>
    </div>
    <div className={style.column}>
        <div className={style.conteImg}> 
            <label>Imagen:</label>
            <div className={style.imgList}>
            {imgSelec.map((image) => (
            <img
        src={image}
        alt='newPoke'
        className={style.imgMuestra}
        onClick={() => handleImageClick(image)}/>
       ))}
      </div>
      {!imgSele ? (
      <input //Si no elige img brindada puede pasar url
      type="text"
      value={input.image}
      name="image"
      placeholder="Ingresa URL imagen"
      onChange={handleChange}
      className={style.input}/>
       ): null}
        </div>

        {/* <div>
            <label> Imagen: </label>
            <input type='text' value={input.image} name="image" placeholder='Ingresa imagen' onChange={handleChange}/>
        </div> */}
        <form onSubmit={handleSubmit} className={style.form}>
            <div className={style.contenedorForm}>
        <div>
            <label className={style.nombre}> Nombre </label>
            <input type='text' value={input.name} name="name" placeholder='Ingresa el nombre' onChange={handleChange} className={style.input}/>
            {!error.name ? null : (<span className={style.span}>{error.name}</span>)}
        </div>
        <div className={style.contenedorRange}>
        <div>
            <label> Life </label>
            <input type='range' min='0' max='150' value={input.life} name="life"  onChange={handleChange} className={style.range} style={
                          error.life ? { boxShadow: 'inset 0 0 6px #ff1f1f'} : null
                        }/>
            {!error.life ? null : (<span className={style.span}>{error.life}</span>)}
        </div>
        <div>
            <label> Attack </label>
            <input type='range' min='0' max='150' value={input.attack} name="attack"  onChange={handleChange} className={style.range} style={
                          error.attack ? { boxShadow: 'inset 0 0 6px #ff1f1f'} : null
                        }/>
            {!error.attack ? null : (<span className={style.span}>{error.attack}</span>)}
        </div>
        <div>
            <label> Defense </label>
            <input type='range' min='0' max='150'value={input.defense} name="defense"  onChange={handleChange} className={style.range} style={
                          error.defense ? { boxShadow: 'inset 0 0 6px #ff1f1f'} : null
                        }/>
            {!error.defense ? null : (<span className={style.span}>{error.defense}</span>)}
        </div>
        <div>
            <label> Speed </label>
            <input type='range' min='0' max='150' value={input.speed} name="speed"  onChange={handleChange} className={style.range} style={
                          error.speed ? { boxShadow: 'inset 0 0 6px #ff1f1f'} : null
                        }/>
            {!error.speed ? null : (<span className={style.span}>{error.speed}</span>)}
        </div>
        <div>
            <label> Height </label>
            <input type='range' min='0' max='150' value={input.height} name="height"  onChange={handleChange} className={style.range} style={
                          error.height ? { boxShadow: 'inset 0 0 6px #ff1f1f'} : null
                        }/>
            {!error.height ? null : (<span className={style.span}>{error.height}</span>)}
        </div>
        <div>
            <label> Weight </label>
            <input type='range' min='0' max='150' value={input.weight} name="weight" onChange={handleChange} className={style.range} style={
                          error.weight ? { boxShadow: 'inset 0 0 6px #ff1f1f'} : null
                        }/>
            {!error.weight ? null : (<span className={style.span}>{error.weight}</span>)}
        </div>
        </div>
        <div className={style.contenedorSelect}>
            <label>Types</label>
           <select onChange={handleSelect} className={style.select}>
            {types?.map((ty)=>{
                return(
                    <option value={ty.name} key={ty.name} name='type'> {ty.name}</option>
                );
            })}
           </select>
           {!error.type ? null : (<span className={style.span}>{error.type}</span>)}
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
        <button type='submit' className={style.btnCrear}> Crear personaje </button>
        </div>
        </div>
    </form>
    </div>
    
    </div>
         
    )
}

export default CreatePoke;