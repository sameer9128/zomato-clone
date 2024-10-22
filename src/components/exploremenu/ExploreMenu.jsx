import { menu_list } from "../../assets/assets"
import './ExploreMenu.css'
export default function ExploreMenu({category,setCategory}){
    return(
        <div className="explore-menu" id="explore-menu">
            <h1>Explore our menu</h1>
            <p className="explore-menu-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eum, eligendi, maiores blanditiis odit iure odio ex totam dicta, sit atque voluptates alias? Perferendis rem numquam facilis enim, alias voluptas.
           </p>
            <div className="explore-menu-list">
                {menu_list.map((item,index)=>{
                    return(
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className="explore-menu-list-item" key={index}>
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}

            </div>
            <hr />


        </div>
    )
}