import axios from "axios";

export const fetchData = async () => {
    try {
        const response = await axios.get("http://localhost:8000/details");
        return response.data;
    } catch (error) {
        console.error(error.message);
        return null;
    }
};
