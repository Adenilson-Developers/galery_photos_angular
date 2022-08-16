import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;
  file: File;
  constructor(private formBuild: FormBuilder) { }

  ngOnInit(): void {
    this.photoForm = this.formBuild.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    })
  }

  upload(){
    const description = this.photoForm.get('description').value;
    const allowcomments = this.photoForm.get('allowComments').value;
    console.log(description);
    console.log(allowcomments);
    console.log(this.file);
  }

}
