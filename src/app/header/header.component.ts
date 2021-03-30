import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  // @Output lets featureSelected be 'emitted' to the parent component which is the app component in this case
  @Output() featureSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  // emits the string passed in from client side when button is clicked.
  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }

}
