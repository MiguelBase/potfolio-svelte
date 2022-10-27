import { writable } from 'svelte/store';

const dataStore = writable(23);

export default dataStore;