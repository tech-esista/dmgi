import { Component, OnInit } from '@angular/core';
import {EnquiriesService} from "../enquiries/enquiries.service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss', '../shared/shared.stylesheet.scss']
})
export class ClientsComponent implements OnInit {

  constructor(private enquiriesService: EnquiriesService) { }

  ngOnInit(): void {
    // this.enquiriesService.addEnquiry();
  }

}
