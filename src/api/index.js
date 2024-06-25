import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";


export const getPlacesData = async (sw, ne) => {

  try {
    const options = {
        // since we are using axios the method will by default be 'GET'
        // method: 'GET',
        // url: URL,
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
        //   "x-rapidapi-key": "2fd06344cdmsh6212c9232dc4f59p1381c2jsn8f70de40b4b0",
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        },
      };
      const data = ""
    //const {data:{data}} = await axios.get(URL, options);

    return data;
  } catch (error) {
    console.log(error);
  }
};
