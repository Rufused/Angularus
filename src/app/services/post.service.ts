import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models/IPost";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/'
  constructor(private httpClient:HttpClient) {};

  getAllPosts():Observable<IPost[]>{
    return this.httpClient.get<[]>(this.url + 'posts');
  }
  getPostById(id:number):Observable<IPost>{
    return this.httpClient.get<IPost>(this.url + 'posts' + '/' + id);
  }

}
