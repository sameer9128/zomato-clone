import { useState } from "react";
import ExploreMenu from "../../components/exploremenu/ExploreMenu";
import Header from "../../components/header/Header";
import FoodDisplay from "../../components/foodDisplay/FoodDisplay";

export default function Home(){
    const [category,setCategory] = useState('All');
    return(
        <div className="home">
            <Header />
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category}/>
        </div>
    )
}
