import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    //destructurar la funcion y sacar sus parametros para usarlos.
    //useParams escucha la URL y captura la ruta.
    const { id } = useParams();

    
    return (
        <div>

        </div>
    );
};

export default ItemDetailContainer;