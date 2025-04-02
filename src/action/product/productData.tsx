import { useQueryData } from "@/hooks/useQueryData";
import { getAllProductAction, getProductWithSlugAction } from "./productAction";
import { IFinalProductTypes } from "@/types/final-product-types";
import { IGetAllFilterKey } from "@/services/user_side_api/products/route";

export const ProductData = (
  filter?: { key: IGetAllFilterKey; value: string }[]
) => {
  const {
    data: fetchedProducts,
    isFetching,
    refetch,
  } = useQueryData(["all-products"], () => getAllProductAction(filter));

  const { data: products = [] } = (fetchedProducts ?? {}) as {
    status?: number;
    data?: IFinalProductTypes[];
  };

  return {
    products,
    isFetching,
    refetch,
  };
};

// #2. this func used for fetching product details
export const ProductDataWithSlug = () => {
  const {
    data: fetchedProducts,
    isFetching,
    refetch,
  } = useQueryData(["product-details"], () => getProductWithSlugAction());

  const { data: products = [] } = (fetchedProducts ?? {}) as {
    status?: number;
    data?: IFinalProductTypes[];
  };

  return {
    products,
    isFetching,
    refetch,
  };
};
