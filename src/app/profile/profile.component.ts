import { Component, OnInit } from '@angular/core';
import { Profile } from '../interfaces/interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile:Profile = {
    ID:1,
    first_name:"Mike",
    last_name:"Andrew",
    user_photo:"https://www.directive.com/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }

  constructor() { }

  ngOnInit(): void {
  }

}
