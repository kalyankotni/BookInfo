import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBookinfo } from '../bookinfo';
import { BookinfoService } from '../sheared/bookinfo.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
const books: IBookinfo[] = [
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
    image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.uconnectlabs.com%2Fwp-content%2Fuploads%2Fsites%2F25%2F2020%2F04%2FJ.png&imgrefurl=https%3A%2F%2Fcareers.uw.edu%2Fblog%2F2020%2F04%2F20%2Flearn-javascript-in-15-minutes%2F&tbnid=N14O5RoXcE9S4M&vet=12ahUKEwjpkYfu-aPqAhUGSCsKHbGhDn0QMygDegUIARDYAQ..i&docid=PglbtRrBKZJX7M&w=344&h=390&q=javascript%20images&ved=2ahUKEwjpkYfu-aPqAhUGSCsKHbGhDn0QMygDegUIARDYAQ'
  },
]

@Component({
  selector: 'app-view-bookinfo',
  templateUrl: './view-bookinfo.component.html',
  styleUrls: ['./view-bookinfo.component.scss']
})
export class ViewBookinfoComponent implements OnInit {
  dataSource = books;
  book$: Observable<IBookinfo>;
  constructor(private bookInfoService: BookinfoService, private router: Router, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.book$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.bookInfoService.getBookById(Number.parseInt(params.get('id')))
      ));
  }

}
