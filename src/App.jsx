// Importamos los estilos de App.css
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
// Exportamos el componente App para el main.jsx
export function App(){
    return (
        <>
        <TwitterFollowCard isFollowing={true} userName="midudev" name="Luis David Cusi Gonzales"/>
        <TwitterFollowCard isFollowing={false}userName="pheralb" name="Lidia Leonor Cusi Gonzales"/>
        <TwitterFollowCard isFollowing={true} userName="elonmusk" name="Lidia Leonor Cusi Gonzales"/>
        </>
        
     
    )
}

