<script setup lang="ts">
import { Head, Link, useForm } from '@inertiajs/vue3'
import AlertNote from '@mynte/design-system/alert-note'
import Field from '@mynte/design-system/field'
import { useI18n } from 'vue-i18n'
import { usePageErrors } from '~/composables/use_page_errors'
import { client } from '~/core/tuyau'

const errors = usePageErrors()
const { t } = useI18n()

const form = useForm({
  email: '',
  password: '',
})

function handleSubmit() {
  form.post(client.$url('auth.login.execute'))
}
</script>

<template>
  <Head :title="t('auth.log_in')" />

  <h1>{{ t('page_title') }}</h1>

  <p>
    {{ t('not_registered_yet') }}
    <Link :href="client.$url('auth.register.render')">{{ t('auth.register') }}</Link>
  </p>

  <AlertNote v-if="errors && errors.E_INVALID_CREDENTIALS" type="danger">
    {{ t('errors.auth.invalid_credentials') }}
  </AlertNote>

  <form @submit.prevent="handleSubmit">
    <Field id="email" v-model="form.email" :label="t('email')" type="email" required />

    <Field
      id="password"
      v-model="form.password"
      :label="t('password')"
      :error-message="form.errors.password"
      type="password"
      required
    />

    <button type="submit" :disabled="form.processing">{{ t('auth.log_in') }}</button>
  </form>
</template>

<i18n>
{
  "en": {
    "page_title": "Log in to Zeste",
    "not_registered_yet": "Not registered yet?"
  }
}
</i18n>
