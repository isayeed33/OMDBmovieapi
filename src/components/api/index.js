import axios from 'axios';

const url = "http://www.omdbapi.com";
//http://www.omdbapi.com/?t=Guardians&y=2014&plot=full&apikey=84b50371

export const fetchData = async(name, year) => {
    let changeableUrl = url;
    if(name || year){
        changeableUrl = `${url}/?t=${name}&y=${year}&plot=full&apikey=84b50371`;
    }
    try{
        const {data} = await axios.get(changeableUrl);    
        console.log(data);
        return data;
    }
    catch(error){
        console.log(error);
    }
}