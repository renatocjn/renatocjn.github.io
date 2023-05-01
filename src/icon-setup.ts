import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  fas, faEnvelope, faPhone, 
  faLocationDot, faArrowUp, faStar as faStarSolid, 
  faStarHalf, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(
  fas, faGithub, faEnvelope, 
  faPhone, faLocationDot, faArrowUp, 
  faStarHalf, faStarSolid, faStarRegular, 
  faBarsStaggered)