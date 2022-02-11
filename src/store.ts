import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { notes, NoteState } from './components/notes-app/note-store';

export interface State {
  notes: NoteState;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules: {
    notes,
  },
});

export function useStore() {
  return baseUseStore(key);
}
