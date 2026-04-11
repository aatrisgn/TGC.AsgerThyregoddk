import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  label: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  standalone: true
})
export class Skills {
  categories: SkillCategory[] = [
    {
      label: 'Backend',
      skills: ['C# / .Net', '.Net Framework', 'MSSQL', 'NoSQL', 'REST APIs'],
    },
    {
      label: 'Frontend',
      skills: ['Angular', 'TypeScript', 'HTML / CSS'],
    },
    {
      label: 'Cloud & Infrastructure',
      skills: ['Azure', 'Citrix', 'Docker', 'Kubernetes', 'Terraform', 'Bicep', 'CI / CD'],
    },
    {
      label: 'Leadership',
      skills: ['Team Lead', 'Product Management', 'Delivery Management', 'Agile / Scrum'],
    },
  ];
}
