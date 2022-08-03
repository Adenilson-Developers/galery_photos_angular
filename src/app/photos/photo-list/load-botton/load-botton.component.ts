import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-botton',
  templateUrl: './load-botton.component.html',
  styleUrls: ['./load-botton.component.scss']
})
export class LoadBottonComponent implements OnInit {
  @Input() hasMore: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
