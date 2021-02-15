import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Object} from '../model'



@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {
  @Input('priceObj') priceObj:Partial<Object>={}

  
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
