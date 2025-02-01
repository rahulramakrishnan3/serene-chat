import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-generic-header',
  templateUrl: './generic-header.component.html',
  styleUrls: ['./generic-header.component.scss'],
  imports: [IonHeader, IonTitle, IonToolbar,IonButtons,IonBackButton,CommonModule]
})
export class GenericHeaderComponent  implements OnInit {
  @Input() headerData: any;

  constructor() { }

  ngOnInit() {console.log('header data',this.headerData)}

}
