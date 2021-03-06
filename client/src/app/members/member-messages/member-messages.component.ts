import { CheckboxControlValueAccessor, NgForm } from '@angular/forms';
import { MembersService } from './../../_services/members.service';
import { Message } from './../../_models/message';
import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent  {
  @ViewChild("formMessage") formMessage :NgForm;
  @Input() messages : Message[];
  @Input() username : string;
  messageContent : string;
  constructor(public messageService:MessageService) { }

  sendMessage(){
    this.messageService.sendMessage(this.username,this.messageContent).then(() => {
      this.formMessage.reset();
    });
  }
  }


