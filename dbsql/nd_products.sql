CREATE TABLE `nd_products` (
	`id` BIGINT(20) NOT NULL AUTO_INCREMENT,
	`product_name` VARCHAR(50) NOT NULL,
	`product_price` INT(11) NULL DEFAULT '0',
	`product_image` VARCHAR(50) NULL DEFAULT NULL,
	`created_date` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
	INDEX `Index 1` (`id`)
) COLLATE='utf8_general_ci' ENGINE=InnoDB AUTO_INCREMENT=5;


INSERT INTO `nd_products` (`id`, `product_name`, `product_price`, `product_image`, `created_date`) VALUES (2, 'Lenovo B40', 4300, 'http://example.com/img_product_2.png', '2017-05-18 22:16:57');
INSERT INTO `nd_products` (`id`, `product_name`, `product_price`, `product_image`, `created_date`) VALUES (3, 'XYON 350', 65000, 'http://example.com/img_product_3242.png', '2017-05-18 22:17:48');
INSERT INTO `nd_products` (`id`, `product_name`, `product_price`, `product_image`, `created_date`) VALUES (4, 'SPARK 654 GOLD', 9900, 'http://example.com/img_product_3442.png', '2017-05-18 22:17:48');
