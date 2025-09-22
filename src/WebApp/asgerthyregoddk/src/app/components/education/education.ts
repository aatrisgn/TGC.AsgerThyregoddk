import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class Education {
  certificates = [
    {
      icon: '📜',
      title: 'Terraform Associate',
      institution: 'Hashicorp',
      year: '2024',
      description: 'A basic understanding of Terraform and how to use it to deploy infrastructure as code.'
    },
    {
      icon: '📜',
      title: 'Azure Security Engineer Associate - AZ 500',
      institution: 'Microsoft',
      year: '2023',
      description: 'Focus on how to implement security controls, maintain an organization’s security posture, and identify and remediate security vulnerabilities.'
    },
    {
      icon: '📜',
      title: 'Developing Solutions for Microsoft Azure - AZ 204',
      institution: 'Microsoft',
      year: '2023',
      description: 'Focus on how to develop and maintain software solutions in Microsoft Azure'
    },
    {
      icon: '🔒',
      title: 'Azure Fundamentals - AZ 900',
      institution: 'Microsoft',
      year: '2021',
      description: 'Introduction to Azure and the services it provides'
    },
    {
      icon: '💻',
      title: 'Programming in C#',
      institution: 'Microsoft',
      year: '2020',
      description: 'Utilizing C# and understanding what is possible within the language and .Net Framework'
    }
  ];

  educations = [
    {
      icon: '🎓',
      title: 'Economics & IT',
      institution: 'Copenhagen Business School',
      year: '2013 - 2016',
      description: 'Computer Science with focus on Software Engineering'
    },
    {
      icon: '🎓',
      title: 'Msc. Business Administration & Information Systems',
      institution: 'Copenhagen Business School',
      year: '2016 - 2018',
      description: 'Computer Science with focus on Software Engineering'
    }
  ];
}
