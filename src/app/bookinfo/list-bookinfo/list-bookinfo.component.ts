import { Component, OnInit } from '@angular/core';
import { IBookinfo } from '../bookinfo';
import { Observable } from 'rxjs';
import { BookinfoService } from '../sheared/bookinfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-bookinfo',
  templateUrl: './list-bookinfo.component.html',
  styleUrls: ['./list-bookinfo.component.scss']
})
export class ListBookinfoComponent implements OnInit {
  public books: Observable<IBookinfo[]> = null;
  constructor(private bookInfoService: BookinfoService, private router: Router,) { }

  ngOnInit() {
    this.books = this.bookInfoService.getAllProducts();
    console.log(this.books)
  }
  deleteBook(book): void {
    const result = this.bookInfoService.deleteBookinfo(book);
    console.log(result);
  }
  viewBook(book: IBookinfo): void {
    this.router.navigate(["view"]);
  }
}
