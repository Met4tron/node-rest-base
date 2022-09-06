import { BaseEntity } from '@modules/common/interfaces/BaseEntity';

export interface User extends BaseEntity {
  name: string;
  email: string;
  password: string;
}
