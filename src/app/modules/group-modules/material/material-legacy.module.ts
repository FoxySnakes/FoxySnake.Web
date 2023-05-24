import { NgModule } from '@angular/core';
import { MatLegacyFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule } from '@angular/material/legacy-input';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatLegacyRippleModule } from '@angular/material/legacy-core';



@NgModule({
  exports: [
    MatLegacyFormFieldModule,
    MatLegacyInputModule,
    MatLegacyButtonModule,
    MatLegacyRippleModule
  ]
})
export class MaterialLegacyModule { }
