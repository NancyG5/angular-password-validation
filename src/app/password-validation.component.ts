import { Component } from '@angular/core';

@Component({
  selector: 'password-validation',
  templateUrl: './password-validation.component.html',
  styleUrls: ['./password-validation.component.css'],
})
export class PasswordValidationComponent {
    password: string = '';
    strength: string = 'Weak';
  
    calculateStrength(): void {
      if (!this.password) {
        this.strength = 'Weak';
      } else if (this.password.length < 8) {
        this.strength = 'Weak';
      } else {
        let hasLetters = /[a-zA-Z]/.test(this.password);
        let hasNumbers = /[0-9]/.test(this.password);
        let hasSymbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(this.password); 

        let allConditionsMet = hasLetters && hasNumbers && hasSymbols;
        let hasLettersAndNumbers = hasLetters && hasNumbers;
        let hasLettersAndSymbols = hasLetters && hasSymbols;
        let hasNumbersAndSymbols = hasNumbers && hasSymbols;
  
        if (allConditionsMet || hasLettersAndNumbers || hasLettersAndSymbols || hasNumbersAndSymbols) {
          this.strength = 'Strong';
        } else {
          this.strength = 'Medium';
        }
      }
    }
}
