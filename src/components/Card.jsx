const Card = ({ id, name, email }) => {
  return (
    <div className="bg-light-blue dib br2 pa2 ma3 grow bw4 shadow-7">
      <img src={`https://robohash.org/${id}?set=set2`} alt="robohash" />
      <div key={id}>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
