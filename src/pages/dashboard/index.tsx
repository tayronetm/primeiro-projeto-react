import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories, Error } from './styles';

import api from '../../services/api';

interface Repository {
	//só as informações necessárias
	full_name: string;
	description: string;
	owner: {
		login: string;
		avatar_url: string;
	}
}

const Dashboard: React.FC = () => {
	const [newRepo, setNewRepo] = useState('');
	const [inputError, setInputError] = useState('');
	const [repositories, setRepositories] = useState<Repository[]>([]);

	async function handleAddRepo(event: FormEvent<HTMLFormElement>): Promise<void> {
		event.preventDefault();
		if (!newRepo) {
			setInputError('Digite o autor/nome do repositório');
			return;
		}
		
		try {
			const response = await api.get<Repository>(`repos/${newRepo}`);

			const repository = response.data;
	
			setRepositories([...repositories, repository]);
			setNewRepo('');
			setInputError('');
		} catch (err) {
			setInputError('Erro ao buscar repositório');
		}
	}

	return (
		<>
			<img src={logoImg} alt="Github Explorer" />
			<Title>Explore repositórios no Github</Title>

			<Form hasError={!!inputError} onSubmit={handleAddRepo}>
				<input 
				value={newRepo}
				onChange={e => setNewRepo(e.target.value)}
				placeholder="Digite o nome do repositório"/>
				<button type="submit">Pesquisar</button>
			</Form>

			{/* só exibe se inputError for true */}
			{ inputError && <Error>{inputError}</Error> }

			<Repositories>
			{repositories.map(repository => (
					<a key={repository.full_name} href="teste">
					<img src={repository.owner.avatar_url} alt={repository.owner.login} />
					<div>
						<strong>{repository.full_name}</strong>
						<p>{repository.description}</p>
					</div>

					<FiChevronRight size={20} />
				</a>
			))}
			</Repositories>
		</>
	)
}

export default Dashboard;