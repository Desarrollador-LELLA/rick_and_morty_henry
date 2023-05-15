import s from '../cssmodulos/botonicono.module.css';

function BotonIcono({ onClicks, icono, alts, txt, types, name }) {
    return (
        <button name={name} className={s.boton} onClick={onClicks} type={types}>
            <img src={icono} alt={alts} width='22px' height='22px' />
            <span>{txt}</span>
        </button>
    );
}

export default BotonIcono;