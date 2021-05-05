import { Book } from './Book';

export interface BookShelf {
    books: Book[];
    last: number;
    maxsize: number;
}
