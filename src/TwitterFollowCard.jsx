import { useState } from 'react'
import { Button } from '@nextui-org/button'
// Este componente si se podra reutilizar - atravez de parametros
import Luis_img from './img/userLuis2.jpg'
export function TwitterFollowCard({userName, name}){
    // DESESTRUCTURACIÓN 
    // useState me devuelve un array -> la primera posición tiene el valor
    // y la segunda tiene la forma de actualizar
    const [isFollowing, setIsFollowing] = useState(false)

    // OPERADOR TERNARIO
    // si isFolliwing es true el texto sera siguiendo caso contrario sera seguir
    const textBtn = isFollowing ? 'Siguiendo': 'Seguir'
    //Si isFollwing es true se le agrega la clase is-following
    const btnClassName = isFollowing ? 
    'btn-seguir is-following':
    'btn-seguir'

    // Creamos una función handleClick
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
    return (
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img 
            className="tw-img"
            src={`https://unavatar.io/${userName}`}
            alt="El avatar" />
            <div className="columnCard-info">
                <strong >{name}</strong>
                <span className="columnCard-infoUserName">@{userName}</span>
            </div>
        </header>      

        <aside>
       
            <button className={btnClassName} onClick={handleClick}>
                {textBtn}
            </button>
        </aside>      
    </article>

    )
}