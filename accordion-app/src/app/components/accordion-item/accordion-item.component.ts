import { Component, OnInit, Input } from '@angular/core';
import { AccordionService } from '../../services/accordion.service';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css'],
})
export class AccordionItemComponent implements OnInit {
  @Input() entry: any;
  uncollapsed = false;
  totalAngularPackages = [];
  constructor(private service: AccordionService) {}

  ngOnInit() {
    this.service.onEntryClick.subscribe(() => {
      this.uncollapsed = false;
    });
  }

  onBtnClick() {
    this.service.collapseAllEntries();
    this.uncollapsed = true;
  }
}
