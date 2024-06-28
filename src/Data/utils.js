const baseUrl = process.env.REACT_API_BASE_URL;
const apiKey = process.env.REACT_API_KEY;

export const getWeather = async() =>{
    try{
        const response = await fetch(`${baseUrl}/v1/forestcast.json? key= ${apiKey}`)
        return response.json();
    }
    catch (error){
        throw new Error(error.message);
    }
};