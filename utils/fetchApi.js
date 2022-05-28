import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': '7a0852ed29mshdfa55b45c270b7bp14ec01jsn01afae0b4e8c'
    },
  });
    
  return data;
}