import axios from 'axios';

const accessToken = localStorage.accessToken;

const axiosConfig = axios.create({
  headers: {"Authorization" : "Bearer " + accessToken}
});

const ajaxHelpers = {
  getMusicTwo: function(){
    return axiosConfig('https://api.vimeo.com/categories/Sports/videos?per_page=3')
  }
}

export default ajaxHelpers;
