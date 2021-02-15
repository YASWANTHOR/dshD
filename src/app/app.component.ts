import { Component } from '@angular/core';
import {Object} from "./model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard2';
  data:Array<Object>=[
    {
        planName:"EARNINGS (MONTHLY)",
        amount:"$40,000"

    },
    {
      planName:"EARNINGS (ANNUAL) ",
      amount:"$215,000"

    },
    {
      planName:"TASKS",
      amount:"50%"
    },
    {
      planName:"PENDING REQUESTS",
      amount:"18"
    }
  ]

  constructor(){
    this.data.forEach((element) => {

    })
  }
}
