import { mount, shallowMount } from '@vue/test-utils';
import { expect, test, it } from 'vitest';

import MBtn from '../MBtn/MBtn.vue';

test('mount component', async () => {
	expect(MBtn).toBeTruthy();

	it('renders a button with label if "to" prop is not provided', () => {
		const label = 'Click me';
		const wrapper = shallowMount(MBtn, {
			props: {
				label,
			},
		});
		expect(wrapper.find('button').exists()).toBe(true);
		expect(wrapper.find('button').text()).toBe(label);
		expect(wrapper.find('RouterLink').exists()).toBe(false);
	});

	it('renders a RouterLink with label if "to" prop is provided', () => {
		const label = 'Click me';
		const to = '/path/to/page';
		const wrapper = shallowMount(MBtn, {
			props: {
				label,
				to,
			},
		});
		expect(wrapper.find('RouterLink').exists()).toBe(true);
		expect(wrapper.find('button').exists()).toBe(false);
		expect(wrapper.find('RouterLink').text()).toBe(label);
		expect(wrapper.find('RouterLink').props().to).toBe(to);
	});

	it('renders an icon slot if "icon" prop is true', () => {
		const label = 'Click me';
		const icon = true;
		const wrapper = shallowMount(MBtn, {
			props: {
				label,
				icon,
			},
			slots: {
				icon: '<i class="fa fa-user"></i>',
			},
		});
		expect(wrapper.find('i.fa.fa-user').exists()).toBe(true);
	});
});
