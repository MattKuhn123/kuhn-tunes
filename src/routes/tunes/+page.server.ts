import tunes from '../../../static/db.json';

import type { PageServerLoad, Action } from './$types';

type Tune = {
	title: string;
	group: string;
	created: string;
	tags: string[];
	src: string;
};

export const load: PageServerLoad = async ({ locals }) => {
	return { tunes: tunes as unknown as Tune[] };
};