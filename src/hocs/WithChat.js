import React from 'react';
import ChatBot from 'react-simple-chatbot';
import {data} from '../data/data.json';
import {ThemeProvider} from 'styled-components';

const theme = {
	background: '#FFF',
	botBubbleColor: '#2E2D33',
	botFontColor: '#FFF',
}

const WithChat = () => (
	<ThemeProvider theme={theme}>
		<ChatBot
			hideHeader
			steps={data}
			width="100%"
		/>
	</ThemeProvider>
);

export default WithChat;