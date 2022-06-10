import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CharacterCollectionServiceService {

  constructor(private http: HttpClient) {

   }
   posts: any[] = [];

   getPosts(){
    this.http.get("https://localhost:44352/api/Hero/all")
    .subscribe((posts: any) =>{
      this.posts= posts;
    });
   }
}
