
export default function Buscador(props) {
    
    const getTermino = () => {
        console.log("hola");
        const termino = document.getElementById('busqueda-input').value;
        console.log(termino);
        props.actualizarBusqueda(termino);
    }

    return (
        <>
            <div className="py-4">
                <div className="input-group container w-75">

                    <input className="form-control" type="busqueda" placeholder="Ingresa nombre de un libro..." id="busqueda-input" />
                    <button className="btn btn-outline-secondary bg-dark" type="button" onClick={getTermino}>
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>

        </>
    );
}