// import {z} from 'zod'
// const AVAILABLE_COLORS = ["Red","Green","Blue"] as const
// const AVAILABLE_SORT = ["none","price-asc","price-dsc"] as const
// const AVAILABLE_SIZES = ["SM","LG","XL"] as const

// export const ProductFilterValidator = z.object({
//     color:z.array(z.enum(AVAILABLE_COLORS)),
//     size:z.array(z.enum(AVAILABLE_SIZES)),
//     sort:z.enum(AVAILABLE_SORT),
//     price:z.tuple([z.number(), z.number()])
// })

// export type ProductState = Omit<z.infer<typeof ProductFilterValidator>,"price"> & {
//     price:{isCustom:boolean;range:[number, number]}
// }
import { z } from 'zod';

const AVAILABLE_SORT = ["none", "price_asc", "price_desc","best_selling"] as const;

export const ProductFilterValidator = z.object({
  color: z.array(z.string()),
  size: z.array(z.string()),
  sort: z.enum(AVAILABLE_SORT),
  price: z.tuple([z.number(), z.number()])
});

export type ProductState = Omit<z.infer<typeof ProductFilterValidator>, "price"> & {
  price: { isCustom: boolean; range: [number, number] }
};
