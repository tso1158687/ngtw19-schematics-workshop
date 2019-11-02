import { Component } from '@angular/core';
@Component({
  selector: 'app-kyle',
  template: '<h1>Hello {{ title }}'
})
export class KyleComponent implements OnInit {
  title = 'kyle';

  constructor() { } 

  ngOnInit() { }
}