import Card from './Card';

const CardList = ({robohash}) => {
 
  return (
    <div>
        {
            robohash.map(({id, name, email}) => {
                return (
                    <Card key={id} id={id} name={name} email={email}/>
                )
            })
        }
    </div>
  );
};

export default CardList;
