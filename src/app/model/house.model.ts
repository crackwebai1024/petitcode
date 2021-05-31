import { Injectable } from '@angular/core';

@Injectable()
export class House {
  constructor(
    public id: number,
    public url: string,
    public name: string,
    public region: string,
    public coatOfArms: string
  ) {}
}
