import { Component, OnInit } from '@angular/core';
import { UserDataTransferService } from '../user-data-transfer.service';

@Component({
  selector: 'app-signedin',
  templateUrl: './signedin.component.html',
  styleUrls: ['./signedin.component.css']
})
export class SignedinComponent implements OnInit {
  userData;
  constructor(private data: UserDataTransferService) { }

  ngOnInit() {

     this.userData=this.data.getData();
     console.log(this.userData.name);

  }

}
