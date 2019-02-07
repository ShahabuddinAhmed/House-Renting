import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from '../service/image.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addimage',
  templateUrl: './addimage.component.html',
  styleUrls: ['./addimage.component.css']
})
export class AddimageComponent implements OnInit {

  filesToUpload: Array<File> = [];
  public adsID: string;
  public formData: any;
  public storeFile: Array<File>;
  public name1: FormControl;
  public name2: FormControl;
  public customFile: File = null;

  private CreateFormControls(): void {
    this.name1 = new FormControl('', [
      Validators.required
    ]);
    this.name2 = new FormControl('', [
      Validators.required
    ]);
  }
  constructor(private _imageService: ImageService, private router: Router) { }

  ngOnInit() {
    this.CreateFormControls();
  }

//   upload() {
//     const formData: any = new FormData();
//     const files: Array<File> = this.filesToUpload;
//     console.log(files);

//     for (let i = 0; i < files.length; i++) {
//         formData.append('uploads[]', files[i], files[i]['name']);
//     }
//     console.log('form data variable :   ' + formData.toString());
//     // this.http.post('http://localhost:3003/upload', formData)
//     //     .map(files => files.json())
//     //     .subscribe(files => console.log('files', files));
// }

fileChangeEvent1(fileInput: any) {
  this.customFile = fileInput.target.files[0];
  // this.product.photo = fileInput.target.files[0]['name'];
  console.log(this.customFile);
}

fileChangeEvent2(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    // this.product.photo = fileInput.target.files[0]['name'];
}

upload1() {
  const userID = '5c49cbb4a2cb7302e022d4cc';
  const fd = new FormData();
    fd.append('picture', this.customFile, this.customFile.name);
    fd.append('userId', userID);
    this._imageService._uploadCoverImage(this.customFile, userID).subscribe(data => {
      // console.log(data["message"]);
     console.log(data);
    }, err => {
      console.log(err);
    });
}

upload2() {
  this.adsID = '5c4fef8d6c190a4090742458';
  this.formData = new FormData();
  for (let i = 0; i < this.filesToUpload.length; i++) {
    this.formData.append('picture[]', this.filesToUpload[i], this.filesToUpload[i]['name']);
  }
  console.log(this.filesToUpload);
  this._imageService._uploadImage(this.formData, this.adsID)
  .subscribe(data => {
    console.log(data);
  },
  err => {
    console.log(err);
  }
  );
}

}
