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
    contact:'Contacto'
})
export const en_nav_titles = writable({
    profile: 'Profile',
    projects: 'Projects',
    tecnologies: 'Tecnologies',
    social: 'Social',
    contact:'Contact'
})

export const current_nav_titles= writable(es_nav_titles)

export const en_nav_title_profile = writable('Profile');
export const en_nav_title_projects = writable('Projects');
export const en_nav_title_tecnologies = writable('Tecnologies');
export const en_nav_title_social = writable('Social');
export const en_nav_title_contact = writable('Contact');