import axios from 'axios';




export const getPlacesData = async(type, lat, lng) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`, {
            params: {
                latitude: lat,
                longitude: lng
            },
            headers: {
                'X-RapidAPI-Key': '50b163201fmsh90f2e3f50299c34p17ec17jsnf18ed7dfe1f3',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getGeoLocation = async(cityName) => {
  const Apikey='ab8e4698dce0f4f5ddc6563cb4be8ad4'
    try {
        const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${Apikey}`, {
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
