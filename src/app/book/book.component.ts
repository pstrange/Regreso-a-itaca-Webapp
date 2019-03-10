import { Component, OnInit, OnDestroy } from '@angular/core';
import { CrudService } from '../shared/crud.service';
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
  public identifiers: string = "";

  constructor(private route: ActivatedRoute, 
              public booksService: CrudService) {}
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.booksService.getBook(params['id']).snapshotChanges().subscribe(data => {
        if(data.payload.val()){
          this.book = data.payload.val();
          this.book.volumeInfo.industryIdentifiers.forEach(element => {
            this.identifiers += this.identifiers.length == 0 ? element.identifier : ", "+element.identifier;
          });
          console.log(this.identifiers);
        }
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
