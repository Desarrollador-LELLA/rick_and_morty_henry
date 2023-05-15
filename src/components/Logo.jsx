import logo from '../imagenes/logo.png';

function Logo(props){

    const { claseNombre } = props;

    return(
        <div className={claseNombre}>
            <img src={logo} alt="Logo" width='130px' />
        </div>
    )
}

export default Logo;