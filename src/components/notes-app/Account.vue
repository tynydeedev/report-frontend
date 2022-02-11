<template>
  <div>
    <p class="error" v-if="signinError">{{ signinError }}</p>
    <form @submit.prevent="submit">
      <div>
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="username"
          v-model="username"
        />
        <p class="error" v-if="usernameError">
          {{ usernameError }}
        </p>
      </div>
      <div>
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="password"
          v-model="password"
        />
        <p class="error" v-if="passwordError">
          {{ passwordError }}
        </p>
      </div>
      <button>{{ action }}</button>
    </form>
    <router-link
      :to="action === 'Sign Up' ? '/notes/signin' : '/notes/signup'"
      @click="reset"
      >{{
        action === 'Sign Up'
          ? 'Already have an account? Sign In'
          : "Don't have an account? Sign Up"
      }}</router-link
    >
  </div>
</template>

<script lang="ts">
  import axios from 'axios';
  import { computed, defineComponent, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { HTTP } from './axios-default';

  export default defineComponent({
    setup() {
      const route = useRoute();
      const router = useRouter();

      const username = ref();
      const password = ref();

      const usernameError = ref();
      const passwordError = ref();
      const signinError = ref();

      const action = computed(() =>
        route.path === '/notes/signup' ? 'Sign Up' : 'Sign In',
      );

      const validateCredentials = (): boolean => {
        const passwordRegex: RegExp =
          /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
        let error;

        if (username.value.length > 20 || username.value.length < 5) {
          usernameError.value =
            'Username needs to have more than 5 and less than 20 characters';

          error = true;
        }

        if (password.value.length < 8) {
          passwordError.value = 'Password needs to have at least 8 characters';

          error = true;
        } else if (!passwordRegex.test(password.value)) {
          passwordError.value =
            'Password needs to have at least 1 uppercase letter, 1 lowercase letter and 1 number';

          error = true;
        }

        if (error) {
          return false;
        }

        usernameError.value = '';
        passwordError.value = '';

        return true;
      };

      const reset = () => {
        username.value = '';
        password.value = '';
        usernameError.value = '';
        passwordError.value = '';
        signinError.value = '';
      };

      const submit = async () => {
        if (action.value === 'Sign Up') {
          const isValid = validateCredentials();

          if (!isValid) return;

          const result = await HTTP.post('auth/signup', {
            username: username.value,
            password: password.value,
          });

          if (result.status === 201) {
            router.push('/notes/signin');
            reset();
          }
        } else {
          try {
            const result = await HTTP.post('/auth/signin', {
              username: username.value,
              password: password.value,
            });

            const token = result.data.token;

            localStorage.setItem('token', token);

            router.push('/notes/dashboard');
          } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 400) {
              signinError.value = 'Invalid username or password';
            }
          }
        }
      };

      return {
        submit,
        action,
        username,
        password,
        usernameError,
        passwordError,
        reset,
        signinError,
      };
    },
  });
</script>

<style lang="postcss" scoped>
  form {
    @apply container mx-auto flex-col flex items-center;
  }

  form > div {
    @apply w-2/5;
  }

  input {
    @apply w-full border-2 border-slate-500;
  }

  label {
    @apply block mb-1 mt-4;
  }

  a {
    @apply text-center block mt-8 text-blue-600;
  }

  button {
    @apply bg-cyan-400 w-1/6 p-2 rounded mt-4;
  }

  .error {
    @apply italic text-center text-red-600 text-xs;
  }
</style>
