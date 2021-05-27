import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import PropTypes from 'prop-types';

const GifExpertApp = ( ) => {

    //const [categories, setCategories] = useState( ['One Punch', 'Samurai X', 'Dragon Ball'] );
    const [categories, setCategories] = useState( ['Attack on Titan'] );

    // const handleAdd = ( category ) => {
    //     // setCategories( [...categories, 'Attack on Titan'] );
    //     setCategories( cats => [ ...cats, category] );
    // }

    // Para Renderizado
    return (
        <> 
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            {/* <button onClick={ handleAdd }>Agregar</button> */}

            <ol>
                { 
                    categories.map( category => 
                        //return <li key={ category + i }>{ category }</li>
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    )
                }
            </ol>
        </>
    );

}

export default GifExpertApp;

