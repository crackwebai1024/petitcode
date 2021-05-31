// import { HouseExtract } from './houseextract.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HouseExtract } from './houseextract.model';

@Injectable()
export class HouseExtractRepository {
  public house: any = {};
  public houseExtracts: HouseExtract[] = [];
  constructor(private http: HttpClient) {}
  private base_url: string = 'https://anapioficeandfire.com/api/houses';

  public getHouses(page: number, pagesize?: number): HouseExtract[] {
    let url: string = `${this.base_url}/?${page ? `page=${page}&` : ''}${
      pagesize ? `pagesize=${pagesize}` : ''
    }`;
    console.log('I was called');
    this.sendRequest(url).subscribe((data) => {
      console.log('request data to backend ==> ', data);
      this.houseExtracts = data.map((item: any) => ({
        id: item.url.split('/')[5],
        url: item.url,
        name: item.name,
        region: item.region,
        coatOfArms: item.coatOfArms,
      }));
    });
    return this.houseExtracts;
  }

  public getHouse(id: number): any {
    let url: string = `${this.base_url}/${id}`;
    this.sendRequest(url).subscribe((data) => {
      console.log('request individual house data to backend ==> ', data);
      this.house = data;
    });
    return this.house;
  }

  private sendRequest(url: string): Observable<any> {
    return this.http.request('GET', url);
  }
}
