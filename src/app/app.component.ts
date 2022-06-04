import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'todoapp';

  constructor(private loaderService: LoaderService) {}
  ngOnInit(): void {
    this.loaderService.isLoading.subscribe((x) => {
      if (x === true) {
        Swal.fire({
          title: 'Uploading...',
          html: 'Please wait...',
          allowEscapeKey: false,
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });
      } else {
        Swal.close();
      }
    });
  }
}
