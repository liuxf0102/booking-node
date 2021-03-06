CREATE TABLE `bk_dates` (
	`id` BIGINT(20) NOT NULL AUTO_INCREMENT,
	`user_id1` VARCHAR(50) NOT NULL,
	`user_id2` VARCHAR(50) NULL DEFAULT NULL,
	`yearmd` VARCHAR(10) NULL DEFAULT NULL,
	`hourms` VARCHAR(10) NULL DEFAULT NULL,
	`is_first` VARCHAR(1) NULL DEFAULT NULL,
	`job_desc` VARCHAR(500) NULL DEFAULT NULL,
	`job_location` VARCHAR(500) NULL DEFAULT NULL,
	`remark` VARCHAR(500) NULL DEFAULT NULL,
	`modify_date` datetime  NULL DEFAULT null,
	`created_date` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
	INDEX `Index 1` (`id`)
) COLLATE='utf8_general_ci' ENGINE=InnoDB AUTO_INCREMENT=5;


