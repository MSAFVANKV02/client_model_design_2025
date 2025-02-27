export type IProducts = {
  _id: number;
  user_id: string;
  product_name: string;
  product_price: number;
  product_description: string;
  product_category: string;
  product_images: string[];
  product_created_at: Date;
  product_updated_at: Date;
  product_features: string;
  special_features: string
  care_guid: string;
  thumbnail: string;
  galleryImages: string[];
  variants: IVariants[];
};

export interface IPriceVariants {
  _id: number;
  min_purchase_qty: number;
  max_purchase_qty: number|string;
  price: number;
}

export interface ISizeVariants {
  _id: number;
  price_per_Pieces: IPriceVariants[];
  size: string;
}

export type IVariants = {
  _id: number;
  stock: string;
  sizeVariant: ISizeVariants[];
  colors: string[];
  price: number;
  photos: string[];
  sizeChart: string;
};
