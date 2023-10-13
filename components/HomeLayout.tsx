import { categories } from '@/utils/index';
import ProdCard from './ProdCard';

const HomeLayout = () => {
  return (
    <section className='home-layout'>
        {/* left */}
        <section className='left-sec'>
            {
                categories.map((items, key) => (
                    <span className='category'>
                        {items.cName}
                    </span>
                ))
            }
        </section>
        {/* right */}
        <section className='right-sec'>
            {
                categories.map((items, key)=>(
                    <section className='category-right'>
                        <h1>
                            {
                                items.cName
                            }
                        </h1>
                        <section className='category-prods'>
                            {
                                items.cProds.map((prod, key)=>(
                                    <ProdCard
                                        title={prod.prodName}
                                        img={prod.prodImg}
                                        price={prod.price}
                                        weight={prod.weight}
                                     />
                                ))
                            }
                        </section>
                    </section>
                )
                )
            }
        </section>
        </section>
   
  )
}

export default HomeLayout