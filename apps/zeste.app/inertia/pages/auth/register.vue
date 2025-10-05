<script setup lang="ts">
import { Head, Link, useForm } from '@inertiajs/vue3'
import Field from '@mynte/design-system/field'
import { useI18n } from 'vue-i18n'
import { client } from '~/core/tuyau'

const { t } = useI18n()

const form = useForm({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
})

function handleSubmit() {
  form.post(client.$url('auth.register.execute'))
}
</script>

<template>
  <Head :title="t('auth.register')" />

  <h1>{{ t('page_title') }}</h1>

  <p>
    {{ t('already_a_member') }}
    <Link :href="client.$url('auth.login.render')">{{ t('auth.log_in') }}</Link>
  </p>

  <form class="gap-3 grid" @submit.prevent="handleSubmit">
    <Field
      v-model="form.firstName"
      :label="t('first_name')"
      type="text"
      :error-message="form.errors.firstName"
      required
    />

    <Field
      v-model="form.lastName"
      :label="t('last_name')"
      type="text"
      :error-message="form.errors.lastName"
      required
    />

    <Field
      v-model="form.email"
      :label="t('email')"
      type="email"
      :error-message="form.errors.email"
    />

    <Field
      v-model="form.password"
      :label="t('password')"
      type="password"
      :error-message="form.errors.password"
      required
    />

    <Field
      v-model="form.passwordConfirmation"
      :label="t('password_confirmation')"
      type="password"
      :error-message="form.errors.passwordConfirmation"
      required
    />

    <button type="submit">{{ t('auth.register') }}</button>
  </form>
</template>

<i18n>
{
  "en": {
    "page_title": "Create a Zeste account",
    "already_a_member": "Already a member?"
  }
}
</i18n>
