import axios from 'axios';


export const HOST_API = "https://guarded-fjord-95834.herokuapp.com/";



export const fetchStories = (type) => {
  switch(type) {
    case 'all':
      type = '';
      break;
    case 'comic':
      type = '&type=1';
      break;
    case 'read':
      type = '&type=2';
    default: type = '';
  }
  return axios.get(`${HOST_API}api/categories?order=dateUpdate&orderby=desc${type}`);
}

export const fetchCategories = () => (
  axios.get(`${HOST_API}api/types`)
);

