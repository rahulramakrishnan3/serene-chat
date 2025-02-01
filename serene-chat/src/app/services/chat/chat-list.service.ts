import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatListService {
  private jsonUrl = 'assets/json/chat_list.json';

  constructor(private http: HttpClient) { }

  getChatList(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
}
