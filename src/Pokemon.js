import "./Pokemon.css";

export default function Pokemon() {
  const random = Math.floor(Math.random() * 151 + 1);
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${random}.png`;
  return (
    <div className="Pokemon">
      <h1>Pokedex #{random}</h1>
      <img src={url} alt="" />
    </div>
  );
}
