import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rms';
  router: any;

  ngOnInit() {

    console.log('Check login process...')
    // const token = localStorage.getItem('token');
    // if (token) {
    //   this.router.navigate(['/dashboard']);
    // } else {
    //   this.router.navigate(['/login']);
    // }
  }

}
