import React from 'react';
import PropTypes from 'prop-types';

import {Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Banner} from '@vkontakte/vkui';

const Home = ({ id }) => (
	<Panel id={id}>
		<PanelHeader>Визитка команды</PanelHeader>
		<Div>
			<Group header={<Header mode="secondary">Любители чая</Header>}>
				<Banner
					before={<Avatar size={96} src="https://iamquietw.github.io/VezdekodVMA1/materials/Yumi.png" />}
					header="Yumi"
					subheader="Yumi - название нашей Команды. Мы очень любим чай, и считаем что однажды выиграли Хакатон именно с помощью чая."
				/>
				<Banner
					before={<Avatar size={96} src="https://sun9-69.userapi.com/impg/IynIcaXu2lbz8rLDdAovl5yUWnoaiCBxBcWEtA/BScvlHidSCI.jpg?size=602x586&quality=96&sign=34946bb51c353b8b54d952b1df003116&type=album" />}
					header="Сергей Галкин"
					subheader="Добрый чел. Люблю чай, котиков и кодить. Fullstack разработчик команды. Цель жизни — попасть в Команду ВКонтакте. Если мы выиграем, то потрачу деньги на чай. 😛"
				/>
				<Banner
					before={<Avatar size={96} src="https://vk.com/images/camera_200.png" />}
					header="Данила Митряшкин"
					subheader="Меня зовут ДанИЛА, с буквой А на конце. Люблю чай, котиков и познавать что-то новое! Пока целью в моей жизни является самореализование. Если мы выиграем, то купим чай, но пока не знаем какой."
				/>
			</Group>
		</Div>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired
};

export default Home;
