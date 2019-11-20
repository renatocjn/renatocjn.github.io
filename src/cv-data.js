
const levels = {
   beginner: 1,
   beginner_plus: 2,
   intermediary: 3,
   intermediary_plus: 4,
   advanced: 5
}

export default {
   current_position: "PhD Student",
   short_bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sintoccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollitanim id est laborum.",
   contact_info: {
      email: "renatocjn@gmail.com",
      phone_number: "+33 06 13 18 16 93",
      github: "github.com/renatocjn",
      address: "Strasbourg, France"
   },
   education: [ {
         title: "Bachelors", area: "Computer science",
         school: "Federal University of Ceará",
         location: "Fortaleza, Brazil",
         begin: 2010, end: 2014
      }, {
         title: "Master", area: "Computer science",
         school: "Federal University of Ceará",
         location: "Fortaleza, Brazil",
         begin: 2015, end: 2017
      }, {
         title: "Doctorate", area: "Computer science",
         school: "Université de Strasbourg",
         location: "Strasbourg, France",
         begin: 2019//, end: 2021
      }
   ],
   experience: [ {
         position: "Developer and research assistent",
         company: "National center of High Performance Data Processing",
         start: new Date(2014, 7), end: new Date(2015, 3),
         activites: [
            "Development of WEB interface to access scientific cloud and cluster infrastructure. This system started and managed the execution of scientific payloads through a web interface.",
            "Creation and maintenance of scripts to manage and generate reports on Linux environments.",
            "Deployment of scientific application on cluster and cloud environments." ]
      }, {
         position: "Network Analist and Web Developer",
         company: "Finantial Group Casebrás",
         start: new Date(2017, 10), end: new Date(2018, 8),
         activites: [
            "Helpdesk support to internal clients on all levels of complexity.",
            "Development of WEB solutions for internal use of the several departments of the group.",
            "Administration and monitoring of Linux and Windows servers." ]
      }, {
         position: "Substitute Teacher",
         company: "Federal Institute of Ceará",
         start: new Date(2018, 8), end: new Date(2018, 12),
         activites: [
            "Handled subjects like computer archtecture, networks and software engineering.",
            "Prepared and corrected course evaluations",
            "Techinical and University levels" ]
      }
   ],
   skills: {
      levels: {1: "Beginner", 3: "Intermediary", 5: "Advanced"},
      list: {
         PostgreSQL: 3, Windows: 2, JQuery: 4,
         "Network Protocols": 5, Linux: 4, Python: 4,
         Rails: 5, Java: 3
      }
   },
   published_works: [ {
         authors: ["Juaçaba Neto, R. C.", "Rodrigues, E. B.", "Oliveira, T. C."],
         title: "Performance Analysis of Resource Unit Configurations for M2M Traffic in the Narrowband-IoT System",
         venue: "XXXV Simpósio Brasileiro de Telecomunicações e Processamento de Sinais",
         location: "São Pedro, Brazil",
         year: 2017
      }, {
         authors: ["Oliveira Maciel, F. A.", "Juaçaba Neto, R. C.", "Bezerra, R. L.", "Oliveira, C. T.", "Andrade, R. M. C."],
         title: "Uma Proposta de Portal de Aplicação do NS-3 para Aprendizagem de Redes de Computadores",
         venue: "Nuevas Ideas en Informática Educativa",
         location: "Fortaleza, Brazil",
         year: 2014
      }, {
         authors: ["Juaçaba Neto, R. C.", "Andrade, R. M. C.", "Braga, R. B.", "Theoleyre, F.", "Oliveira, C. T."],
         title: "Performance issues with routing in multi-channel multi-interface IEEE 802.11s networks",
         venue: "Wireless Days",
         location: "Rio de Janeiro, Brazil",
         year: 2014
      }, {
         authors: ["Carvalho Junior F. H.", "Rezende, C. A.", "Silva, J. d. C.", "Magalhães, F. J. L.", "Juaçaba Neto, R. C."],
         title: "On the Performance of Multidimensional Array Representations in Programming Languages Based on Virtual Execution Machines",
         venue: "razilian Symposium on Programming Languages",
         location: "Brasília, Brazil",
         year: 2013
      }
   ]
}
