import {
  Component,
  OnInit
} from '@angular/core';
import {
  ViewContainerRef,
  Directive
} from '@angular/core';
@Directive({
  selector: '[summerprogram-ref-select]',
})
export class SummerprogramRefSelectDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
@Component({
  selector: 'app-summerprogram',
  templateUrl: './summerprogram.component.html',
  styleUrls: ['./summerprogram.component.css'],
})
export class SummerprogramComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}