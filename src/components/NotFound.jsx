
import carga from '../assets/img/carga2.gif';

export default function NotFound(){
    
    const styles = {
        height: '90vh'
    }

    const msjNotFound = {
        margin: 'auto',
        marginTop: '20%'
    }

    return(
        <div style={ styles }>

            <div style={ msjNotFound } className='w-25 text-center'>
                <img src = { carga } />
            </div>

        </div>
    );
}