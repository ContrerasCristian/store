import { Category } from "./category.model";

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[];
    category: Category;
    creationAt: string;
}