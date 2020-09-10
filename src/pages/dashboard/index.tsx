import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Title } from './styles';

const Dashboard: React.FC = () => {
	return (
		<>
			<img src={logoImg} alt="Github Explorer" />
			<Title>Explore repositórios no Github</Title>
		</>
	)
}

export default Dashboard;