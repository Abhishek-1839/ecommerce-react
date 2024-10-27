import React,{useState, useEffect} from 'react'
import "./Categories.css"
import Footwear from "../DATA/footwear.json";
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../store/CategorySlice';


const Categories = () => {

    const[categories, setCategories] = useState([]);

    const sortingCategories = () =>{
        const sortedcategories = [...new Set(Footwear.map((wear)=> wear.category))];
        setCategories(sortedcategories);
        console.log(sortedcategories);
    };
    useEffect(()=>{
        sortingCategories();
    }, []);

    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.categorys.category);

  return (
    <div>
        <h4 style={{textAlign:"left"}}>Types Of Shoes : <div className='filtercat'>
        <button onClick={() => dispatch(setCategory("All"))} className='butn'>All</button> 
        {categories.map((category, index) => {
            return(
                <button onClick={() => dispatch(setCategory(category))} key={index} className='butn'>{category}</button>
            );
        })}
           
        </div></h4>
        
    </div>
  )
}

export default Categories


 {/* <button className='butn'>Sneakers</button>
            <button className='butn'>Boots</button>
            <button className='butn'>Sports Shoes</button>
            <button className='butn'>Casual Shoes</button>
            <button className='butn'>Loafers</button> */}