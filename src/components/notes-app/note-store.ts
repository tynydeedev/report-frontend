import { HTTP } from './axios-default';

export interface NoteState {
  currentNote: Note;
  all: Note[];
}

export interface Note {
  id: number;
  name: string;
  description: string;
  hashtags: string;
  url: string | null;
}

export const notes = {
  namespaced: true,

  state() {
    return {
      currentNote: {},
      all: [],
    };
  },

  mutations: {
    setAllNotes(state: NoteState, data: Note[]) {
      state.all = data;
    },
  },

  actions: {
    async getAllNotes(ctx) {
      const result = await HTTP.get('tasks');
      const notes = result.data;

      if (!notes.length) return;

      ctx.commit('setAllNotes', notes);
    },
  },
};
