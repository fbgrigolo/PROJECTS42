<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="utf-8">
		<title><?php bloginfo('name'); ?></title>

		<link href='https://fonts.googleapis.com/css?family=Alegreya+SC' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri()?>/style.css">

      <!-- Início Wordpress Header  -->
      <?php wp_head(); ?>
      <!-- Final Wordpress Header  -->

	</head>

	<body>
		
		<header>
			<nav>
				<ul>
					<li class="current_page_item"><a href="/rest/">Menu</a></li>
					<li><a href="/rest/sobre/">Sobre</a></li>
					<li><a href="/rest/contato/">Contato</a></li>
				</ul>
			</nav>

			<h1><img src="<?php echo get_template_directory_uri()?>/img/rest.png" alt="Rest"></h1>

			<p>Rua Marechal 29 – Copacabana – Rj</p>
			<p class="telefone">2422-9201</p>
		</header>
