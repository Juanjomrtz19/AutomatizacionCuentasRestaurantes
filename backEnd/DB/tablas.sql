CREATE TABLE `user` (
  `restaurant_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `restaurant_address` varchar(300) NOT NULL,
  `password` varchar(1000) NOT NULL,
  `url_restaurant_menu` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`restaurant_name`)
);

CREATE TABLE `restaurant_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_name`) REFERENCES `user`(`restaurant_name`) 
    ON UPDATE CASCADE
    ON DELETE CASCADE
);

CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_menu` int(11) NOT NULL,
  `type` varchar(50) NOT NULL DEFAULT 'food',
  `img_address` varchar(300) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(4000) NOT NULL,
  `ingredients` varchar(500) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_menu`) REFERENCES `restaurant_menu`(`id`)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);
