
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Bookinfo } from '../bookinfo';
import { Router, ActivatedRoute } from '@angular/router';
import { BookinfoService } from '../sheared/bookinfo.service';
@Component({
  selector: 'app-add-bookinfo',
  templateUrl: './add-bookinfo.component.html',
  styleUrls: ['./add-bookinfo.component.scss']
})
export class AddBookinfoComponent implements OnInit {
  [x: string]: any;

  private observableSubscription: Array<Subscription> = [];
  formSubmitted = false;
  bookForm: FormGroup;
  bookinfos: Observable<Bookinfo[]>;
  constructor(
    private fb: FormBuilder,
    private bookinfoService: BookinfoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.createForm();
    // this.booksForm.addControl('id', new FormControl(''));
    // this.booksForm.addControl('isbn', new FormControl('', [Validators.required]));
    // this.booksForm.addControl('title', new FormControl('', [Validators.required]));
    // this.booksForm.addControl('subtitle', new FormControl('', [Validators.required]));
    // this.booksForm.addControl('author', new FormControl('', [Validators.required]));
    // this.booksForm.addControl('published', new FormControl('', [Validators.required]));
    // this.booksForm.addControl('publisher', new FormControl('', [Validators.required]));
    // this.booksForm.addControl('pages', new FormControl('', [Validators.required]));
    // this.booksForm.addControl('description', new FormControl('', [Validators.required]));
    // this.booksForm.addControl('website', new FormControl('', [Validators.required]));
    // this.booksForm.addControl('image', new FormControl('', [Validators.required]));
  }
  createForm() {
    this.bookForm = this.fb.group({
      'id': ['',],
      'isbn': ['', Validators.required],
      'title': ['', [Validators.required,]],
      'subtitle': ['', [Validators.required,]],
      'author': ['', [Validators.required,]],
      'published': ['', [Validators.required,]],
      'publisher': ['', [Validators.required,]],
      'pages': ['', [Validators.required,]],
      'description': ['', [Validators.required,]],
      'website': ['', [Validators.required,]],
      'image': ['',],
    });
  }

    onSubmit(post) {
      this.bookinfoService.addNewbooks(post)
      console.log(post)
    }


}
