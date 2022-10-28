import { writable } from 'svelte/store';

export const es_nav_title_profile = writable('Perfil');
export const es_nav_title_projects = writable('Proyectos');
export const es_nav_title_tecnologies = writable('Tecnologias');
export const es_nav_title_social = writable('Social');
export const es_nav_title_contact = writable('Contacto');

export const es_nav_titles = writable({
    profile: 'Perfil',
    projects: 'Proyectos',
    tecnologies: 'Tecnologias',
    social: 'Social',
    contact:'Contacto',
    about_me:'Me gusta bastante soñar y pensar en grandes ideas siempre parezco distante pero es porque mi cabeza suele estar en algo tonto como una historia/ manga donde lo de la tierra plana tuviera alguna sentido. Si bien ahora estudio informática no fue realmente mi primera opción de carrera antes buscaba trabajar en la NASA pues lo que sea que haya mas allá de las estrellas es algo para soñar y descubrir pero como no tenia idea de por donde comenzar y como aun era nueva en Barcelona cogí el primer instituto donde me aceptaron y así pues comenzó mi camino por informática. Eh podido ver un poco de todo en la informática desde redes, servidores, web, data science, etc. Aun creyendo que hay algo nuevo por ver o aprender Mis hobbies son básicos anime, videojuegos, gym, bailar, cantar y cocinar En mi mente sueño con tener una hamaca y dormir todo el dia'
})
export const en_nav_titles = writable({
    profile: 'Profile',
    projects: 'Projects',
    tecnologies: 'Tecnologies',
    social: 'Social',
    contact:'Contact',
    about_me: `I quite like to dream and think of great ideas I always seem distant but it's because my head is usually in something silly like a story / manga where the flat earth would make some sense. Although now I study computer science it was not really my first career option before I was looking to work at NASA because whatever lies beyond the stars is something to dream and discover but since I had no idea of ​​fear where to start and how I was still new in Barcelona he took the first institute where I was accepted and so my journey through computer science began. I have been able to see a bit of everything in computing from network, server, web, data science, etc. Although believing that there is something new to see or learn My basic hobbies are anime, video games, gym, dancing, singing and cooking In my mind I dream of having a hammock and sleeping all day`
})

export const current_nav_titles= writable(es_nav_titles)

export const en_nav_title_profile = writable('Profile');
export const en_nav_title_projects = writable('Projects');
export const en_nav_title_tecnologies = writable('Tecnologies');
export const en_nav_title_social = writable('Social');
export const en_nav_title_contact = writable('Contact');


