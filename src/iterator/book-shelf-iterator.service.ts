import { Injectable } from '@nestjs/common';
import { Iterator } from './type/Iterator';
import { BookSelfIterator } from './type/BookSelfIterator';


@Injectable()
export class BookShelfIteratorService implements Iterator {
    private bookSelfIterator: BookSelfIterator;

    hasNext(): boolean {
        throw new Error('Method not implemented.');
    }
    next(): Object {
        throw new Error('Method not implemented.');
    }

}
