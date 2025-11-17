// FIX: Import React to provide the 'React' namespace for types like React.ReactElement.
import React from 'react';

export interface PortfolioItem {
  id: string;
  icon: string;
  title: string;
  category: string[];
  content: {
    heading: string;
    description: string | React.ReactElement;
    pills: string[];
  };
}

export interface SoftwareSkill {
  title: string;
  name: string;
  description: string;
}

export interface WorkItem {
  type: 'project' | 'extra';
  year: string;
  displayYear?: string;
  category: string;
  icon: string;
  title: string;
  desc: string;
  clipboardId: string;
}

export interface ClipboardContent {
  id: string;
  content: React.ReactElement;
}