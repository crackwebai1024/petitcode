import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HouseExtractRepository } from '../model/houseextract.repository';

@Component({
  selector: 'app-individualhouse',
  templateUrl: './individualhouse.component.html',
  styleUrls: ['./individualhouse.component.css'],
})
export class IndividualhouseComponent implements OnInit {
  private page: number = 0;
  public nestArr: string[] = [
    'titles',
    'seats',
    'ancestralWeapons',
    'cadetBranches',
    'swornMembers',
  ];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private houseExtractRepository: HouseExtractRepository
  ) {}

  ngOnInit(): void {
    this.getActivatedRoutes();
  }

  getActivatedRoutes() {
    this.activatedRoute.params.subscribe((params) => {
      this.page = params.page;
      this.houseExtractRepository.getHouse(params.id);
    });
  }

  get house(): any {
    return Object.entries(this.houseExtractRepository.house);
  }

  goBack() {
    this.router.navigate([`/house/${this.page}`]);
  }
}
