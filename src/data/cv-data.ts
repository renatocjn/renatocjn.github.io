import { CvInformation } from "./models"

const cvData: CvInformation = {
  "full_name": "Renato Caminha Juaçaba Neto",
  "current_position": "PhD Student",
  "two_liner": "welp",
  "bio": "Bachelors and Master’s degrees in computers Science at the Federal University of Ceará. Experience in management of Linux systems, helpdesk support and software development. Co-Founder of information security group. Researcher in cellular networks, Wi-Fi networks and Internet of Things. Autodidact. Available for reallocation. International experience.",
  "contact_info": {
    "email": "caminha@unistra.fr",
    "github": "https://github.com/renatocjn",
    "address": "Strasbourg, France",
    "phone_number": "(+33) (0)6 13 18 16 93",
    "orcid": "0000-0002-0626-984X"
  },
  "timeline": [
    {
      "type": "education",
      "title": "Bachelor",
      "study_area": "Computer science",
      "school": "Federal University of Ceará",
      "location": "Fortaleza, Brazil",
      "dateStart": 2010,
      "dateEnd": 2014,
      "tldr": "Acquired a bachelor's degree in computer science from the Federal University of Ceará, Brazil",
      "detailed": "During my license I tried to acquire experience in multiple areas. Initially I studied high performance computing but wasn't that interest in the subject. Then me and friends created started a group to study security and provide some services to the community. By the end I got the oportunity to do research in computer networks"
    },
    {
      "type": "education",
      "title": "Master",
      "study_area": "Computer science",
      "location": "Fortaleza, Brazil",
      "dateStart": 2015,
      "dateEnd": 2017,
      "school": "Federal University of Ceará",
      "tldr": "Acquired a master's degree in computer science from the Federal University of Ceará, Brazil",
      "detailed": "During my masters I have worked with NarrowBand IoT. I analised the specifics of the resource block configurations. I also proposed an mode of operation that used multiple configurations at the same time."
    },
    {
      "type": "education",
      "title": "Doctorate degree",
      "study_area": "Computer networks",
      "location": "Strasbourg, France",
      "dateStart": 2019,
      "dateEnd": "Present",
      "school": "Université de Strasbourg",
      "tldr": "Recently began my PhD studies in the Université de Strasbourg. Here I study privacy and inter-iot networks communications",
      "detailed": "My thesis is in privacy enabled inter-IoT communication."
    },
    {
      "type": "work_experience",
      "position": "Developer and research assistent at the National Center of High Performance Data Processing",
      "company": "National Center of High Performance Data Processing",
      "dateStart": "07/2014",
      "dateEnd": "03/2015",
      "tldr": "Worked on a project to develop an web interface to the computing resources available at my old university. At this position I learned much from web development, server management, virtualization and cluster management.",
      "activities": [
        "Development of WEB interface to access scientific cloud and cluster infrastructure. This system started and managed the execution of scientific payloads through a web interface.",
        "Creation and maintenance of scripts to manage and generate reports on Linux environments.",
        "Deployment of scientific application on cluster and cloud environments."
      ]
    },
    {
      "type": "work_experience",
      "position": "Network Analist and Web Developer at the Casebrás Group",
      "company": "Finantial Group Casebrás",
      "dateStart": "10/2017",
      "dateEnd": "08/2018",
      "tldr": "Joined this company as technical support. Later moved to network management and web development to provide for internal necessities of the company. There I learned how to help end users and acquired much more experience in web development and network management.",
      "activities": [
        "Helpdesk support to internal clients on all levels of complexity.",
        "Development of WEB solutions for internal use of the several departments of the group.",
        "Administration and monitoring of Linux and Windows servers."
      ]
    },
    {
      "type": "work_experience",
      "position": "Substitute Teacher at the Federal Institute of Ceará",
      "company": "Instituto Federal do Ceará",
      "dateStart": "08/2018",
      "dateEnd": "12/2018",
      "tldr": "Acquired this position on a public exam. Was teaching bachelor level and techinical level classes. Had to handle difficult hours and classes out of my expertise due to lack of teachers.",
      "activities": [
        "Handled subjects like computer archtecture, networks and software engineering.",
        "Prepared and corrected course evaluations",
        "Techinical and University levels"
      ]
    },
    {
      "type": "publication",
      "main": false,
      "authors": [
        "Juaçaba Neto, R. C.",
        "Rodrigues, E. B.",
        "Oliveira, T. C."
      ],
      "title": "Performance Analysis of Resource Unit Configurations for M2M Traffic in the Narrowband-IoT System",
      "venue": "XXXV Simpósio Brasileiro de Telecomunicações e Processamento de Sinais",
      "location": "São Pedro, Brazil",
      "year": 2017,
      "links": [
        {
          "type": "SBrT",
          "link": "https://biblioteca.sbrt.org.br/articles/459"
        },
        {
          "type": "DOI",
          "link": "https://doi.org/10.14209/sbrt.2017.61"
        }
      ],
      "detailed": "The massive amount of low-end uplink traffic of Machine to Machine (M2M) communications are a key aspect of what 5G will be. In this context, Narrowband-IoT (NB-IoT) is described as the next step to allow Long Term Evolution (LTE) support for this type of traffic. This new technology provides support to massive amounts of ultra-low-end devices while occupying the frequency space of a single LTE resource block. This work studies the NB-IoT uplink, which allows multitone and single-tone transmissions. These types of transmissions result in configurations of resource units for NB-IoT devices that have different durations and frequency occupations. We present extensive simulations results that provide insight into the behavior of the configurations. Based on these simulations, we discuss the best resource configurations to be used by NB-IoT. We also defend the feasibility of NB-IoT for higher tier traffic."
    },
    {
      "type": "publication",
      "main": false,
      "authors": [
        "Oliveira Maciel, F. A.",
        "Juaçaba Neto, R. C.",
        "Bezerra, R. L.",
        "Oliveira, C. T.",
        "Andrade, R. M. C."
      ],
      "title": "Uma Proposta de Portal de Aplicação do NS-3 para Aprendizagem de Redes de Computadores",
      "venue": "Nuevas Ideas en Informática Educativa",
      "location": "Fortaleza, Brazil",
      "year": 2014,
      "links": [
        {
          "type": "pdf",
          "link": "http://www.tise.cl/volumen10/TISE2014/tise2014_submission_305.pdf"
        }
      ],
      "detailed": "The study of computer network concepts is an important requirement in the field of Information and Communications Technology (ICT). In general, it is necessary to use a network simulator to perform practical activities for students, which allows the understanding of main concepts as well as stimulates the searching of new network solutions. The Network Simulator 3 (NS-3) is a good example of a robust and well-used simulator to education and research. However, the installation, configuration and use of NS-3 need a minimal technical skill by the user. Besides that, it requires considerable computational resources (memory, processing and storage) to execute the simulations. Therefore, to facilitate and stimulate the use of NS-3 in the study of computer networks, this paper presents a Portal of NS-3, where the students can interact with a friendly NS-3 web-based interface to submit their network simulations. This website is hosted in a high performance computing environment, composed by heterogeneous infrastructures such as cluster and cloud. Finally, making use of the portal, the students can easily d efine network functionalities and parameters through the use of an architecture that allows the interaction between the portal and the high performance computing environment."
    },
    {
      "type": "publication",
      "main": false,
      "authors": [
        "Juaçaba Neto, R. C.",
        "Andrade, R. M. C.",
        "Braga, R. B.",
        "Theoleyre, F.",
        "Oliveira, C. T."
      ],
      "title": "Performance issues with routing in multi-channel multi-interface IEEE 802.11s networks",
      "venue": "Wireless Days",
      "location": "Rio de Janeiro, Brazil",
      "year": 2014,
      "links": [
        {
          "type": "ieeexplore",
          "link": "https://ieeexplore.ieee.org/document/7020810/"
        },
        {
          "type": "DOI",
          "link": "https://doi.org/10.1109/WD.2014.7020810'"
        }
      ],
      "detailed": "Wireless Mesh Networks have the potential to serve as an all-wireless backbone. They represent a key building block of the new Internet of Things to collect all the traffic. However, IEEE 802.11 performs very poorly in multi-hop topologies leading to unfairness and a poor throughput. Thus, the standard IEEE 802.11s proposes to re-use the IEEE 802.11 medium access in a mesh multi-hop topology while using a routing protocol to create routes at the layer 2. IEEE 802.11s may exploit multi-channel multi-interface wireless routers to increase the through-put. In particular, the routing protocol must select carefully the forwarders to limit inter- and intra-flow interference. In this paper, we propose to fully characterize the performance of IEEE 802.11s when using multi-interface nodes, and to isolate some key performance issues. We also propose some key mechanisms that must be implemented to solve these pathological cases and to improve the throughput."
    },
    {
      "type": "publication",
      "main": false,
      "authors": [
        "Carvalho Junior F. H.",
        "Rezende, C. A.",
        "Silva, J. d. C.",
        "Magalhães, F. J. L.",
        "Juaçaba Neto, R. C."
      ],
      "title": "On the Performance of Multidimensional Array Representations in Programming Languages Based on Virtual Execution Machines",
      "venue": "Brazilian Symposium on Programming Languages",
      "location": "Brasília, Brazil",
      "year": 2013,
      "links": [
        {
          "type": "springer",
          "link": "https://link.springer.com/chapter/10.1007/978-3-642-40922-6_3"
        },
        {
          "type": "DOI",
          "link": "https://doi.org/10.1007/978-3-642-40922-6_3"
        }
      ],
      "detailed": "This paper evaluates the performance of virtual execution machines (VM) of the CLI and JVM standards for the common approaches to represent multidimensional arrays in high performance computing applications. In particular, it shows which representation is the best for each virtual machine implementation, showing that the choices may be surprisingly contradictory, even with respect to previous results of other works on performance evaluation of VMs."
    }
  ],
  "skills": [
    {
      "name": "Relational Databases",
      "level": "Intermediary",
      "detailed": "Used to schema design for internal systems. Training in database tuning. Given classes to undergraduate students. Used to mysql, sqlite and postgresql but have used sqlserver."
    },
    {
      "name": "Windows",
      "level": "Beginner",
      "detailed": "Not an advanced windows user, but have provided support to companies with windows machines and servers."
    },
    {
      "name": "JQuery",
      "level": "Advanced",
      "detailed": "Concrete knowledge of front end development with jquery code from my time in casebras."
    },
    {
      "name": "Network Protocols",
      "level": "Advanced",
      "detailed": "Have a masters and am on course of acquiring a PhD in computer networks. Am a published author on wifi and cellular networks. Have given classes on protocols to undergraduate students. Familiar with protocols from internet of things and ad hoc networks due to my reseach work."
    },
    {
      "name": "Linux",
      "level": "Advanced",
      "detailed": "Have been a user for 10 years. Have managed headless application servers like apache, postgres, mysql, etc. Am used to the ubuntu and debian distributions."
    },
    {
      "name": "Python scripting and data analisys",
      "level": "Advanced",
      "detailed": "Used python scripting for statistical analisys and data visualization during my academic research. Familiar with libraries such as: Pandas, matplotlib, seaborn, sklearn and scikit."
    },
    {
      "name": "Rails",
      "level": "Advanced",
      "detailed": "Have developed multiple applications for internal use by previous company. Familiar with version 5. My code can be found in my github."
    },
    {
      "name": "React",
      "level": "Beginner",
      "detailed": "Have training in this techonology and build this website to try it out. Took it up due to its potential to be used in conjuntion with Rails for my web devepment."
    },
    {
      "name": "Network simulations with C++",
      "level": "Advanced",
      "detailed": "Very familiar with Network Simulator 3 (NS3) from multiple evaluations of my research work. C++ knowledge was acquired in order to write correcly this simulations, so I am used to handling C++ code."
    },
    {
      "name": "Self learning",
      "level": "Advanced",
      "detailed": "Academic research required me to learn on my own much of the necessary knowledge required to acomplish my objectives."
    },
    {
      "name": "Network security",
      "level": "Intermediary",
      "detailed": "Acquired considerable knowledge on network security, computer forensics and pentesting by self study with student group."
    }
  ]
}

export default cvData;