import React,{useState, useEffect} from 'react'
import "./Categories.css"
import Footwear from "../DATA/footwear.json";
import { useDispatch, useSelector } from 'react-redux';
import { setGender } from '../store/GenderSlice';


const Genders = () => {

    const[genders, setGenders] = useState([]);

    const sortingCategories = () =>{
        const sortedcategories = [...new Set(Footwear.map((wear)=> wear.gender))];
        setGenders(sortedcategories);
        console.log(sortedcategories);
    };
    useEffect(()=>{
        sortingCategories();
    }, []);

    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.gender.category);

  return (
    <div>
        <h4 style={{textAlign:"left"}}>Gender : <div className='filtercat'>
        <button onClick={() => dispatch(setGender("All"))} className='butn'>All</button> 
        {genders.map((gender, index) => {
            return(
                <button onClick={() => dispatch(setGender(gender))} key={index} className='butn'>{gender}</button>
            );
        })}
           
        </div></h4>
        
    </div>
  )
}

export default Genders
