import { Component, OnInit } from '@angular/core';
import { Profile } from '../interfaces/interface';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {





  constructor(private route:ActivatedRoute, private cs:CommonService) { }

  profile:any = {}

  ngOnInit(): void {

    console.log(this.profile);
    // let id:any = this.route.snapshot.paramMap.get("id");
    let id:any = this.route.snapshot.params['id'];
    // this.profile = this.cs.showProfile(id);
    // console.log(this.cs.showProfile(id));

    this.cs.getProfilebyAPI(id).subscribe(profile => {
      console.log(profile);
      this.profile = profile;
      console.log(this.profile);


    })
  }

}
