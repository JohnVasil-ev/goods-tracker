import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { AppThemeLayout } from '@/app/layouts/app-theme-layout';
import { router } from '@/app/router';
import { configureAppStore } from '@/store';

import '@vkontakte/vkui/dist/vkui.css';

const store = configureAppStore();

export function App() {
	return (
		<ReduxProvider store={store}>
			<AppThemeLayout>
				<RouterProvider router={router} />
			</AppThemeLayout>
		</ReduxProvider>
	);
}
