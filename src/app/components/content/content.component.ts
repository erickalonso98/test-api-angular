import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public dataArray:Array<any>;
  public list:string;
  constructor(private _userService:UserService) { 
    this.list = 'Lista de usuarios'
  }

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers():void{
    this._userService.getUser().subscribe(
      (response) => {
        this.dataArray = response.data;
        console.log(this.dataArray);
      },
      (error) => {
        console.error(<any>error)
      }
    );
  }

}
