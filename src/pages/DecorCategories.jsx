import React,{useState, useEffect} from 'react'
import "./DecorCategories.css"
import homedecor from "../DATA/homedecor.json";
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../store/CategorySlice';


const DecorCategories = () => {

    const[categories, setCategories] = useState([]);

    const sortingCategories = () =>{
        const sortedcategories = [...new Set(homedecor.map((wear)=> wear.category))];
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
        <h4 style={{textAlign:"left"}}>Types Of Decors : <div className='filtercat'>
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

export default DecorCategories
