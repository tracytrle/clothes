import dayjs from 'dayjs';
import { ICategory } from 'app/shared/model/category.model';

export interface IProduct {
  id?: number;
  name?: string;
  createdDate?: string | null;
  productSize?: string;
  price?: number | null;
  gender?: string;
  color?: string;
  lastModifiedDate?: string | null;
  createdBy?: number | null;
  lastModifiedBy?: number | null;
  category?: ICategory;
}

export const defaultValue: Readonly<IProduct> = {};
