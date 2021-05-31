import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  public start: number = 1;
  public last: number = 45;
  public selected: number = 1;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(page: number) {
    this.router.navigate([`house/${page}`]);
  }

  goForward() {
    this.start += 5;
    this.selectPage(this.start);
  }

  goBackward() {
    if (this.start >= 6) {
      this.start -= 5;
    }
    this.selectPage(this.start);
  }

  goFirst() {
    this.start = 1;
    this.selectPage(this.start);
  }

  goLast() {
    this.start = 41;
    this.selectPage(this.start);
  }

  get pages(): number[] {
    return [0, 1, 2, 3, 4].map((item) => {
      if (this.start + item <= this.last) {
        return this.start + item;
      }
      return 0;
    });
  }

  selectPage(page: number) {
    this.selected = page;
    this.navigate(page);
  }
}
