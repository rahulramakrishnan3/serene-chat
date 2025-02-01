import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonAvatar } from '@ionic/angular/standalone';
import { GenericHeaderComponent } from "../components/generic-header/generic-header.component";
import { ChatListService } from '../services/chat/chat-list.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, GenericHeaderComponent, IonList, IonItem, IonLabel, IonAvatar],
})
export class Tab3Page {
  chatList: any[] | undefined;
  constructor(private chatListService: ChatListService) {}

  public header = {
    label: 'Chat list',
    backButton: false
  }
  
  ngOnInit(){
    this.chatListService.getContacts().subscribe(value => {
      this.chatList = value;
    })
  }
}
