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
      title: 'Azure Security Engineer Associate',
      institution: 'Microsoft',
      year: '2023',
      description: 'Focus on how to implement security controls, maintain an organization’s security posture, and identify and remediate security vulnerabilities.'
    },
    {
      icon: '📜',
      title: 'Developing Solutions for Azure',
      institution: 'Microsoft',
      year: '2023',
      description: 'Focus on how to develop, integrate and maintain software solutions in Microsoft Azure'
    },
    {
      icon: '🔒',
      title: 'Azure Fundamentals',
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
      title: 'Bachelor of Economics & IT',
      institution: 'Copenhagen Business School',
      year: '2013 - 2016',
      description: 'Combines business economics, organization, and information technology to educate specialists in IT-driven change. The program provides strategic and practical insight into designing, developing, and implementing IT systems within a business and organizational context.'
    },
    {
      icon: '🎓',
      title: 'Msc. Business Administration & Information Systems',
      institution: 'Copenhagen Business School',
      year: '2016 - 2018',
      description: 'Systems at CBS combines business management with digital and information technologies, teaching you how IT impacts organizations and how to design and implement IT solutions that add value to businesses.'
    }
  ];
}
