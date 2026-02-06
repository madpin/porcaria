export interface Product {
  id: string;
  name: string;
  category: 'bacon' | 'carnes' | 'especialidades';
  description: string;
  weight: string;
  badges: string[];
  image: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}
