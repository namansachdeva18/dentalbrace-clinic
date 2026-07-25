'use client';
import { useEffect } from 'react';


import PatientGallery from '@/components/PatientGallery';

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper">
      
      
      <PatientGallery />
    </div>
  );
};

export default GalleryPage;
