import { Component } from '@angular/core';

enum Strength {
  SHORT = 'short',
  LESS = 'less',
  EASY = 'easy',
  MEDIUM = 'medium',
  STRONG = 'strong'
}

@Component({
  selector: 'password-validation',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
})
export class PasswordStrengthComponent {
  password = '';

  get strength(): Strength {
    if (this.password.length < 1) 
      {return Strength.SHORT} else if(this.password.length < 8) {
        return Strength.LESS
        }

    switch (this.conditionsMet) {
      case 1: return Strength.EASY;
      case 2: return Strength.MEDIUM;
      case 3: return Strength.STRONG;
      default: return Strength.SHORT;
    }
  }

  strengthClass(index: number): string {
    const levels = {
      [Strength.SHORT]: [Strength.SHORT, Strength.SHORT, Strength.SHORT],
      [Strength.LESS]: [Strength.LESS, Strength.LESS, Strength.LESS],
      [Strength.EASY]: [Strength.LESS, '', ''],
      [Strength.MEDIUM]: [Strength.MEDIUM, Strength.MEDIUM, ''],
      [Strength.STRONG]: [Strength.STRONG, Strength.STRONG, Strength.STRONG]
    };
    return levels[this.strength][index - 1];
  }

  private get conditionsMet(): number {
    const checks = [
      /[a-zA-Z]/.test(this.password),
      /\d/.test(this.password),
      /\W/.test(this.password)
    ];
    return checks.filter(Boolean).length;
  }
}