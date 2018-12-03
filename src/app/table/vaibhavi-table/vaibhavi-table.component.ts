import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vaibhavi-table',
  templateUrl: './vaibhavi-table.component.html',
  styleUrls: ['./vaibhavi-table.component.css']
})
export class VaibhaviTableComponent implements OnInit {
  /**
   * @Input method use to fatch data from parent to child component
   */
   @Input() headers: any;
   @Input() data: any[];
   /**
    * @output use for any method define in child and use in parent
    * it uses event emitter for emit the event
    */
   @Output() edit= new EventEmitter();
   @Output() delete= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  public clickEdit()
  {
    this.edit.emit();
  }
  public clickDelete()
  {
    this.delete.emit();
  }
}
