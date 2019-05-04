import {FOODIE_FETCH} from '../actions';
import {FOODIE_FETCHED} from '../actions';


const initialState = {
    restaurants:[],
    foodieFetch: false,
    foodieFetched: false


};


export const fetchReducer = (state = initialState , action) => {
    switch (action.type) {
        case FOODIE_FETCH:
            return {...state, foodieFetch: true };
        case FOODIE_FETCHED:
            return {
                ...state, 
                foodieFetch: false, 
                restaurants:[...state.restaurants, ...action.payload]
            };

        default:
        return state;
    }
  };
  export default fetchReducer;



  // {
  //   id: 1,
  //   restaurantName: "Archive",
  //   photo: "https://www.kansascitysteaks.com/dyn-images/pdp_hero/Sea_Bass_-_SP13-d12cf4f8ce74a102a0742c07410d6b31.jpg",
  //   foodName: "Chilean Sea Bass",
  //   foodType: "Seafood",
  //   comments: "Best bass I have ever eaten",
  //   rating: 5,
  //   price: 3,
  //   date: "4-29-2019",
  //   restaurantInfo: "12345 Main Street, Salem, Oregon 97303",
  //   favorite: true,
  //   userId: 1
  // },
  // {
  //   id: 2,
  //   restaurantName: "Guv Cup",
  //   photo: "https://www.simplyrecipes.com/wp-content/uploads/2018/09/Sous-Vide-Fish-Tacos-3-600x840.jpg",
  //   foodName: "Fish Tacos with Avocado",
  //   foodType: "Mexican",
  //   comments: "so so good",
  //   rating: 4,
  //   price: 2,
  //   date: "4-30-2019",
  //   restaurantInfo: "2345 Broadway, Salem, Oregon 97303",
  //   favorite: false,
  //   userId: 1
  // },
  // {
  //   id: 3,
  //   restaurantName: "Kolbys",
  //   photo: "https://s3-us-west-2.amazonaws.com/s3.kswdfm.radio.com/s3fs-public/styles/delta__775x515/public/sliders%202.jpg?itok=EuSwUSxb&c=a9557e203ebf8192edf29d414d93517a",
  //   foodName: "Sliders",
  //   foodType: "American",
  //   comments: "great little burgers",
  //   rating: 4,
  //   price: 1,
  //   date: "4-30-2019",
  //   restaurantInfo: "235 Heather Lane, Salem, Oregon 97303",
  //   favorite: false,
  //   userId: 1
  // }