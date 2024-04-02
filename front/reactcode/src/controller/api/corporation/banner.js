import axios from 'axios';

const fetchCorporationBanner = async () => {
  try {
    const response = await axios.get('http://localhost:1337/api/corporations/1?populate=*');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error to handle it in the component
  }
};

export default fetchCorporationBanner;