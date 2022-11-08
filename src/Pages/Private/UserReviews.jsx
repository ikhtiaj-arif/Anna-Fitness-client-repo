import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/UserContext';
import ReviewCard from './ReviewCard';

const UserReviews = () => {
    const {user} = useContext(AuthContext)
//   load filtered reviews
const [allReviews, setAllReviews] = useState([])
console.log(allReviews);

useEffect(()=>{
fetch(`http://localhost:5000/reviews?email=${user?.email}`)
.then(res => res.json())
.then(data => setAllReviews(data))
}, [user?.email])


    return (
        <div>
            <h2>Your Reviews: </h2>
            {
                allReviews.map(review => <ReviewCard
                key={review._id}
                review={review}
                ></ReviewCard>)
            }
            
        </div>
    );
};

export default UserReviews;