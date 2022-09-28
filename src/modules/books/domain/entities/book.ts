export interface Book {
  _id: string;
  title: string;
  description: string;
  isbn: string;
  pages: number;
  status: string;
  createdAt: Date;
  updatedAt?: Date;
}
