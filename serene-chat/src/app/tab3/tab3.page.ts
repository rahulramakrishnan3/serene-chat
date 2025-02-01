import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { GenericHeaderComponent } from "../components/generic-header/generic-header.component";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, GenericHeaderComponent],
})
export class Tab3Page {
  constructor() {}
  public header = {
    label: 'Chat list',
    backButton: true
  }
}
