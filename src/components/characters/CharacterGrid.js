import React from 'react'
import CharacterItem from './CharacterItem';
import Spinner from '../ui/Spinner';

const CharacterGrid = ({items, isLoading}) => { //Destructured to items and isLoading -> instead of props as function argument an props.items and props.isLoading
    //return isLoading ? () : () -> Ternary
    return isLoading ? (<Spinner />) : (
    
        <section className="cards ">
            {items.map((item) => (
                <CharacterItem key={item.char_id} item = {item}></CharacterItem>
            ))}
        </section>
        
        
        ) 
            
}

export default CharacterGrid
