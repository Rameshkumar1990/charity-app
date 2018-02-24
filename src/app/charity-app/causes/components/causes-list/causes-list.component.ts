import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';

import { ModalInfoComponent } from '../../../app-common/components/modal-info/modal-info.component';

@Component({
  selector: 'causes-list',
  templateUrl: './causes-list.component.html',
  styleUrls: ['./causes-list.component.css']
})
export class CausesListComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
  }

  donate(){
    this.dialogService.addDialog(ModalInfoComponent, {
      title: 'Thank you',
      messageParaOne: 'Thanks for showing interest in donating.',
      messageParaTwo: 'Please contact us at <Address>.'
    }, {closeByClickingOutside:true})
  }

}
