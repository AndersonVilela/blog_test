import axios, { Axios, AxiosError } from "axios";

export default class HttpClient {

    public async get<T = object>(url: string): Promise<{ status: number, data: T }> {
        try {
            const response = await axios.get<T>(url);
            return { status: response.status, data: response.data }
        } catch (error) {
            const { response } = error as AxiosError;
            throw response;
        }
    };
}