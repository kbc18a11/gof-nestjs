import { Injectable } from '@nestjs/common';
import { Book } from './type/Book';
import { Aggreate } from './type/Aggreate';
import { Iterator } from './type/Iterator';
import { BookShelf } from './type/BookSelf';

@Injectable()
export class BookShelfService implements Aggreate {
    private bookShelf: BookShelf;

    /**
     * 
     * @param maxSize 
     */
    public init(maxSize: number) {
        this.bookShelf.maxsize = maxSize;
    }

    /**
     * 
     * @param index 
     * @returns 
     */
    public getBookAt(index: number): Book {
        return this.bookShelf.books[index];
    }

    /**
     * 
     * @param book 
     */
    public appendBook(book: Book) {
        this.bookShelf.books[this.bookShelf.last] = book;
        this.bookShelf.last++;
    }


    /**
     * 
     * @returns 
     */
    public getLength(): number {
        return this.bookShelf.last
    }

    /**
     * 
     */
    public iterator(): Iterator {
        return new 
    }
}
