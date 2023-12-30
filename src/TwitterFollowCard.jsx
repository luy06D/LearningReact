// Este componente si se podra reutilizar - atravez de parametros
import Luis_img from './img/userLuis2.jpg'
export function TwitterFollowCard({userName, name, isFollowing}){
    
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
            <button className="btn-seguir">
                Seguir
            </button>
        </aside>      
    </article>

    )
}