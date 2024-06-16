import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from '@/app/layouts/app-layout';
import { HomePage } from '@/pages/home-page';

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<AppLayout />
		),
		children: [
			{
				path: '',
				element: (
					<HomePage />
				),
			}
		],
	}
]);
