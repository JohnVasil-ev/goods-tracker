import { Button, Panel, PanelHeader, SimpleCell, SplitCol, SplitLayout, useAdaptivityConditionalRender,useAppearance,View } from '@vkontakte/vkui';

import { useDispatch } from '@/store/hooks';
import { toggleTheme } from '@/store/slices/app';

export function HomePage() {
	const { viewWidth } = useAdaptivityConditionalRender();
	const appearance = useAppearance();
	const dispatch = useDispatch();

	const onClick = () => dispatch(toggleTheme());

	return (
		<SplitLayout header={<PanelHeader delimiter="none" />}>
			{viewWidth.tabletPlus && (
				<SplitCol width={280} className={viewWidth.tabletPlus.className}>
					<Panel id="nav">Navigation</Panel>
				</SplitCol>
			)}
			<SplitCol autoSpaced>
				<View activePanel="profile">
					<Panel id="profile">
						<SimpleCell>Темным-темно</SimpleCell>
						<Button onClick={onClick}>{appearance} тема</Button>
					</Panel>
				</View>
			</SplitCol>
		</SplitLayout>
	);
}
