import { AxiosResponse } from 'axios';
import { Store } from 'vuex';
import { HTTP } from './axios-default';

export interface NoteState {
  currentNote: Note;
  all: Note[];
  auth: boolean;
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
      auth: null,
    };
  },

  mutations: {
    setAllNotes(state: NoteState, data: Note[]) {
      state.all = data;
    },

    setAuth(state: NoteState, status: boolean) {
      state.auth = status;
    },
  },

  actions: {
    async getAllNotes(ctx: Store<NoteState>): Promise<void> {
      let result: AxiosResponse;

      try {
        result = await HTTP.get('tasks', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        ctx.commit('setAuth', true);
      } catch (error) {
        return ctx.commit('setAuth', false);
      }

      const notes = result.data;

      if (!notes.length) return;

      ctx.commit('setAllNotes', notes);
    },
  },
};
