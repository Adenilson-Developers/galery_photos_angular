import { Router } from '@angular/router';
import { PhotoService } from './../photo/photo.service';
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
  constructor(
    private formBuild: FormBuilder,
    private photoService: PhotoService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.photoForm = this.formBuild.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    })
  }

  upload(){
    const description = this.photoForm.get('description').value;
    const allowComments = this.photoForm.get('allowComments').value;
    this.photoService
    .upload(description, allowComments, this.file)
    .subscribe( ()=> this.router.navigate(['']))
  }

}
