import axios, { AxiosInstance } from "axios";

// Create an axios instance with custom configuration
const instance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:7788/',
    timeout: 1000,
    headers: {
        'X-Custom-Header': 'foobar',
        'Content-Type': 'application/json' // Set request type to JSON
    }
});

// Function to perform a GET request
export async function getRequest(url: string): Promise<any> {
    try {
        const response = await instance.get(url);
        console.log(response.data); // handle success
        return response.data;
    } catch (error) {
        console.log(error); // handle error
        throw error;
    }
}

// Function to perform a POST request
export async function postRequest(url: string, data: any): Promise<any> {
    try {
        console.log(data); // Log the data to be sent
        const response = await instance.post(url, data);
        console.log(response.data); // handle success
        return response.data;
    } catch (error) {
        console.log(error); // handle error
        throw error;
    }
}
