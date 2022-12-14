import { Component, OnInit } from '@angular/core';
import { UploadFilesService } from '../services/upload-files.service';
import { FileModel } from '../models/fileModel';

@Component({
  selector: 'app-test-files',
  templateUrl: './test-files.component.html',
  styleUrls: ['./test-files.component.css']
})
export class TestFilesComponent implements OnInit {
  
  photoSelected!: string | ArrayBuffer | null;
  imagenes?: FileModel[];

  constructor(private fileService: UploadFilesService) { }

  ngOnInit(): void {
    this.fileService.getAll().subscribe(response =>{
      this.imagenes = response;
    });
  }

}
