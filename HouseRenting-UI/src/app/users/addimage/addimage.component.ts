import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from '../service/image.service';

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
  constructor(private _imageService: ImageService, private router: Router) { }

  ngOnInit() {
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

fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    // this.product.photo = fileInput.target.files[0]['name'];
}

upload() {
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
