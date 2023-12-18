export default function FigureGames ({ text, img, alt, onClick }) {
  return (
    <figure onClick={onClick}>
      <img src={img} alt={alt} />
      <figcaption>{text}</figcaption>
    </figure>
  )
}
