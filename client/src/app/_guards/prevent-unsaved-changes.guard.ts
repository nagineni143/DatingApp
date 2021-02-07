import { MemberEditComponent } from './../members/member-edit/member-edit.component';
import { Injectable, Component } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangesGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component:MemberEditComponent):  boolean{
      if(component.editForm.dirty){
        return confirm("Are you sure you ant to continue?Any unsaved changes will be lost..")
      }
    return true;
  }
  
}
