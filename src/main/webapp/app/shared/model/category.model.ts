import dayjs from 'dayjs';
import { IProduct } from 'app/shared/model/product.model';

export interface ICategory {
  id?: number;
  name?: string;
  description?: string | null;
  createdDate?: string | null;
  lastModifiedDate?: string | null;
  createdBy?: number | null;
  lastModifiedBy?: number | null;
  products?: IProduct[] | null;
}

export const defaultValue: Readonly<ICategory> = {};
