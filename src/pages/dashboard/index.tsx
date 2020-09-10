import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
	return (
		<>
			<img src={logoImg} alt="Github Explorer" />
			<Title>Explore repositórios no Github</Title>

			<Form>
				<input placeholder="Digite o nome do repositório"/>
				<button type="submit">Pesquisar</button>
			</Form>

			<Repositories>
				<a href="">
					<img src="https://avatarfiles.alphacoders.com/249/249080.jpg" alt="" />
					<div>
						<strong>rockeatseat/unforms</strong>
						<p>Easy peasy highly React Forms! 😍</p>
					</div>

					<FiChevronRight size={20} />
				</a>
				<a href="">
					<img src="https://avatarfiles.alphacoders.com/249/249080.jpg" alt="" />
					<div>
						<strong>rockeatseat/unforms</strong>
						<p>Easy peasy highly React Forms! 😍</p>
					</div>

					<FiChevronRight size={20} />
				</a>
				<a href="">
					<img src="https://avatarfiles.alphacoders.com/249/249080.jpg" alt="" />
					<div>
						<strong>rockeatseat/unforms</strong>
						<p>Easy peasy highly React Forms! 😍</p>
					</div>

					<FiChevronRight size={20} />
				</a>
				<a href="">
					<img src="https://avatarfiles.alphacoders.com/249/249080.jpg" alt="" />
					<div>
						<strong>rockeatseat/unforms</strong>
						<p>Easy peasy highly React Forms! 😍</p>
					</div>

					<FiChevronRight size={20} />
				</a>
			</Repositories>
		</>
	)
}

export default Dashboard;