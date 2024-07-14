<template>
    <div class="login-container">
        <h1>Login to {{ appName }}</h1>
        <form @submit.prevent="tokenSent ? submitToken() : sendEmail()">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email" required :disabled="tokenSent">
            </div>
            <div class="form-group">
                <label for="token">Login Code</label>
                <input type="text" id="token" v-model="token" required :disabled="!tokenSent">
            </div>
            <button type="submit">{{ tokenSent ? 'Login' : 'Send Email' }}</button>
        </form>
    </div>
</template>

<script lang="ts">
import { supabase } from '../supabaseClient';

export default {
    data() {
        return {
            email: '',
            token: '',
            tokenSent: false,
            appName: import.meta.env.VITE_APP_NAME as string
        };
    },
    methods: {
        async sendEmail() {
            try {
                const { error } = await supabase.auth.signInWithOtp({
                    email: this.email,
                    options: {
                        shouldCreateUser: false
                    }
                });
                if (error) throw error;
                alert('Please check your email inbox for the login code.');
                this.tokenSent = true;
            } catch (error) {
                if (error instanceof Error) {
                    alert(error.message);
                } else {
                    console.error("An unknown error occurred", error);
                }
            }
        },
        async submitToken() {
            try {
                const { error } = await supabase.auth.verifyOtp({
                    email: this.email,
                    token: this.token,
                    type: 'email'
                });
                if (error) {
                    throw error;
                }
                this.$router.push({ name: 'home' });
            } catch (error) {
                if (error instanceof Error) {
                    alert(error.message);
                } else {
                    console.error("An unknown error occurred", error);
                }
            }
        }
    }
};
</script>