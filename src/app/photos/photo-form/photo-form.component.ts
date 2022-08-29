import { UserService } from './../../core/user/user.service';
import { AlertService } from './../../shared/alert/alert.service';
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
  preview: string;
  
  constructor(
    private formBuild: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
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
    .subscribe( ()=> {
      this.alertService.success('Upload complet!', true);
      this.router.navigate(['/user', this.userService.getUserName()])
    })
  }

  handleFile(file: File){
    this.file = file;
    const readFile = new FileReader();
    readFile.onload = (event: any) => this.preview = event.target.result;
    readFile.readAsDataURL(file);
  }

}
