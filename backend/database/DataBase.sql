/*
SQLyog Ultimate v11.33 (64 bit)
MySQL - 8.0.30 : Database - merninformaticadp
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`merninformaticadp` /*!40100 DEFAULT CHARACTER SET cp866 */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `merninformaticadp`;

/*Table structure for table `blogs` */

DROP TABLE IF EXISTS `blogs`;

CREATE TABLE `blogs` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `content` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=cp866;

/*Data for the table `blogs` */

insert  into `blogs`(`id`,`title`,`content`,`createdAt`,`updatedAt`) values (1,'The Importance of Regular Exercise','Regular exercise is crucial for maintaining good physical and mental health. It can help reduce the risk of chronic diseases such as heart disease, diabetes, and certain cancers.','2024-05-05 17:22:39','2024-05-05 17:22:39'),(2,'Tips for Remote Work Productivity','With the rise of remote work, staying productive outside of the traditional office environment is key. Some tips for maximizing productivity while working remotely include creating a dedicated workspace, establishing a routine, and taking regular breaks.','2024-05-05 17:22:39','2024-05-05 17:22:39'),(3,'The Benefits of Meditation','Meditation has numerous benefits for both the mind and body. It can help reduce stress, improve focus and concentration, promote emotional well-being, and enhance self-awareness.','2024-05-05 17:22:39','2024-05-05 17:22:39'),(4,'Healthy Eating Habits for Better Nutrition','Eating a balanced diet is essential for maintaining optimal health and nutrition. Focus on consuming a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats.','2024-05-05 17:22:39','2024-05-05 17:22:39'),(5,'Effective Time Management Strategies','Effective time management is key to achieving personal and professional goals. Some strategies for better time management include prioritizing tasks, setting SMART goals, and minimizing multitasking.','2024-05-05 17:22:39','2024-05-05 17:22:39');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
