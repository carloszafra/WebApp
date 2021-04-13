import { Component, OnInit } from '@angular/core';
import { FetchDataService } from "../../services/fetch-data.service";
import { MatTableDataSource } from "@angular/material/table";
import { Iuser } from 'src/app/models/Iuser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Email', 'City', 'Company'];
  dataSource: MatTableDataSource<Iuser>;

  constructor(
    private _dataSvc: FetchDataService,
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    this._dataSvc.getUsers().subscribe(
      resp => {
        console.log(resp);
        this.dataSource = new MatTableDataSource<Iuser>(resp);
      },
      err => {
        console.log(err);
      }
    )
  }

}
