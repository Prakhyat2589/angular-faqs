import { Component, OnInit } from '@angular/core';
import { AccordionService } from '../../services/accordion.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  entries: any[] = [];
  constructor(private service: AccordionService) {}

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      this.entries = data;
    });
  }

  onBtnClick(): void {
    this.service.collapseAllEntries();
  }
}
