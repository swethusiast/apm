import { StarComponent } from './star/star.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';

@NgModule({
  declarations: [StarComponent, ConvertToSpacesPipe],
  imports: [CommonModule],
  exports: [CommonModule, FormsModule, ConvertToSpacesPipe, StarComponent],
})
export class SharedModule {}
