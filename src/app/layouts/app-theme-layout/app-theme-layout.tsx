import { PropsWithChildren } from 'react';
import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui'

import { useSelector } from '@/store';

export function AppThemeLayout({ children }: PropsWithChildren) {
	const platform = useSelector(state => state.app.platform);
	const appearance = useSelector(state => state.app.appearance);

	return (
		<ConfigProvider platform={platform} appearance={appearance}>
			<AdaptivityProvider>
				<AppRoot>{children}</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}
