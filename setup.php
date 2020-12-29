<!DOCTYPE html>
<html>
	<head>
		<title>Database Setup</title>
	</head>
	<body>
		<p>Setting up...</p>

<?php
	require_once 'functions.php';

	CREATE TABLE IF NOT EXISTS users (
		username VARCHAR(24),
		email VARCHAR(64),
		password VARCHAR(24),
		INDEX(username(8)),
		INDEX(email(12)),
		PRIMARY KEY (username));

	CREATE TABLE IF NOT EXISTS readers (
		username VARCHAR(24),
		reader VARCHAR(24),
		INDEX(reader(8)),
		INDEX(username(8)),
		FOREIGN KEY (username) REFERENCES users(username));

	CREATE TABLE IF NOT EXISTS messages (
		messageId INT UNSIGNED NOT NULL AUTO_INCREMENT,
		sender VARCHAR(24),
		recipient VARCHAR(24),
		message VARCHAR(3000),
		privateMessage CHAR(1),
		date TIMESTAMP,
		INDEX(sender(8)),
		INDEX(recipient(8)),
		INDEX(privateMessage),
		PRIMARY KEY (messageID));

	CREATE TABLE IF NOT EXISTS posts (
		postId INT UNSIGNED NOT NULL AUTO_INCREMENT,
		post MEDIUMBLOB(1.67e+7),
		type VARCHAR(24),
		username VARCHAR(24),
		INDEX(type(8)),
		INDEX(username(8)),
		FOREIGN KEY username REFERENCES users(username),
		PRIMARY KEY (postId));

	CREATE TABLE IF NOT EXISTS comments (
		username VARCHAR(24),
		postId INT UNSIGNED NOT NULL, 
		comment VARCHAR(300),
		INDEX(username(8)),
		INDEX(postId(8)),
		FOREIGN KEY username REFERENCES users(username),
		FOREIGN KEY postId REFERENCES posts(postId));	
	?>
	
		<p>Done</p>
	</body>
</html>
