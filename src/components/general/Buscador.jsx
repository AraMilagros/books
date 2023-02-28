
export default function Buscador(props) {

    const getTermino = () => {
        const termino = document.getElementById('busqueda-input').value;
        props.actualizarBusqueda(termino);//aqui se pasa el parametro del metodo que se paso como props desde el componente Libros
    }
    
    const comprobar = () => {
        if(event.code == "Enter"){
            getTermino();
            console.log("se presiono Enter");
        }
    }

    return (
        <>
            <div className="py-4">
                <div className="input-group container w-75">

                    <input className="form-control" type="busqueda" placeholder="Ingresa nombre de un libro..." id="busqueda-input" onKeyUp={ comprobar }/>
                    <button className="btn btn-outline-secondary bg-dark" type="button" onClick={ getTermino }>
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>

        </>
    );
}