import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  constructor(private httpClient: HttpClient) { }

  getTest()
  {
    this.httpClient.get("http://localhost:60364/api/values").subscribe((res)=>{
      console.log(res);
  });
  }
}
