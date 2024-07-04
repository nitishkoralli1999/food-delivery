import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
   return(
         <div className="res-card" >
            <img 
            alt="res-logo" 
            className="res-logo"
            src = 
                {CDN_URL +resData.cloudinaryImageId}
            
            />
            <h3> {resData.name}</h3>
            <h4>{resData.locality}</h4>
            <h4>{resData.areaName}</h4>
            <h4>Ratings:{resData.avgRating}</h4>

           
         </div>
    )
};
export default RestaurantCard;