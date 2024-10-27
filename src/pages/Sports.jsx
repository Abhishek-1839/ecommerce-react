import React,{useState, useEffect} from 'react'
import "./Categories.css"
import sportgoods from "../DATA/sportsgoods.json";
import { useDispatch, useSelector } from 'react-redux';
import { setGender } from '../store/GenderSlice';


const Sports = () => {

    const[sporty, setSporty] = useState([]);

    const sortingCategories = () =>{
        const sortedcategories = [...new Set(sportgoods.map((wear)=> wear.sports))];
        setSporty(sortedcategories);
        console.log(sortedcategories);
    };
    useEffect(()=>{
        sortingCategories();
    }, []);

    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.gender.category);

  return (
    <div>
        <h4 style={{textAlign:"left"}}>Types of sports : <div className='filtercat'>
        <button onClick={() => dispatch(setGender("All"))} className='butn'>All</button> 
        {sporty.map((spotyp, index) => {
            return(
                <button onClick={() => dispatch(setGender(spotyp))} key={index} className='butn'>{spotyp}</button>
            );
        })}
           
        </div></h4>
        
    </div>
  )
}

export default Sports
