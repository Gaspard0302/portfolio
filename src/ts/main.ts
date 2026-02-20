import { initHero } from './sections/hero';
import { initProjects } from './sections/projects';
import { initEducation } from './sections/education';
import { initWorkHistory } from './sections/workHistory';
import { initPapers } from './sections/papers';
import { initExperience } from './sections/experience';
import { initSkills } from './sections/skills';
import { initContact } from './sections/contact';
import { initFooter } from './sections/footer';
import { initChatbot } from './sections/chatbot';
import { initHeroAnimation, initScrollReveals, initNavbarScroll } from './animations';

document.addEventListener('DOMContentLoaded', () => {
  // Build dynamic DOM sections synchronously
  initHero();
  initProjects();
  initEducation();
  initWorkHistory();
  initPapers();
  initExperience();
  initSkills();
  initContact();
  initFooter();
  initChatbot();

  // Start animations after DOM is fully populated
  initNavbarScroll();
  initHeroAnimation();
  initScrollReveals();
});
