<script setup lang="ts">
import { Head, Link, useForm } from '@inertiajs/vue3'
import { useI18n } from 'vue-i18n'
import { useCurrentUser } from '~/composables/use_current_user'
import { client } from '~/core/tuyau'

const currentUser = useCurrentUser()
const { t } = useI18n()
const form = useForm({})
</script>

<template>
  <Head title="Homepage" />

  <h1>Homepage</h1>

  <div v-if="!Object.keys(currentUser).length" class="flex flex-col">
    <Link :href="client.$url('auth.login.render')">{{ t('auth.log_in') }}</Link>
    <Link :href="client.$url('auth.register.render')">{{ t('auth.register') }}</Link>
  </div>
  <div v-else>
    <form @click.prevent="form.delete(client.$url('auth.logout.execute'))">
      <button type="submit">{{ t('auth.log_out') }}</button>
    </form>
  </div>
</template>
