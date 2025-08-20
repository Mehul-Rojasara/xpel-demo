export interface InstallationDocument {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly pdfUrl: string;
  readonly category: string;
  readonly iconClass: string;
  readonly iconAlt: string;
}

export interface InstallationInfrastructureData {
  readonly title: string;
  readonly subtitle: string;
  readonly tipSection: {
    readonly title: string;
    readonly description: string;
    readonly backgroundColor: string;
  };
  readonly documents: readonly InstallationDocument[];
}

export const INSTALLATION_INFRASTRUCTURE_DATA: InstallationInfrastructureData = {
  title: 'Installation Infrastructure',
  subtitle: 'Essential resources for professional installation',
  tipSection: {
    title: 'Professional Installation Tips',
    description: 'Ensure proper installation with our comprehensive guides and infrastructure requirements. These resources help maintain quality standards and professional results.',
    backgroundColor: '#f8f9fa'
  },
  documents: [
    {
      id: 'installation-standards',
      title: 'Installation Standards & Guidelines',
      description: 'Comprehensive standards for professional XPEL product installation including safety protocols and quality requirements.',
      pdfUrl: '/documents/installation-standards.pdf',
      category: 'Standards',
      iconClass: 'icon-Document',
      iconAlt: 'Document icon'
    },
    {
      id: 'facility-requirements',
      title: 'Facility Requirements',
      description: 'Detailed specifications for installation facility setup including workspace dimensions, lighting, and ventilation requirements.',
      pdfUrl: '/documents/facility-requirements.pdf',
      category: 'Facility',
      iconClass: 'icon-Building',
      iconAlt: 'Building icon'
    },
    {
      id: 'equipment-checklist',
      title: 'Equipment Checklist',
      description: 'Complete list of required tools and equipment for professional XPEL product installation and maintenance.',
      pdfUrl: '/documents/equipment-checklist.pdf',
      category: 'Equipment',
      iconClass: 'icon-Tools',
      iconAlt: 'Tools icon'
    },
    {
      id: 'safety-protocols',
      title: 'Safety Protocols',
      description: 'Essential safety guidelines and protocols for installation professionals working with XPEL products.',
      pdfUrl: '/documents/safety-protocols.pdf',
      category: 'Safety',
      iconClass: 'icon-Shield',
      iconAlt: 'Shield icon'
    },
    {
      id: 'quality-control',
      title: 'Quality Control Procedures',
      description: 'Step-by-step quality control procedures to ensure consistent and professional installation results.',
      pdfUrl: '/documents/quality-control.pdf',
      category: 'Quality',
      iconClass: 'icon-Checkmark',
      iconAlt: 'Checkmark icon'
    },
    {
      id: 'training-materials',
      title: 'Training Materials',
      description: 'Comprehensive training resources for installation professionals including video guides and best practices.',
      pdfUrl: '/documents/training-materials.pdf',
      category: 'Training',
      iconClass: 'icon-Graduation',
      iconAlt: 'Graduation icon'
    }
  ]
}; 