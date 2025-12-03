// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../contexts/ShopContext'
// import { assets } from '../assets/assets';
// import Title from '../components/Title';
// import ProductIteam from '../components/ProductIteam';


// const Collection = () => {

//   const { products } =useContext(ShopContext);
//   const[showFilter,setShowFilter]=useState(false);
//   const [filterProducts,setFilterProducts] = useState([]);
//   const [category, setCategory ]= useState([]);
//   const[subCategory , setSubCatergory] = useState([]);

//   const toggleCategory =(e)=>{
//     if(category.includes(e.target.value)){
//       setCategory(prev=>prev.filter(item => item !== e.target.value))

//     }
//     else{
//       setCategory(prev => [...prev,e.target.value])
//     }
//   }

//   useEffect(()=>{
//     setFilterProducts(products);

//   },[])

//   useEffect(()=>{
//     console.log(category);
//   },[category])

//   return (
//     <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
// {/*filter option*/}
//       <div className='min-w-60'>
//         <p  onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
//           <img className={`h-3 sm:hidden ${"showFilter" ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt=" " />
//         </p>
//         {/*categrory filter*/}
//         <div div className={`border border-gray-300 pl-5 py-3 mt-6 ${"showFilter" ? '' :' hidden'}`}>
//         <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
//         <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>

//           <p className='flex gap-2'>
//             <input  className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory}/>Men
//           </p>

//            <p className='flex gap-2'>
//             <input  className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory}/>Women
//           </p>

//            <p className='flex gap-2'>
//             <input  className='w-3' type="checkbox" value={'kids'} onChange={toggleCategory}/>kids
//           </p>
          
//           </div>
//       </div>
//       {/* Sub category filter*/}
//       <div div className={`border border-gray-300 pl-5 py-3 my-5 ${"showFilter "? '' :' hidden'}`}>
//         <p className='mb-3 text-sm font-medium'>TYPE</p>
//         <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>

//           <p className='flex gap-2'>
//             <input  className='w-3' type="checkbox" value={'Topwear'}/>Topwear
//           </p>

//            <p className='flex gap-2'>
//             <input  className='w-3' type="checkbox" value={'Bottomwear'}/>Bottomwear
//           </p>

//            <p className='flex gap-2'>
//             <input  className='w-3' type="checkbox" value={'Winterwear'}/>Winterwear
//           </p>
          
//           </div>
//       </div>
        
//       </div>
//       <div className='flex-1'>
//         <div className='flex justify-between text-base sm:text-2xl mb-4'>
//           <Title text1={' ALL'} text2={' COLLECTIONS'}/>
//           {/*product sort*/}
//           <select className='border-2 border-gray-300 text-sm px-2'>
//             <option value="relavent">Sort by:Relavent</option>
//              <option value="low-high">Sort by:Low to High</option>
//               <option value="high-low">Sort by:High to Low</option>
//           </select>

//         </div>
//         {/*Map products*/}
//         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6'>
//           {
//             filterProducts.map((item ,index)=>{
//               <ProductIteam key={index} 
//               name={item.name} 
//               id={item._id} 
//               price={item.price} 
//               image={item.image}/>
//             })
//           }

//         </div>

//       </div>
//     </div>
//   )
// }

// export default Collection;
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../contexts/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductIteam from '../components/ProductIteam';

const Collection = () => {
  const { products  , search , showSearch} = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sort, sortType] = useState('relavent');
  

  // Toggle Category
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]

    );
  };

  // Toggle SubCategory
  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };
  const applyFilter =() =>{
    let productsCopy =products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

    }

    if(category.length>0){
      productsCopy=productsCopy.filter(item =>category.includes(item.category));
    }
    if(subCategory.length>0){
      productsCopy =productsCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setFilterProducts(productsCopy)
  }

  const sortProduct =()=>{
    let fpCopy = filterProducts.slice();
    switch (sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;

        case 'high-low':
          setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
          break;

          default:
            applyFilter();
            break;
    }
  }
  useEffect (()=>
  {
    applyFilter();
  },[category ,subCategory ,search ,showSearch])

  useEffect(()=>{
    sortProduct();
  },[sortType])

  // Filter + Sort Logic
  useEffect(() => {
    let updatedProducts = [...products];

    if (category.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        category.includes(product.category)
      );
    }

    if (subCategory.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        subCategory.includes(product.subCategory)
      );
    }

    if (sort === 'low-high') {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sort === 'high-low') {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(updatedProducts);
  }, [category, subCategory, sort, products]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Panel */}
      <div className='min-w-60'>
        <p
          onClick={() => setShowFilter(!showFilter)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden sm:block'}`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Men" onChange={toggleCategory} /> Men
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Women" onChange={toggleCategory} /> Women
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value="kids" onChange={toggleCategory} /> Kids
            </label>
          </div>
        </div>

        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden sm:block'}`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Topwear" onChange={toggleSubCategory} /> Topwear
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Bottomwear" onChange={toggleSubCategory} /> Bottomwear
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Winterwear" onChange={toggleSubCategory} /> Winterwear
            </label>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1="ALL" text2="COLLECTIONS" />

          {/* Sort Dropdown */}
          <select
            className='border-2 border-gray-300 text-sm px-2'
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Product Items */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <ProductIteam
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;

