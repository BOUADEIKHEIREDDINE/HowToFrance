'use client';

import { useState } from 'react';
import FilterDropdown from '@/components/FilterDropdown';
import SectionHero from '@/components/SectionHero';

const associationsData = [
  { name: 'International Student Association', city: 'Paris' },
  { name: 'ESN France', city: 'Lyon' },
  { name: 'Sports Club Paris', city: 'Paris' },
  { name: 'Culture Connect', city: 'Marseille' },
  { name: 'Volunteer Network', city: 'Toulouse' },
  { name: 'Student Union Lyon', city: 'Lyon' },
];

export default function AssociationsPage() {
  const [selectedCity, setSelectedCity] = useState('');

  const filteredAssociations = selectedCity
    ? associationsData.filter((assoc) => assoc.city === selectedCity)
    : associationsData;

  const cities = [...new Set(associationsData.map((assoc) => assoc.city))];

  return (
    <>
      <SectionHero title="Associations" subtitle="Connect with student groups and clubs." />

      <section className="py-8">
        <FilterDropdown
          options={['All', ...cities]}
          onChange={(e) => setSelectedCity(e.target.value === 'All' ? '' : e.target.value)}
        />
      </section>

      <section className="py-8 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Student Associations</h2>
        <ul className="space-y-1">
          {filteredAssociations.map((assoc) => (
            <li key={assoc.name}>
              {assoc.name} ({assoc.city})
            </li>
          ))}
        </ul>
      </section>

      <section className="py-8 space-y-2">
        <h2 className="text-2xl font-semibold mb-2">International Clubs</h2>
        <p>Join clubs focused on different countries and cultures.</p>
      </section>

      <section className="py-8 space-y-2">
        <h2 className="text-2xl font-semibold mb-2">Sports/Culture</h2>
        <p>Get involved in sports and cultural activities.</p>
      </section>

      <section className="py-8 space-y-2">
        <h2 className="text-2xl font-semibold mb-2">Volunteering</h2>
        <p>Contribute to local communities through volunteering.</p>
      </section>
    </>
  );
}
