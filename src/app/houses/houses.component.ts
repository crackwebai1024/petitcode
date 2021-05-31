import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HouseExtract } from '../model/houseextract.model';
import { HouseExtractRepository } from '../model/houseextract.repository';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
})
export class HousesComponent implements OnInit {
  private page: number = 0;
  private pageSize: number = 10;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private houseExtractRepository: HouseExtractRepository
  ) {}

  ngOnInit(): void {
    this.getActivatedRoutes();
    // this.getPageItems();
  }

  getActivatedRoutes() {
    this.activatedRoute.params.subscribe((params) => {
      console.log('params==>', params);
      this.page = params.page;
      this.houseExtractRepository.getHouses(this.page, this.pageSize);
    });
  }

  get items(): readonly HouseExtract[] {
    return this.houseExtractRepository.houseExtracts;
  }

  navigate(link: any) {
    console.log('link ==> ', link);
    this.router.navigate([`house/${this.page}/${link}`]);
  }
}
