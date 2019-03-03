import { Component, OnInit, OnDestroy } from '@angular/core';
import { CrudService } from '../../shared/crud.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/shared/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {

  private sub: any;
  public book: Book;

  constructor(private route: ActivatedRoute, 
              public booksService: CrudService) {}
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.booksService.getBook(params['id']).snapshotChanges().subscribe(data => {
        if(data.payload.val())
          this.book = data.payload.val();
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
