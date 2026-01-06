
import React from 'react';
import { Service, Project } from './types';

export const SERVICES: Service[] = [
  {
    id: 'civil-eng',
    title: 'Civil Engineering',
    description: 'Specializing in bulk earthworks, road construction, pipelines, and water treatment infrastructure across Southern Africa.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: 'building-const',
    title: 'Building Construction',
    description: 'Expertise in commercial, industrial, and institutional buildings, delivering high-quality architectural execution.',
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=800',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    id: 'water-infra',
    title: 'Water Infrastructure',
    description: 'Design and construction of reservoirs, water treatment plants, and bulk water supply systems.',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecb?auto=format&fit=crop&q=80&w=800',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    id: 'contractor-dev',
    title: 'Contractor Development',
    description: 'Committed to growth through our renowned mentorship programs for emerging small businesses in the construction sector.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Klipfontein Reservoir Expansion',
    category: 'Civil Engineering',
    location: 'Paarl, Western Cape',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecb?auto=format&fit=crop&q=80&w=1200',
    completionYear: 2023
  },
  {
    id: 'p2',
    title: 'N2 Highway Arterial Upgrade',
    category: 'Civil Engineering',
    location: 'Cape Town, Western Cape',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1200',
    completionYear: 2022
  },
  {
    id: 'p3',
    title: 'Regional Secondary School Complex',
    category: 'Institutional',
    location: 'Durban, KwaZulu-Natal',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200',
    completionYear: 2024
  },
  {
    id: 'p4',
    title: 'Agri-Processing Industrial Park',
    category: 'Industrial',
    location: 'Upington, Northern Cape',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    completionYear: 2021
  },
  {
    id: 'p5',
    title: 'Bulk Water Pipeline - Phase 2',
    category: 'Civil Engineering',
    location: 'Montclair, Durban',
    image: 'https://images.unsplash.com/photo-1590496793907-2996e386762a?auto=format&fit=crop&q=80&w=1200',
    completionYear: 2023
  },
  {
    id: 'p6',
    title: 'Kraaifontein Logistics Hub',
    category: 'Commercial',
    location: 'Kraaifontein, Cape Town',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    completionYear: 2022
  }
];
