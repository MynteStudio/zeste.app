<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <Head title="Homepage" />

  <h1>Homepage</h1>

  <p>{{ t('welcome') }}</p>
  <p>{{ t('hello') }}</p>
</template>

<i18n>
{
  "en": {
    "hello": "hello world!"
  }
}
</i18n>
