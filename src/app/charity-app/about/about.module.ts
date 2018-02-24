import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './components/about.component';
import { MissionComponent } from './components/mission/mission.component';
import { TeamMemberComponent } from './components/team-member/team-member.component';
import { DetailComponent } from './components/detail/detail.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [
        AboutComponent,
        MissionComponent,
        TeamMemberComponent,
        DetailComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AboutComponent
    ]
})
export class AboutModule { }