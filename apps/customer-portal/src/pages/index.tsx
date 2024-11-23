import React from 'react';
import { PlasmicComponent } from '@plasmicapp/loader-nextjs';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = "Forever Yours";
  }, []);

  return <PlasmicComponent component="Homepage" />;
} 