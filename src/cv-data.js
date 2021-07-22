export default {
  current_position: 'PhD Student',
  short_bio: 'Bachelors and Master’s degrees in computers Science at the Federal University of Ceará. Experience in management of Linux systems, helpdesk support and software development. Co-Founder of information security group. Researcher in cellular networks, Wi-Fi networks and Internet of Things. Autodidact. Available for reallocation. International experience.',
  contact_info: {
    email: 'caminha@unistra.fr',
    github: 'https://github.com/renatocjn',
    address: 'Strasbourg, France',
    phone_number: '(+33) 3 68 85 44 01',
  },
  timeline: [{
    type: 'education',
    title: 'Bachelor degree',
    tldr: "Acquired a bachelor's degree in computer science from the Federal University of Ceará, Brazil",
    dateTxt: '2010 - 2014',
    specifics: {
      study_area: 'Computer science',
      school: 'Federal University of Ceará',
      location: 'Fortaleza, Brazil',
      more_info: "During my license I tried to acquire experience in multiple areas. Initially I studied high performance computing but wasn't that interest in the subject. Then me and friends created started a group to study security and provide some services to the community. By the end I got the oportunity to do research in computer networks",
    },
  }, {
    type: 'education',
    title: 'Master degree',
    tldr: "Acquired a master's degree in computer science from the Federal University of Ceará, Brazil",
    dateTxt: '2015 - 2017',
    specifics: {
      study_area: 'Computer science',
      school: 'Federal University of Ceará',
      location: 'Fortaleza, Brazil',
      more_info: 'During my masters I have worked with NarrowBand IoT. I analised the specifics of the resource block configurations. I also proposed an mode of operation that used multiple configurations at the same time.',
    },
  }, {
    type: 'education',
    title: 'Doctorate degree',
    tldr: 'Recently began my PhD studies in the Université de Strasbourg. Here I study privacy and inter-iot networks communications',
    dateTxt: '2019 - Present',
    specifics: {
      study_area: 'Computer networks',
      school: 'Université de Strasbourg',
      location: 'Strasbourg, France',
      extra: 'My thesis is in privacy enabled inter-IoT communication.',
    },
  }, {
    type: 'work_experience',
    title: 'Developer and research assistent at the National Center of High Performance Data Processing',
    tldr: 'Worked on a project to develop an web interface to the computing resources available at my old university. At this position I learned much from web development, server management, virtualization and cluster management.',
    dateTxt: '07/2014 - 03/2015',
    specifics: {
      company: 'National Center of High Performance Data Processing',
      activites: [
        'Development of WEB interface to access scientific cloud and cluster infrastructure. This system started and managed the execution of scientific payloads through a web interface.',
        'Creation and maintenance of scripts to manage and generate reports on Linux environments.',
        'Deployment of scientific application on cluster and cloud environments.'],
    },
  }, {
    type: 'work_experience',
    title: 'Network Analist and Web Developer at the Casebrás Group',
    tldr: 'Joined this company as technical support. Later moved to network management and web development to provide for internal necessities of the company. There I learned how to help end users and acquired much more experience in web development and network management.',
    dateTxt: '10/2017 - 08/2018',
    specifics: {
      company: 'Finantial Group Casebrás',
      activites: [
        'Helpdesk support to internal clients on all levels of complexity.',
        'Development of WEB solutions for internal use of the several departments of the group.',
        'Administration and monitoring of Linux and Windows servers.'],
    },
  }, {
    type: 'work_experience',
    title: 'Substitute Teacher at the Federal Institute of Ceará',
    tldr: 'Acquired this position on a public exam. Was teaching bachelor level and techinical level classes. Had to handle difficult hours and classes out of my expertise due to lack of teachers.',
    dateTxt: '08/2018 - 12/2018',
    specifics: {
      activites: [
        'Handled subjects like computer archtecture, networks and software engineering.',
        'Prepared and corrected course evaluations',
        'Techinical and University levels'],
    },
  },
  ],
  skills: {
    levels: { 1: 'Beginner', 2: 'Intermediary', 3: 'Advanced' },
    list: [{
      name: 'Relational Databases',
      level: 2,
      few_words: 'Used to schema design for internal systems. Training in database tuning. Given classes to undergraduate students. Used to mysql, sqlite and postgresql but have used sqlserver.',
    }, {
      name: 'Windows',
      level: 1,
      few_words: 'Not an advanced windows user, but have provided support to companies with windows machines and servers.',
    }, {
      name: 'JQuery',
      level: 3,
      few_words: 'Concrete knowledge of front end development with jquery code from my time in casebras.',
    }, {
      name: 'Network Protocols',
      level: 3,
      few_words: 'Have a masters and am on course of acquiring a PhD in computer networks. Am a published author on wifi and cellular networks. Have given classes on protocols to undergraduate students. Familiar with protocols from internet of things and ad hoc networks due to my reseach work.',
    }, {
      name: 'Linux',
      level: 3,
      few_words: 'Have been a user for 10 years. Have managed headless application servers like apache, postgres, mysql, etc. Am used to the ubuntu and debian distributions.',
    }, {
      name: 'Python scripting and data analisys',
      level: 3,
      few_words: 'Used python scripting for statistical analisys and data visualization during my academic research. Familiar with libraries such as: Pandas, matplotlib, seaborn, sklearn and scikit.',
    }, {
      name: 'Rails',
      level: 3,
      few_words: 'Have developed multiple applications for internal use by previous company. Familiar with version 5. My code can be found in my github.',
    }, {
      name: 'React',
      level: 1,
      few_words: 'Have training in this techonology and build this website to try it out. Took it up due to its potential to be used in conjuntion with Rails for my web devepment.',
    }, {
      name: 'Network simulations with C++',
      level: 3,
      few_words: 'Very familiar with Network Simulator 3 (NS3) from multiple evaluations of my research work. C++ knowledge was acquired in order to write correcly this simulations, so I am used to handling C++ code.',
    }, {
      name: 'Self learning',
      level: 3,
      few_words: 'Academic research required me to learn on my own much of the necessary knowledge required to acomplish my objectives.',
    }, {
      name: 'Network security',
      level: 2,
      few_words: 'Acquired considerable knowledge on network security, computer forensics and pentesting by self study with student group.',
    },
    ],
  },
  published_works: [{
    authors: ['Juaçaba Neto, R. C.', 'Rodrigues, E. B.', 'Oliveira, T. C.'],
    title: 'Performance Analysis of Resource Unit Configurations for M2M Traffic in the Narrowband-IoT System',
    venue: 'XXXV Simpósio Brasileiro de Telecomunicações e Processamento de Sinais',
    location: 'São Pedro, Brazil',
    year: 2017,
    links: [{
      type: 'SBrT',
      link: 'https://biblioteca.sbrt.org.br/articles/459',
    }, {
      type: 'DOI',
      link: 'https://doi.org/10.14209/sbrt.2017.61',
    }],
    few_words: '',
  }, {
    authors: ['Oliveira Maciel, F. A.', 'Juaçaba Neto, R. C.', 'Bezerra, R. L.', 'Oliveira, C. T.', 'Andrade, R. M. C.'],
    title: 'Uma Proposta de Portal de Aplicação do NS-3 para Aprendizagem de Redes de Computadores',
    venue: 'Nuevas Ideas en Informática Educativa',
    location: 'Fortaleza, Brazil',
    year: 2014,
    links: [{
      type: 'pdf',
      link: 'http://www.tise.cl/volumen10/TISE2014/tise2014_submission_305.pdf',
    }],
    few_words: '',
  }, {
    authors: ['Juaçaba Neto, R. C.', 'Andrade, R. M. C.', 'Braga, R. B.', 'Theoleyre, F.', 'Oliveira, C. T.'],
    title: 'Performance issues with routing in multi-channel multi-interface IEEE 802.11s networks',
    venue: 'Wireless Days',
    location: 'Rio de Janeiro, Brazil',
    year: 2014,
    links: [{
      type: 'ieeexplore',
      link: 'https://ieeexplore.ieee.org/document/7020810/',
    }, {
      type: 'DOI',
      link: 'https://doi.org/10.1109/WD.2014.7020810',
    }],
    few_words: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  }, {
    authors: ['Carvalho Junior F. H.', 'Rezende, C. A.', 'Silva, J. d. C.', 'Magalhães, F. J. L.', 'Juaçaba Neto, R. C.'],
    title: 'On the Performance of Multidimensional Array Representations in Programming Languages Based on Virtual Execution Machines',
    venue: 'Brazilian Symposium on Programming Languages',
    location: 'Brasília, Brazil',
    year: 2013,
    links: [{
      type: 'springer',
      link: 'https://link.springer.com/chapter/10.1007/978-3-642-40922-6_3',
    }, {
      type: 'DOI',
      link: 'https://doi.org/10.1007/978-3-642-40922-6_3',
    }],
    few_words: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  ],
};
