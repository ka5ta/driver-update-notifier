import { Injectable } from '@angular/core';
import { Driver } from '../model/driver';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http: HttpClient) { }

  public async getProduct(userLink: string): Promise<Product> {
    // let urlTest = "http://localhost:8080/api/drivers?supportUrl=https://www.msi.com/Motherboard/B450-TOMAHAWK-MAX/support";
    let userURL = "http://localhost:8080/api/drivers?supportUrl=" + userLink;


    //console.log(userURL);

    /* const responseObservable: Observable<Driver[]> = this.http.get<Driver[]>(userURL);
    const responsePromise: Promise<Driver[]> = firstValueFrom(responseObservable);
    const response: Driver[] = await responsePromise; */

    // start spinner
    const responseObservable: Observable<Product> = this.http.get<Product>(userURL);
    const responsePromise: Promise<Product> = firstValueFrom(responseObservable);
    const response: Product = await responsePromise;


    return response;
  }
}
