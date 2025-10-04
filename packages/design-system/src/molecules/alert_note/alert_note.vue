<script lang="ts" setup>
	import { tv } from 'tailwind-variants/lite';
	import { computed } from 'vue';
	import Icon from '../../atoms/icon/icon.vue';
	import type { VariantProps } from 'tailwind-variants';

	const props = defineProps<{
		type: NonNullable<AlertProps['type']>;
	}>();

	const alert = tv({
		slots: {
			base: 'flex items-start bg-transparent rounded-lg border-2 border-solid border-gray-800 text-gray-800 gap-2 py-3 px-4',
			icon: 'text-gray-600 shrink-0 size-[20px] pt-[2px]',
		},

		variants: {
			type: {
				success: {
					base: 'bg-lime-100 border-lime-800 text-lime-800',
					icon: 'text-lime-600',
				},

				danger: {
					base: 'bg-red-100 border-red-800 text-red-800',
					icon: 'text-red-600',
				},
			},
		},
	});

	const alertIconMap = {
		success: 'success',
		danger: 'close',
	} as const;

	type AlertProps = VariantProps<typeof alert>;

	const iconName = computed(() => alertIconMap[props.type]);
	const { base, icon } = alert({ type: props.type });
</script>

<template>
	<div :class="base()" role="alert">
		<div :class="icon()">
			<Icon :name="iconName" />
		</div>

		<div :class="$style.content">
			<slot />
		</div>
	</div>
</template>

<style module>
	.content {
		& > * {
			margin-block: 1rem;
		}

		& > :first-child {
			margin-top: 0;
		}

		& > :last-child {
			margin-bottom: 0;
		}
	}
</style>
