import {
  GET_ALL_PRODUCT_URL,
  GET_PRODUCT_BY_SLUG_URL,
} from "@/services/api/product-urlPath";
import { API } from "../auth/route_url";

// export const get_All_Products_Api = async () =>
//   API.post(GET_ALL_PRODUCT_URL,{}, { withCredentials: true });

export type IGetAllFilterKey = "categorySlug"|"slug"|"brand"|"color"|"sort"|""

export const get_All_Products_Api = (
  filters?: { key: IGetAllFilterKey; value: string }[]
) => {
  const params: Record<string, string> = {};

  if (filters) {
    filters.forEach((filter) => {
      params[filter.key] = filter.value; // ✅ Convert array to query parameters
    });
  }

  return API.post(GET_ALL_PRODUCT_URL,{}, {
    withCredentials: true,
    params, // ✅ Send dynamic query params
  });
};

// 2 get product details with slug
export const get_Product_Details_With_Slug_Api = async (slug: string) =>
  API.get(`${GET_PRODUCT_BY_SLUG_URL}/${slug}`, { withCredentials: true });
