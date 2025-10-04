<script lang="ts">
	export const IconName = ['close', 'dropdown', 'success'] as const;

	export type IconName = (typeof IconName)[number];
</script>

<script lang="ts" setup>
	defineProps<{
		name: IconName;
	}>();
</script>

<template>
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<use :href="`#${name}`" />

		<symbol id="close">
			<svg stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M18 6 6 18" />
				<path d="m6 6 12 12" />
			</svg>
		</symbol>

		<symbol id="dropdown">
			<path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		</symbol>

		<symbol id="success">
			<path d="M20 6 9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		</symbol>
	</svg>
</template>
