import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
  onSignup: (username: string, password: string) => void;
}

const AuthComponent: React.FC<LoginFormProps> = ({ onLogin, onSignup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSignup) {
      onSignup(username, password);
    } else {
      onLogin(username, password);
    }
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  const toggleSignup = () => {
    setIsSignup(!isSignup);
  };

  return (
    <Box sx={{ maxWidth: 400, m: "auto" }}>
      <Typography variant="h5" gutterBottom textAlign={"center"}>
        {isSignup ? "Sign up" : "Log in"}
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {isSignup && (
          <TextField
            id="confirmPassword"
            label="Confirm Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        )}
        <Button
          sx={{ my: 2 }}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          {isSignup ? "Sign up" : "Log in"}
        </Button>
        <Button
          type="button"
          variant="outlined"
          fullWidth
          onClick={toggleSignup}
        >
          {isSignup ? "Back to Log in" : "Sign up"}
        </Button>
      </Box>
    </Box>
  );
};

export default AuthComponent;
