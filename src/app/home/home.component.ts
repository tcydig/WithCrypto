import { Component } from '@angular/core';
import { EncoderDecoderComponent } from '../encoder-decoder/encoder-decoder.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports:[EncoderDecoderComponent]
})
export class HomeComponent {

}
