import React from 'react';
import ChatBot from 'react-simple-chatbot';
import {data, title} from '../data/data.json';
import {ThemeProvider} from 'styled-components';
import {database} from '../utils/firebase';

const theme = {
  background: '#FFF',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#2E2D33',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#2E2D33',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const WithChat = () => {
	const handleEnd = ({renderedSteps, steps, values }) => {
		const currentDate = new Date().getTime();

		database.ref(`/users/${currentDate}`).set({
			name: values[0],
			option: values[1],
			email: values[2]
		});
	}

	return (
		<ThemeProvider theme={theme}>
			<ChatBot
				handleEnd={handleEnd}
				headerTitle={title}
				steps={data}
				width="100%"
			/>
		</ThemeProvider>
	);
};

export default WithChat;