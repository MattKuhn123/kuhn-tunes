import tunes from '../../../static/db.json';

import type { PageServerLoad } from './$types';

type Tune = {
	title: string;
	group: string;
	created: Date;
	src: string;
};

export const load: PageServerLoad = async ({ locals }) => {
	return { tunes: tunes as unknown as Tune[] };
};