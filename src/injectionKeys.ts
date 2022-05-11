import type { InjectionKey } from 'vue';
import type { ContactDetails, Experience, SkillCategory } from '@/types';

export const nameKey = Symbol() as InjectionKey<string>;
export const taglineKey = Symbol() as InjectionKey<string>;
export const contactKey = Symbol() as InjectionKey<ContactDetails>;
export const experienceKey = Symbol() as InjectionKey<Experience[]>;
export const skillsKey = Symbol() as InjectionKey<SkillCategory[]>;
