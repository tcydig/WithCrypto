import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-encoder-decoder',
  standalone: true,
  imports: [CommonModule,MatTabsModule,MatDividerModule,MatListModule],
  templateUrl: './encoder-decoder.component.html',
  styleUrls: ['./encoder-decoder.component.scss']
})
export class EncoderDecoderComponent {
}
