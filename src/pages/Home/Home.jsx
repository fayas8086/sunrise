import React from 'react'
import Corosel from '../../pages/Corrosel/Corosel';
import Illumina from '../../pages/Illumina/Illumina';
import Lets from '../../pages/Lets/Lets';
import Product from '../../pages/Poducts/Product';
import Imag from '../../pages/Imag/Imag'
import Areas from '../../pages/Areas/Areas';
import Blog from '../../pages/Blog/Blog';
import Categor from '../../pages/Categor/Categor'

function Home() {
  return (
    <>
      <Corosel/>
   <Product/>
   <Categor/>
   <Product/>
   <Areas/>
   <Imag/>
   <Illumina/>
   <Lets/>
   <Blog/>
   </>
  )
}

export default Home