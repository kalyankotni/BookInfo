import { Injectable } from '@angular/core';
import { Bookinfo, IBookinfo } from '../bookinfo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookinfoService {
  private bookinfo: Array<Bookinfo> = [
    {
     id:1,
     isbn:'9781593275846',
     title:'Eloquent JavaScript, Second Edition',
     subtitle:'A Modern Introduction to Programming',
     author:'Marijn Haverbeke',
     published:'2014-12-14T00:00:00.000Z',
     publisher:'No Starch Press',
     pages: 472,
     description:'JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
     website:'http://eloquentjavascript.net/',
     image : ''
    },
    {
      id: 2,
      isbn: '9781449331818',
      title: 'Learning JavaScript Design Patterns',
      subtitle: 'A JavaScript and jQuery Developers Guide',
      author: 'Addy Osmani',
      published: '2012-07-01T00:00:00.000Z',
      publisher: 'OReilly Media',
      pages: 254,
      description: 'JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
      website: 'http://eloquenthttp://www.addyosmani.com/resources/essentialjsdesignpatterns/book/javascript.net/',
      image: ''
    },
  ]

  constructor() { }
  getAllProducts(): Observable<IBookinfo[]> {
    return of(this.bookinfo) 
  }
  getBookById(id: number): Observable<IBookinfo> {
    var books = this.bookinfo.find(item => item.id === id);
    return of(books);
  }
  deleteBookinfo(book: IBookinfo): IBookinfo[] {
    const index = this.bookinfo.findIndex(item => item.id === book.id);
    const deletedItem = this.bookinfo.splice(index, 1);
    return deletedItem;
  }
  addNewbooks(books: IBookinfo): void {
    this.bookinfo.sort(item => item.id)
    books.id = this.bookinfo.length + 1
    this.bookinfo.push(books);
  }
}
