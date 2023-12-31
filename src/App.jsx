// Importamos los estilos de App.css
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
// Exportamos el componente App para el main.jsx
export function App(){
    return (
        <>
        <TwitterFollowCard 
        userName="midudev" 
        name="Luis David Cusi Gonzales"/>

        <TwitterFollowCard 
        userName="pheralb" 
        name="Juan Gonzales"/>

        <TwitterFollowCard
         userName="elonmusk" 
         name="Lidia Leonor Cusi Gonzales"/>
        </>
        
     
    )
}

