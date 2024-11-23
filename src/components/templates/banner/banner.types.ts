import { ProductsDataProps } from '@/app/api/products/route';
import { ProfilesDataProps } from '@/app/api/profiles/route';

export type BannerProps = {
  products: Array<ProductsDataProps>;
  profiles: Array<ProfilesDataProps>;
};
