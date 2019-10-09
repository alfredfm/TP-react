-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 07, 2019 at 02:56 PM
-- Server version: 5.7.27
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `goodscep_alfred`
--

-- --------------------------------------------------------

--
-- Table structure for table `alfred_accounts`
--

CREATE TABLE `alfred_accounts` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `instagram_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` text COLLATE utf8_unicode_ci NOT NULL,
  `proxy` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date` datetime NOT NULL,
  `last_login` datetime NOT NULL,
  `login_required` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `alfred_captions`
--

CREATE TABLE `alfred_captions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `caption` text COLLATE utf8_unicode_ci NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `alfred_files`
--

CREATE TABLE `alfred_files` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` text COLLATE utf8_unicode_ci NOT NULL,
  `info` text COLLATE utf8_unicode_ci NOT NULL,
  `filename` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `filesize` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `alfred_general_data`
--

CREATE TABLE `alfred_general_data` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `data` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `alfred_general_data`
--

INSERT INTO `alfred_general_data` (`id`, `name`, `data`) VALUES
(1, 'settings', '{\"site_name\":\"Nextpost\",\"site_description\":\"Nextpost - Auto Post, Schedule & Manage your Instagram Multi Account\",\"site_keywords\":\"nextpost, instagram, auto post, schedule, multiple accounts, social media\",\"currency\":\"USD\",\"proxy\":true,\"user_proxy\":true,\"geonamesorg_username\":\"\",\"logomark\":\"\",\"logotype\":\"\"}'),
(2, 'integrations', '{\"dropbox\":{\"api_key\":\"\"},\"google\":{\"api_key\":\"\",\"client_id\":\"\",\"analytics\":{\"property_id\":\"\"}},\"onedrive\":{\"client_id\":\"\"},\"paypal\":{\"client_id\":\"\",\"client_secret\":\"\",\"environment\":\"sandbox\"},\"stripe\":{\"environment\":\"sandbox\",\"publishable_key\":\"\",\"secret_key\":\"\"},\"facebook\":{\"app_id\":\"\",\"app_secret\":\"\"}}'),
(3, 'free-trial', '{\"size\":7,\"storage\":{\"total\":\"100.00\",\"file\":-1},\"max_accounts\":1,\"file_pickers\":{\"dropbox\":true,\"onedrive\":true,\"google_drive\":true},\"post_types\":{\"timeline_photo\":true,\"timeline_video\":true,\"story_photo\":true,\"story_video\":true,\"album_photo\":true,\"album_video\":true},\"spintax\":true,\"modules\":[]}'),
(4, 'email-settings', '{\"smtp\":{\"host\":\"\",\"port\":\"\",\"encryption\":\"\",\"auth\":true,\"username\":\"\",\"password\":\"\",\"from\":\"\"},\"notifications\":{\"emails\":\"\",\"new_user\":true,\"new_payment\":true}}');

-- --------------------------------------------------------

--
-- Table structure for table `alfred_options`
--

CREATE TABLE `alfred_options` (
  `id` int(11) NOT NULL,
  `option_name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `option_value` longtext COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `alfred_options`
--

INSERT INTO `alfred_options` (`id`, `option_name`, `option_value`) VALUES
(1, 'payload', '5f6d42f88f622062c85120a0dcf837330ac59670.NDQx');

-- --------------------------------------------------------

--
-- Table structure for table `alfred_orders`
--

CREATE TABLE `alfred_orders` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `data` text COLLATE utf8_unicode_ci NOT NULL,
  `status` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `payment_gateway` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `payment_id` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `total` double(10,2) NOT NULL,
  `paid` double(10,2) NOT NULL,
  `currency` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `alfred_packages`
--

CREATE TABLE `alfred_packages` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `monthly_price` double(10,2) NOT NULL,
  `annual_price` float(10,2) NOT NULL,
  `settings` text COLLATE utf8_unicode_ci NOT NULL,
  `is_public` tinyint(1) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `alfred_packages`
--

INSERT INTO `alfred_packages` (`id`, `title`, `monthly_price`, `annual_price`, `settings`, `is_public`, `date`) VALUES
(1, 'Alpha', 4.99, 49.00, '{\"storage\":{\"total\":\"150.00\",\"file\":\"15.00\"},\"max_accounts\":1,\"file_pickers\":{\"dropbox\":false,\"onedrive\":false,\"google_drive\":false},\"post_types\":{\"timeline_photo\":true,\"timeline_video\":false,\"story_photo\":true,\"story_video\":false,\"album_photo\":true,\"album_video\":false},\"spintax\":false}', 1, '2017-03-18 19:22:44'),
(2, 'Beta Pack', 7.99, 79.00, '{\"storage\":{\"total\":\"250\",\"file\":\"30.00\"},\"max_accounts\":3,\"file_pickers\":{\"dropbox\":true,\"onedrive\":true,\"google_drive\":true},\"post_types\":{\"timeline_photo\":true,\"timeline_video\":true,\"story_photo\":true,\"story_video\":true,\"album_photo\":true,\"album_video\":true},\"spintax\":true,\"modules\":[]}', 1, '2017-03-18 19:29:19'),
(3, 'Gamma Pack', 17.99, 165.79, '{\"storage\":{\"total\":\"300.00\",\"file\":\"50.00\"},\"max_accounts\":-1,\"file_pickers\":{\"dropbox\":true,\"onedrive\":true,\"google_drive\":true},\"post_types\":{\"timeline_photo\":true,\"timeline_video\":true,\"story_photo\":true,\"story_video\":true,\"album_photo\":true,\"album_video\":true},\"spintax\":true}', 1, '2017-03-18 19:29:43');

-- --------------------------------------------------------

--
-- Table structure for table `alfred_plugins`
--

CREATE TABLE `alfred_plugins` (
  `id` int(11) NOT NULL,
  `idname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `is_active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `alfred_posts`
--

CREATE TABLE `alfred_posts` (
  `id` int(11) NOT NULL,
  `status` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `type` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `caption` text COLLATE utf8_unicode_ci NOT NULL,
  `first_comment` text COLLATE utf8_unicode_ci NOT NULL,
  `location` text COLLATE utf8_unicode_ci NOT NULL,
  `media_ids` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remove_media` tinyint(1) NOT NULL,
  `account_id` int(11) NOT NULL,
  `is_scheduled` tinyint(1) NOT NULL,
  `create_date` datetime NOT NULL,
  `schedule_date` datetime NOT NULL,
  `publish_date` datetime NOT NULL,
  `is_hidden` tinyint(1) NOT NULL,
  `data` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `alfred_proxies`
--

CREATE TABLE `alfred_proxies` (
  `id` int(11) NOT NULL,
  `proxy` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `country_code` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `use_count` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `alfred_themes`
--

CREATE TABLE `alfred_themes` (
  `id` int(11) NOT NULL,
  `idname` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `alfred_users`
--

CREATE TABLE `alfred_users` (
  `id` int(11) NOT NULL,
  `account_type` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `firstname` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `lastname` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `package_id` int(11) NOT NULL,
  `package_subscription` tinyint(1) NOT NULL,
  `settings` text COLLATE utf8_unicode_ci NOT NULL,
  `preferences` text COLLATE utf8_unicode_ci NOT NULL,
  `is_active` int(11) NOT NULL,
  `expire_date` datetime NOT NULL,
  `date` datetime NOT NULL,
  `data` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `alfred_users`
--

INSERT INTO `alfred_users` (`id`, `account_type`, `email`, `username`, `password`, `firstname`, `lastname`, `package_id`, `package_subscription`, `settings`, `preferences`, `is_active`, `expire_date`, `date`, `data`) VALUES
(1, 'admin', 'ilan.ducret@gmail.com', 'admin', '$2y$10$YzNn7Ij.Ch9osGnhSgihv.8PsZdpYIS6.YhKV2Pz4sPe2qGoMU.n6', 'Ilan', 'Ducret', 3, 1, '{\"storage\":{\"total\":\"300.00\",\"file\":\"50.00\"},\"max_accounts\":-1,\"file_pickers\":{\"dropbox\":true,\"onedrive\":true,\"google_drive\":true},\"post_types\":{\"timeline_photo\":true,\"timeline_video\":true,\"story_photo\":true,\"story_video\":true,\"album_photo\":true,\"album_video\":true},\"spintax\":true}', '{\"timezone\":\"Europe/Paris\",\"dateformat\":\"Y-m-d\",\"timeformat\":\"24\",\"language\":\"en-US\"}', 1, '2030-12-31 23:59:59', '2019-09-17 13:17:00', '{}');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alfred_accounts`
--
ALTER TABLE `alfred_accounts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id_2` (`user_id`,`username`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `alfred_captions`
--
ALTER TABLE `alfred_captions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `alfred_files`
--
ALTER TABLE `alfred_files`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `alfred_general_data`
--
ALTER TABLE `alfred_general_data`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `alfred_options`
--
ALTER TABLE `alfred_options`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `option_name` (`option_name`);

--
-- Indexes for table `alfred_orders`
--
ALTER TABLE `alfred_orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `alfred_packages`
--
ALTER TABLE `alfred_packages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `title` (`title`);

--
-- Indexes for table `alfred_plugins`
--
ALTER TABLE `alfred_plugins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idname` (`idname`);

--
-- Indexes for table `alfred_posts`
--
ALTER TABLE `alfred_posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `status` (`status`),
  ADD KEY `account_id` (`account_id`);

--
-- Indexes for table `alfred_proxies`
--
ALTER TABLE `alfred_proxies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `alfred_themes`
--
ALTER TABLE `alfred_themes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idname` (`idname`);

--
-- Indexes for table `alfred_users`
--
ALTER TABLE `alfred_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `firstname` (`firstname`),
  ADD KEY `lastname` (`lastname`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alfred_accounts`
--
ALTER TABLE `alfred_accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `alfred_captions`
--
ALTER TABLE `alfred_captions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `alfred_files`
--
ALTER TABLE `alfred_files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `alfred_general_data`
--
ALTER TABLE `alfred_general_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `alfred_options`
--
ALTER TABLE `alfred_options`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `alfred_orders`
--
ALTER TABLE `alfred_orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `alfred_packages`
--
ALTER TABLE `alfred_packages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `alfred_plugins`
--
ALTER TABLE `alfred_plugins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `alfred_posts`
--
ALTER TABLE `alfred_posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `alfred_proxies`
--
ALTER TABLE `alfred_proxies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `alfred_themes`
--
ALTER TABLE `alfred_themes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `alfred_users`
--
ALTER TABLE `alfred_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `alfred_accounts`
--
ALTER TABLE `alfred_accounts`
  ADD CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `alfred_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `alfred_captions`
--
ALTER TABLE `alfred_captions`
  ADD CONSTRAINT `captions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `alfred_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `alfred_posts`
--
ALTER TABLE `alfred_posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `alfred_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`account_id`) REFERENCES `alfred_accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
