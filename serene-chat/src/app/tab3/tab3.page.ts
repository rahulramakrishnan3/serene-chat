import { Component } from '@angular/core';
import { IonContent, IonList, IonItem, IonLabel, IonAvatar, IonRefresher, IonRefresherContent } from '@ionic/angular/standalone';
import { GenericHeaderComponent } from "../components/generic-header/generic-header.component";
import { ChatListService } from '../services/chat/chat-list.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonContent, GenericHeaderComponent, IonList, IonItem, IonLabel, IonAvatar, IonRefresher, IonRefresherContent],
})
export class Tab3Page {
  chatList: any[] | undefined;
  constructor(private chatListService: ChatListService) {}

  public header = {
    label: 'Chat list',
    backButton: false
  }
  
  ngOnInit(){
    this.getChatList();
  }

  getChatList(){
    this.chatListService.getChatList().subscribe(value => {
      this.chatList = value;
    });
  }

  handleRefresh(event: CustomEvent) {
    setTimeout(() => {
      this.getChatList();
      (event.target as HTMLIonRefresherElement).complete();
    }, 1000);
  }
}
