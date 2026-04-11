import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  description: string[];
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  experiences: ExperienceItem[] = [
    {
      date: 'August 2024 – Present',
      title: 'Delivery Lead & Software Engineer',
      company: 'cVation / Financial Software',
      description: [
        'Leading a team of 8 software engineers located in Denmark and Lithuania',
        'Large scale cloud environments utilizing Azure, Citrix and .Net',
        'Focus on improving stability of Citrix environment in a multi-tenant setup and migrating clients from on-premise to cloud',
        'Created with first cross-organization Kubernetes deployment utilizing ArgoCD and Helm',
      ]
    },
    {
      date: 'January 2023 – July 2024',
      title: 'Software Engineer',
      company: 'cVation / Financial Software',
      description: [
        'Taking a PoC to a production-ready solution',
        'Wrote Cosmos Repository pattern library from scratch to abstract away complexities of Cosmos DB and provide a consistent API for data access',
        'Creating and maintaining modern cloud-first SaaS solutions within Azure, .Net and Angular',
        'Assisted with spear-heading custom multi-tenant OpenID Connect implementation for authentication and authorization',
      ]
    },
    {
      date: 'September 2022 – January 2023',
      title: 'Senior IT-Architect',
      company: 'Netcompany / Financial institution',
      description: [
        'Consultant for Netcompany assisting a large Danish financial institution',
        'Discovery and pre-analysis for modernizing their IT capabilities for the commercial sector',
        'Technical responsible for deliverables for a team of 7 consultants.'
      ]
    },
    {
      date: 'December 2021 – September 2022',
      title: 'Senior IT-Architect',
      company: 'Netcompany / Government Agency',
      description: [
        'Consultant for Netcompany assisting a government agency',
        'Maintaining and developing IT-systems within the .Net ecosystem and Windows Server',
        'Responsible for technical quality and delivery of new features',
        'Upgrading to newest Windows servers',
        'Assisting with making integration for data delivery to National Archives',
        'Lead implementation of NGDP',
        'Troubleshooting MSSQL performance issues'
      ]
    },
    {
      date: 'August 2019 – December 2021',
      title: 'IT Consultant',
      company: 'Netcompany / Government Agency',
      description: [
        'Consultant for Netcompany assisting a government agency',
        'Maintaining and developing IT-systems within the .Net ecosystem and Windows Server',
        'Development and ensuring steady operation',
      ]
    },
    {
      date: 'August 2018 – August 2019',
      title: 'Software Developer',
      company: 'Nordic Insurance Software',
      description: [
        'First full-time position as a software developer',
        'Developed fully-automated client test/sandbox environment deployments utilizing Octopus Deploy',
        'Assisting with maintaining existing insurance products in .Net Framework',
      ]
    },
    {
      date: 'January 2018 – August 2018',
      title: 'Student Software Developer',
      company: 'Nordic Insurance Software',
      description: [
        'Developed and automated internal processes utilizing Octopus Deploy',
        'Assisted with maintaining existing insurance products in .Net Framework',
      ]
    },
    {
      date: 'January 2017 – January 2018',
      title: 'External Consultant',
      company: 'Oxfam Ibis',
      description: [
        'Assisted a grant manager implementing the global reporting standard IATI for NGOs',
      ]
    },
    {
      date: 'October 2014 – January 2018',
      title: 'Online Marketing Consultant',
      company: 'AdNudging',
      description: [
        'Started as a web developer for a clothing outlet company',
        'Developed into starting a consultancy firm for online marketing',
        'Assisted online shops with online marketing and website optimization',
      ]
    },
  ];

  selected: ExperienceItem | null = null;

  open(exp: ExperienceItem): void {
    this.selected = exp;
  }

  close(): void {
    this.selected = null;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }
}
