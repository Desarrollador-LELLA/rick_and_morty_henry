import Card from './Card';
import s from '../cssmodulos/cards.module.css';

export default function Cards(props) {
   const { characters, onClose } = props;
   return (
      <>
         {characters.length === 0 ?
            <div className={s.sincards}>
               <h3>Sin Cards Agregadas</h3>
            </div>
            :
            <div className={s.cards}>
               {
                  characters.map(x => {
                     return <Card name={x.name}
                        species={x.species}
                        gender={x.gender}
                        image={x.image}
                        onClose={onClose}
                        key={x.id}
                        id={x.id} />;
                  })
               }
            </div>
         }
      </>
   );
}
