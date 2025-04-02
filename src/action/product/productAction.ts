import { get_All_Products_Api, IGetAllFilterKey } from "@/services/user_side_api/products/route";

export const getAllProductAction = async (  filter?: { key: IGetAllFilterKey; value: string }[]) => {
    try {
        const response = await get_All_Products_Api(filter);
        console.log(response)
        if(response.status === 200 || response.status === 201) {
            return {
                data:response.data.data,
                message:response.data.message,
                status:response.status
            }
        }
    } catch (error:any) {
        console.error(error);
        if(error){
            return {
                data: [],
                message:error.response.message,
                status: error.response?.status || 500
            }
        }
    }
}



export const getProductWithSlugAction = async () => {
    try {
        const response = await get_All_Products_Api();
        // console.log(response)
        if(response.status === 200 || response.status === 201) {
            return {
                data:response.data.data,
                message:response.data.message,
                status:response.status
            }
        }
    } catch (error:any) {
        // console.error(error);
        if(error){
            return {
                data: [],
                message:error.response.message,
                status: error.response?.status || 500
            }
        }
    }
}