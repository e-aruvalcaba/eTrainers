import { OnInit, Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { NbSidebarService } from '@nebular/theme';

import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Feedback',
    icon: 'person-done-outline',
    link: '',
    home: true,
    children: [{
        title: 'Reports',
        // link: '/pages/layout/stepper',
        children: [{
          title: 'Usage Report',
          link: 'usagereport'
        },{
          title: 'Networking report',
          link: 'usagereport'
        },{
          title: 'Ranking Report',
          link: 'rankingreport'
        }]
      },{
        title: 'Analytics',
        link: '/analytics',
      },{
        title: 'Flaged Feedbacks',
        link: '/flagedfeedbacks',
      },{
        title: 'Manage Teams',
        link: '/teams',
      },{
        title: 'Manage Skills',
        link: '/softskills',
      },]
  },{
    title: 'Onboarding',
    icon: 'people-outline',
    link: 'onboardingModule',
    children: [{
        title: 'New Menu Item',
        link: '',
      }]
  },{
    title: 'Objectives',
    icon: 'checkmark-circle-outline',
    link: 'objectivesModule',
    children: [{
        title: 'New Menu Item',
        link: '',
      },{
        title: 'New Menu Item',
        link: '',
      }]
  },{
    title: 'Learning',
    icon: 'book-open-outline',
    link: 'learningModule',
    children: [{
        title: 'New Menu Item',
        link: '',
      }]
  },{
    title: 'Recognition',
    icon: 'award-outline',
    link: 'RecognitionModule',
    children: [{
        title: 'New Menu Item',
        link: '',
      }]
  },{
    title: 'Gamification',
    icon: 'gift-outline',
    link: 'RecognitionModule',
    children: [{
        title: 'New Menu Item',
        link: '',
      }]
  }
  
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'nebular';

  menu = MENU_ITEMS;
  currentUser="User 1";
  userPictureOnly: boolean = false;
  user: object={
    name: "Jhon Smith",
    picture: "data:image/jpeg;base64,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"
  };

  themes:string[] = ["Theme 1", "Theme 2", "Theme 3", "Theme 4"];

  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];
  
  constructor(private translate: TranslateService, private _sidebar:NbSidebarService) {
    translate.setDefaultLang('en');
  }
  ngOnInit(){

  }

  toggleSidebar(){
    
    this._sidebar.toggle();
  }
}
