import Cards from '../components/Cards.jsx';
import s from '../cssmodulos/home.module.css'

function Home({ characters, onClose }) {
    return (
        <div className={s['contenedor-home']}>
            <h1>Home</h1>
            <Cards
                characters={characters}
                onClose={onClose}
            />
        </div>
    );
}

export default Home;