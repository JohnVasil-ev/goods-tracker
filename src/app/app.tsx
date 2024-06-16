import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { router } from '@/app/router';
import { configureAppStore } from '@/store';

const store = configureAppStore();

export function App() {
	return (
		<ReduxProvider store={store}>
			<RouterProvider router={router} />
		</ReduxProvider>
	);
}
