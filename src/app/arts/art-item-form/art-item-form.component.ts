import {Component, OnInit} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArtItemService } from '../../services/art-item.service';
import { trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ArtItemDTO} from '../shared/art.model';


@Component({
  selector: 'app-art-item-form',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule,ReactiveFormsModule],
  templateUrl: './art-item-form.component.html',
  styleUrl: './art-item-form.component.scss',
  animations: [
    trigger('transitionMessages', [
      // define states and transitions here...
    ])
  ]
})
export class ArtItemFormComponent implements OnInit{
  artForm: FormGroup = new FormGroup({});
  category = 'painting';
  selectedFiles: FileList | null = null;
  email = new FormControl('', [Validators.required, Validators.email]);
  isLoading = false;
  imageForm = new FormData();
  formData: FormData = new FormData();

  constructor(
    private formBuilder: FormBuilder, 
    private artItemService: ArtItemService
  ) {}

  ngOnInit(): void {
    this.artForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'author': new FormControl(null, Validators.required),
      'description': new FormControl(null),
      'category': new FormControl('painting', Validators.required),
      'price': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'length': new FormControl(null, Validators.required),
      'width': new FormControl(null, Validators.required),
    });
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    this.selectedFiles = target.files;
  }

  onUpload() {
    console.log("uploading...")
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.imageForm.append('images', this.selectedFiles[i], this.selectedFiles[i].name);
      }
    }
    console.log("uploading done")
  }

  onSubmit() {
    console.log("onSubmit()")
    this.isLoading = true;

    const postArt: ArtItemDTO = { 
      id: 0,
      title: this.artForm.value.title,
      author: this.artForm.value.author,
      description: this.artForm.value.description, 
      category: this.artForm.value.category,
      unitPrice: this.artForm.value.price.toString(),
      imageUrl: 'abc.jpg',
      length: this.artForm.value.length,
      width: this.artForm.value.width,
      height: 0,
      isActive: 'true',
      unitsInStock: 1,
      isPrint: 'false',
      likeCount: 0,
    };

    // post art item and images
    console.log("JSON.stringify(postArt): ",JSON.stringify(postArt));
    this.formData.append('art_item_json', JSON.stringify(postArt));
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.formData.append('images', this.selectedFiles[i], this.selectedFiles[i].name);
      }
    }
    this.artItemService.postArtItemAndImage(this.formData).subscribe(
      data => {
        this.isLoading = false;
        console.log('success');
      },
      error => console.log('Error')
    );
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
