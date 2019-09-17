import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
  ngOnChanges() {
    this.starWidth = (this.rating * 75) / 5;
  }
  onClick() {
    this.ratingClicked.emit(`item rating is ${this.rating}.`);
  }
}
