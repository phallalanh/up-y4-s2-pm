import { Injectable } from "@angular/core";

// auth.service.ts
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // or sessionStorage or use a proper JWT validation
  }
}
