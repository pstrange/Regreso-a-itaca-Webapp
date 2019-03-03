import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireObject, AngularFireList} from '@angular/fire/database';
import { Book } from '../shared/book';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  booksRef: AngularFireList<Book[]>;
  bookRef: AngularFireObject<Book>;

  constructor(private db: AngularFireDatabase) { }

  // Read Book
  public getBook(id: string) : AngularFireObject<Book> {
    this.bookRef = this.db.object(`/mylibrary/${id}`);
    return this.bookRef;
  }

}
