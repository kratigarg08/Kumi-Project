type PropTypes = {
  title: string,
  price: string,
  weight: string,
  img: string,
};

const ProdCard = ({ title, price, weight, img }: PropTypes) => {
  return (
    <div className='category-prod'>
      <img src={img} alt={title}  />
      <h2>{price}</h2>
      <h3>{title}</h3>
      <p>{weight}</p>
    </div>
  )
}

export default ProdCard