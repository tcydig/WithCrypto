import { Component } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {NgIf,NgFor} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  shift: number;
  flat: string;
  crypto: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-caesar-cipher',
  templateUrl: './caesar-cipher.component.html',
  styleUrls: ['./caesar-cipher.component.scss'],
  standalone:true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf,MatIconModule,MatSelectModule,NgFor,MatButtonModule,MatTableModule],
})
export class CaesarCipherComponent {

  // shift nuber list
  shiftNumber = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]

  // From control
  textForm = new FormControl();
  shiftForm = new FormControl();
  
  // flag textarea inputed
  isDisable = true

  displayedColumns: string[] = ['result-shift', 'result-flat', 'result-crypto'];
  dataSource = ELEMENT_DATA;

  // textArea Error
  getErrorMessageInTextArea() {
    return '半角英字と空文字のみ使用できます';
  }

  // select shift number Error
  getErrorMessageInSelectShiftNumber() {
    return 'シフト数を選択してください';
  }  

  // onInput with flatText
  onInput(event: any) {
    // get the input's value
    let text = event.target.value;

    if (text == ''){
      this.isDisable = true
    } else {
      this.isDisable = false
    }
  }

  // event when clicked encode button
  onEncode() {
    this.dataSource = []
    if (Number(this.shiftForm.value) == 0) {
      for (let i = 1; i < 27; i++) {
        this.dataSource.push({shift: i, flat: this.textForm.value, crypto: shiftWithNumber(i,this.textForm.value)})
      }
    } else {
      this.dataSource = [{shift: Number(this.shiftForm.value), flat: this.textForm.value, crypto: shiftWithNumber(Number(this.shiftForm.value),this.textForm.value)}]
    }
  }

  // event when clicked encode
  onDecode() {
    this.dataSource = []
    if (Number(this.shiftForm.value) == 0) {
      for (let i = 1; i < 27; i++) {
        this.dataSource.push({shift: i, flat: shiftWithNumber(i,this.textForm.value), crypto: this.textForm.value})
      }
    } else {
      this.dataSource = [{shift: Number(this.shiftForm.value), flat: shiftWithNumber(Number(26-this.shiftForm.value),this.textForm.value), crypto: this.textForm.value}]
    }
  }
}

function shiftWithNumber(shiftNum:number, text:String): string {
  let shiftedText: string = ''

  for (let char of text) {
    if (char.match(/\s|□/)){
      // if it is half-width space or full-width space
      shiftedText = shiftedText.concat(char)
      continue
    }

    let asciiCode: number = char.charCodeAt(0)
    let shiftedAsciiCode: number = 0
    if (asciiCode >= 65 && 90 >= asciiCode) {
      // if it is upper case
      shiftedAsciiCode = (asciiCode + shiftNum) > 90 ? 64 + ((asciiCode + shiftNum)-90) : (asciiCode + shiftNum)
    } else {
      // if it is lower case
      shiftedAsciiCode = (asciiCode + shiftNum) > 122	 ? 96 + ((asciiCode + shiftNum)-122) : (asciiCode + shiftNum)
    }
    shiftedText = shiftedText.concat(String.fromCharCode(shiftedAsciiCode))
  }
  return shiftedText
}
