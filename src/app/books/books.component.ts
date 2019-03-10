import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../shared/crud.service';
import { Book } from '../shared/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, OnDestroy {

  public books: Book[] = Array<Book>();
  private sub: any;

  constructor(private route: ActivatedRoute, public booksService: CrudService, private router: Router) {}

  ngOnInit() {

    this.sub = this.booksService.getBooks().snapshotChanges().subscribe(data => {
      if(data.length > 0){
        data.forEach(snapshot => {
          this.books.push(snapshot.payload.val())
        });
      }
    });

  }

  onClickBook(book: Book){
    //console.log(book);
    this.router.navigate([`./books/${book.id}`]);
  }

  ngOnDestroy(){
    this.sub.unsubscribe()
  }
}
