"use client";

import React, { useState } from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Container, TextField, Button, Paper, Typography, Box, IconButton, Avatar } from '@mui/material';
import { Send, AttachFile } from '@mui/icons-material';
import { useDropzone } from 'react-dropzone';

type ChatMessage = {
  type: 'text' | 'image' | 'ui';
  content: string | JSX.Element;
  sender: 'user' | 'bot';
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50',
    },
    secondary: {
      main: '#FF5722',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const ContainerStyled = styled(Container)({
  padding: '20px',
});

const PaperStyled = styled(Paper)({
  padding: '20px',
  height: '70vh',
  overflowY: 'auto',
  marginBottom: '20px',
  backgroundColor: '#f5f5f5',
});

const MessageBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
});

const MessageContent = styled(Typography)(({ theme, sender }: { theme: any, sender: string }) => ({
  padding: '10px',
  borderRadius: '10px',
  backgroundColor: sender === 'user' ? theme.palette.primary.main : theme.palette.secondary.main,
  color: '#fff',
  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
  maxWidth: '80%',
  wordWrap: 'break-word',
  marginLeft: sender === 'user' ? 'auto' : '0',
  marginRight: sender === 'user' ? '0' : 'auto',
}));

const InputContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginTop: '10px',
});

const TextFieldStyled = styled(TextField)({
  flexGrow: 1,
  marginRight: '10px',
});

const AttachButton = styled(IconButton)({
  marginRight: '10px',
});

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { type: 'text', content: 'Hello! How can I help you today?', sender: 'bot' },
    { type: 'text', content: 'Feel free to attach any files or images.', sender: 'bot' },
  ]);
  const [input, setInput] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);

  const handleDrop = (acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  };

  const handleSend = () => {
    if (input.trim() || file) {
      const newMessage: ChatMessage = {
        type: file ? 'image' : 'text',
        content: file ? URL.createObjectURL(file) : input,
        sender: 'user',
      };
      setMessages([...messages, newMessage]);
      setInput('');
      setFile(null);

      // Simulate bot response
      setTimeout(() => {
        const botResponse: ChatMessage = {
          type: 'text',
          content: 'This is a bot response',
          sender: 'bot',
        };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      }, 1000);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop: handleDrop });

  return (
    <ThemeProvider theme={theme}>
      <ContainerStyled maxWidth="sm" color='blue'>
        <PaperStyled>
          {messages.map((msg, index) => (
            <MessageBox key={index} style={{ justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
              {msg.sender === 'bot' && (
                <Avatar style={{ marginRight: '10px', backgroundColor: theme.palette.secondary.main }}>B</Avatar>
              )}
              <MessageContent sender={msg.sender}>
                {msg.type === 'text' ? msg.content : <Box component="img" src={msg.content as string} alt="uploaded file" style={{ maxWidth: '100%' }} />}
              </MessageContent>
              {msg.sender === 'user' && (
                <Avatar style={{ marginLeft: '10px', backgroundColor: theme.palette.primary.main }}>U</Avatar>
              )}
            </MessageBox>
          ))}
        </PaperStyled>
        <InputContainer>
          <TextFieldStyled
            variant="outlined"
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <AttachButton {...getRootProps()}>
            <input {...getInputProps()} />
            <AttachFile />
          </AttachButton>
          <Button variant="contained" color="primary" onClick={handleSend} endIcon={<Send />}>
            Send
          </Button>
        </InputContainer>
      </ContainerStyled>
    </ThemeProvider>
  );
};

export default ChatBot;
