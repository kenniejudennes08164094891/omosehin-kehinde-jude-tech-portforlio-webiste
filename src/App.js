// App.jsx
import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Footer from './components/footer';
import passportPhotograph from './assets/passport.jpg';

const App = () => {
  const skills = [
    'Java', 'JavaScript', 'TypeScript', 'Angular', 'React', 'Ionic', 'Spring Boot', 'Nest Js'
  ];

  const experiences = [
    {
      company: 'United Bank for Africa',
      solutionsBuilt: [
        'The Web Settlement Portal',
        'The Console Portal',
        'The Self service enrichment Portal',
        'The Automatic Biller Updater'
      ]
    },
    {
      company: 'Build Microfinance Bank',
      solutionsBuilt: [
        'The Merchant Portal - https://merchant.buildbankng.com',
        'The Admin Portal - https://console.buildbankng.com'
      ]
    },
    {
      company: 'Salon Home Project',
      solutionsBuilt: [
        'The salonHome mobile Application - Available on Playstore'
      ]
    },
    {
      company: 'Tegritech solutions',
      solutionsBuilt: [
       'The Optima Agent Portal - https://optima-sigma.vercel.app/',
       'The Optima System Admin Portal - https://optima-sys-admin.vercel.app/'
      ]
    }
  ];

  const projects = [
    {
      name: 'Optima Agent Portal',
      description: 'A Kwara state initiative for Parliative disbursement Kwara state indegenes.',
      url: 'https://optima-sigma.vercel.app/'
    },
    {
      name: 'Optima Admin Portal',
      description: 'An admin console for Optima Agent Portal',
      url: 'https://optima-sys-admin.vercel.app/'
    },
    {
      name: 'The Merchant Portal',
      description: 'Portal assists small-scale merchants and businesses to make simplified day-to-day transactions.',
      url: 'https://merchant.buildbankng.com'
    },
    {
      name: 'The Merchant Admin Portal',
      description: 'Portal assists small-scale merchants and businesses to make simplified day-to-day transactions.',
      url: 'https://console.buildbankng.com/'
    },
    {
      name: 'The Web Settlement Portal',
      description: 'Portal automates settlement and chargeback charges recurrent on merchants settlement dispute system.',
      url: 'https://websettlement.ubagroup.com/'
    },
    {
      name: 'The salonHome mobile Application',
      description: 'A non-stop online shop for users to book time for hair makings.',
      url: null
    }
  ];

  return (
    <div>
      <Header />
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto flex flex-col items-center">
          <img src={passportPhotograph} alt="Profile" className="rounded-full h-44 w-44 mb-4" />
          <h2 className="text-2xl font-bold">Omosehin Kehinde Jude</h2>
          <p className="text-lg text-gray-600">Full Stack Software Developer</p>
          <p className="text-lg text-gray-600 font-semibold">+2349031251953</p>
        </div>
      </section>
      <div className='ml-6'>
      <Skills skills={skills} />
      <Experiences experiences={experiences} />
      <Projects projects={projects} />
      </div>
      <footer className="bg-gray-800 text-white p-4 mt-auto">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
