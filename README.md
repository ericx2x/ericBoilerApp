download to your local and make sure you have node js installed on your terminal. 

run npm i from the main project folder. run npm start.

make a new terminal session. run npm i from the client folder, then run npm start.

Make a mysql database with these tables:
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `employee_id` int DEFAULT NULL,
  `user_type` varchar(50) DEFAULT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `user` (`employee_id`, `user_type`, `username`, `password`) VALUES
                   (NULL, 'SUPER ADMIN', 'admin', 'admin'),
                   (1, 'NORMAL', 'robin', 'robin'),
                   (2, 'ADMIN', 'taylor', 'taylor'),
                   (3, 'ADMIN', 'vivian', 'vivian'),
                   (4, 'NORMAL', 'harry', 'harry'),
                   (7, 'ADMIN', 'melinda', 'melinda'),
                   (8, 'NORMAL', 'harley', 'harley');



done!
