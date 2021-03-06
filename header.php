<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package pit-stop
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pit-Stop</title>
    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.1.0/animate.min.css">
    <script src="https://cdn.rawgit.com/matthieua/WOW/1.0.1/dist/wow.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <?php wp_head(); ?>
  </head>
</html>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
  <header class="header wow fadeInDown animated" data-wow-delay="0.8s">
    <div class="containers"> 
      <div class="header__block"> 
        <div class="header__block-logo"> <a href="/">PIT-STOP </a></div>
        <ul class="header__block-list">
          <li class="header__block-list-item" id="headerServicesButton"><a href="#">???????????? </a></li>
          <li class="header__block-list-item"> <a href="price.html">???????? </a></li>
          <li class="header__block-list-item"> <a href="reviews.html">???????????? </a></li>
          <li class="header__block-list-item" id="headerAddressButton"><a href="#">???????????????? </a></li>
          <li class="header__block-list-item"> <a href="client.html">????????.???????????????? </a></li>
        </ul>
        <div class="header__block-phone"> <a href="tel:+74950218878"> +7 495 021-88-78</a><a href="tel:+74952331763"> +7 495 233-17-63</a></div>
        <div class="header__block-services display-n" id="headerServices">
          <ul class="header__block-services-list">
            <div class="header__block-services-list-title">????????????????</div>
            <?php
          $pokraska_menu = wp_nav_menu([
            'menu' => 'pokraska',
            'echo' => false,
            'container'       => false,
            'menu_class' => 'header__block-services-list-item',
            'items_wrap'      => '%3$s',
            'add_li_class'  => 'header__block-services-list-item'
          ]);

          echo strip_tags($pokraska_menu, '<li> <a>');
          ?>
         
          </ul>
          <ul class="header__block-services-list">
            <div class="header__block-services-list-title">????????????????????</div>
            <?php
            //????????????????????
            $pokraska_menu = wp_nav_menu([
            'menu' => 'shinomontazh',
            'echo' => false,
            'container'       => false,
            'menu_class' => 'header__block-services-list-item',
            'items_wrap'      => '%3$s',
            'add_li_class'  => 'header__block-services-list-item'
          ]);

          echo strip_tags($pokraska_menu, '<li> <a>');
          ?>
            
          </ul>
          <ul class="header__block-services-list">
            <div class="header__block-services-list-title">???????????? ????????????</div>
            <?php
            //???????????? ????????????
            $pokraska_menu = wp_nav_menu([
            'menu' => 'other',
            'echo' => false,
            'container'       => false,
            'menu_class' => 'header__block-services-list-item',
            'items_wrap'      => '%3$s',
            'add_li_class'  => 'header__block-services-list-item'
          ]);

          echo strip_tags($pokraska_menu, '<li> <a>');
          ?>
          </ul>
        </div>
        <div class="header__block-menu" id="menuOpen"><svg width="38" height="13" viewBox="0 0 38 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="0.5" x2="37.5" y2="0.5" stroke="white" stroke-linecap="round"/>
<line x1="0.5" y1="6.5" x2="37.5" y2="6.5" stroke="white" stroke-linecap="round"/>
<line x1="0.5" y1="12.5" x2="37.5" y2="12.5" stroke="white" stroke-linecap="round"/>
</svg>
        </div>
        <div class="header__block-address display-n" id="headerAddress">
          <ul class="header__block-address-list"> 
            <li class="header__block-address-item" id="headerAddressList-1"><a href="maryino.html">??????????????</a></li>
            <li class="header__block-address-item" id="headerAddressList-2"><a href="leningradka.html">?????????????????????????? ??????????</a></li>
            <li class="header__block-address-item" id="headerAddressList-3"><a href="moghaika.html">?????????????????? ??????????</a></li>
            <li class="header__block-address-item" id="headerAddressList-4"><a href="ryazanka.html">??????????????</a></li>
            <li class="header__block-address-item" id="headerAddressList-5"><a href="yaroslavskoe.html">?????????????????????? ??????????</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>