import { usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import type UserDto from '#users/dtos/user'

export function useCurrentUser() {
  return computed(() => usePage().props.currentUser as UserDto)
}
