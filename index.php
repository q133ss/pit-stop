<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package pit-stop
 */

get_header();
?>

<section class="ind-header"> 
    <div class="containers"> 
      <div class="ind-header__block"> 
        <div class="ind-header__block-add wow fadeInLeft animated" data-wow-delay="0.8s">Алмазная полировка</div>
        <div class="ind-header__block-title wow fadeInLeft animated" data-wow-delay="0.8s">Алмазная полировка автомобильных дисков</div>
        <div class="ind-header__block-btn wow fadeIn animated" data-wow-delay="0.8s"><a href="#">Узнать подробнее</a></div>
        <div class="ind-header__block-scroll wow fadeInUp animated" data-wow-delay="0.8s"><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.54279 7.01813C5.83568 7.31103 6.31056 7.31103 6.60345 7.01813L11.3764 2.24516C11.6693 1.95227 11.6693 1.4774 11.3764 1.1845C11.0835 0.89161 10.6087 0.89161 10.3158 1.1845L6.07312 5.42714L1.83048 1.1845C1.53759 0.89161 1.06271 0.89161 0.769819 1.1845C0.476926 1.4774 0.476926 1.95227 0.769819 2.24516L5.54279 7.01813ZM5.32312 5.63415L5.32312 6.4878L6.82312 6.4878L6.82312 5.63415L5.32312 5.63415Z" fill="white"/>
</svg>
        </div>
        <ul class="ind-header__block-contact wow fadeInLeft animated" data-wow-delay="0.8s">
          <li class="ind-header__block-contact-item"> <a href="#">
               <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.3999 32.4875C41.0166 34.5 39.3874 36.0333 37.3749 36.3208C34.2124 36.8 28.9416 37.375 22.9999 37.375C17.1541 37.375 11.8833 36.8 8.62492 36.3208C6.61242 36.0333 4.98325 34.5 4.59992 32.4875C4.21659 30.2833 3.83325 27.025 3.83325 23C3.83325 18.975 4.21659 15.7167 4.59992 13.5125C4.98325 11.5 6.61242 9.96667 8.62492 9.67917C11.7874 9.2 17.0583 8.625 22.9999 8.625C28.9416 8.625 34.1166 9.2 37.3749 9.67917C39.3874 9.96667 41.0166 11.5 41.3999 13.5125C41.7833 15.7167 42.2624 18.975 42.2624 23C42.1666 27.025 41.7833 30.2833 41.3999 32.4875Z" fill="#FF3D00"/>
<path d="M19.1667 29.7082V16.2915L30.6667 22.9998L19.1667 29.7082Z" fill="white"/>
</svg></a></li>
          <li class="ind-header__block-contact-item"> <a href="#"><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.9302 33.2422L11.0969 33.2572C7.61357 33.2604 4.76119 30.4136 4.75723 26.9302L4.74219 11.0969C4.73902 7.61357 7.58586 4.76119 11.0692 4.75723L26.9025 4.74219C30.3859 4.73902 33.2382 7.58586 33.2422 11.0692L33.2572 26.9025C33.2612 30.3866 30.4136 33.239 26.9302 33.2422Z" fill="url(#paint0_radial_58:317)"/>
<path d="M26.9302 33.2422L11.0969 33.2572C7.61357 33.2604 4.76119 30.4136 4.75723 26.9302L4.74219 11.0969C4.73902 7.61357 7.58586 4.76119 11.0692 4.75723L26.9025 4.74219C30.3859 4.73902 33.2382 7.58586 33.2422 11.0692L33.2572 26.9025C33.2612 30.3866 30.4136 33.239 26.9302 33.2422Z" fill="url(#paint1_radial_58:317)"/>
<path d="M18.9999 24.5418C15.9449 24.5418 13.4583 22.056 13.4583 19.0002C13.4583 15.9443 15.9449 13.4585 18.9999 13.4585C22.055 13.4585 24.5416 15.9443 24.5416 19.0002C24.5416 22.056 22.055 24.5418 18.9999 24.5418ZM18.9999 15.0418C16.8173 15.0418 15.0416 16.8175 15.0416 19.0002C15.0416 21.1828 16.8173 22.9585 18.9999 22.9585C21.1825 22.9585 22.9583 21.1828 22.9583 19.0002C22.9583 16.8175 21.1825 15.0418 18.9999 15.0418Z" fill="white"/>
<path d="M24.9375 14.25C25.5933 14.25 26.125 13.7183 26.125 13.0625C26.125 12.4067 25.5933 11.875 24.9375 11.875C24.2817 11.875 23.75 12.4067 23.75 13.0625C23.75 13.7183 24.2817 14.25 24.9375 14.25Z" fill="white"/>
<path d="M23.7499 29.2918H14.2499C11.1949 29.2918 8.70825 26.806 8.70825 23.7502V14.2502C8.70825 11.1943 11.1949 8.7085 14.2499 8.7085H23.7499C26.805 8.7085 29.2916 11.1943 29.2916 14.2502V23.7502C29.2916 26.806 26.805 29.2918 23.7499 29.2918ZM14.2499 10.2918C12.0673 10.2918 10.2916 12.0675 10.2916 14.2502V23.7502C10.2916 25.9328 12.0673 27.7085 14.2499 27.7085H23.7499C25.9325 27.7085 27.7083 25.9328 27.7083 23.7502V14.2502C27.7083 12.0675 25.9325 10.2918 23.7499 10.2918H14.2499Z" fill="white"/>
<defs>
<radialGradient id="paint0_radial_58:317" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.3426 33.2778) scale(35.545)">
<stop stop-color="#FFDD55"/>
<stop offset="0.328" stop-color="#FF543F"/>
<stop offset="0.348" stop-color="#FC5245"/>
<stop offset="0.504" stop-color="#E64771"/>
<stop offset="0.643" stop-color="#D53E91"/>
<stop offset="0.761" stop-color="#CC39A4"/>
<stop offset="0.841" stop-color="#C837AB"/>
</radialGradient>
<radialGradient id="paint1_radial_58:317" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.33069 4.38618) scale(23.602 15.726)">
<stop stop-color="#4168C9"/>
<stop offset="0.999" stop-color="#4168C9" stop-opacity="0"/>
</radialGradient>
</defs>
</svg></a></li>
        </ul>
        <ul class="ind-header__block-slider-list wow fadeInLeft animated" data-wow-delay="0.8s">
          <li class="ind-header__block-slider-list-item ind-header__block-slider-list-item-active" id="headerSliderListItem-1">Алмазная полировка</li>
          <li class="ind-header__block-slider-list-item" id="headerSliderListItem-2">Ремонт дисков</li>
          <li class="ind-header__block-slider-list-item" id="headerSliderListItem-3">Порошковая покраска</li>
          <li class="ind-header__block-slider-list-item" id="headerSliderListItem-4">Установка шин</li>
        </ul>
        <div class="ind-header__block-banner wow fadeInUp animated" data-wow-delay="0.8s"><img class="ind-header__block-banner-item" src="<?php bloginfo('template_directory'); ?>/img/header-banner-1.png" alt="img">
          <div class="ind-header__block-banner-add"> <img src="<?php bloginfo('template_directory'); ?>/img/header-banners-1.png" alt="img">
            <p>002 </p>
          </div>
        </div>
        <div class="ind-header__block-arrow wow fadeInRight animated" data-wow-delay="0.8s">
          <div class="ind-header__block-arrow-prev wow fadeInUp animated" data-wow-delay="0.8s" id="headerSliderArrowPrev"><svg id="headerSliderArrowPrev" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM2 5.25H1V6.75H2V5.25Z" fill="white"/>
</svg>
          </div>
          <div class="ind-header__block-arrow-next wow fadeInUp animated" data-wow-delay="0.8s" id="headerSliderArrowNext"><svg id="headerSliderArrowNext" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.53033 5.46967C6.82322 5.76256 6.82322 6.23744 6.53033 6.53033L1.75736 11.3033C1.46447 11.5962 0.989593 11.5962 0.696699 11.3033C0.403806 11.0104 0.403806 10.5355 0.696699 10.2426L4.93934 6L0.696699 1.75736C0.403806 1.46447 0.403806 0.989593 0.696699 0.696699C0.989593 0.403806 1.46447 0.403806 1.75736 0.696699L6.53033 5.46967ZM5 5.25H6V6.75H5V5.25Z" fill="black"/>
</svg>
          </div>
        </div>
        <ul class="ind-header__block-pagination wow fadeInDown animated" data-wow-delay="0.8s">
          <li class="ind-header__block-pagination-item ind-header__block-pagination-item-active" id="headerSliderPaginationItem-1"></li>
          <li class="ind-header__block-pagination-item" id="headerSliderPaginationItem-2"></li>
          <li class="ind-header__block-pagination-item" id="headerSliderPaginationItem-3"></li>
          <li class="ind-header__block-pagination-item" id="headerSliderPaginationItem-4"></li>
        </ul>
      </div>
    </div>
  </section>
  <section class="ind-about"> 
    <div class="containers"> 
      <div class="ind-about__block"> 
        <div class="ind-about__block-media-add">
          <p>Мы рады вам предложить услуги наших точек, находящихся в разных местах Москвы: Марьино, Ленинградское шоссе, Можайское шоссе, Рязанский проспект, Ярославское шоссе.
            <button class="ind-about__block-media-add-btn"><a href="#">Посмотреть на карте</a></button>
          </p>
        </div>
        <div class="ind-about__block-img wow fadeInDown animated" data-wow-delay="0.8s"><img src="<?php bloginfo('template_directory'); ?>/img/about.png" alt="img"></div>
        <div class="ind-about__block-content"> 
          <div class="ind-about__block-content-text wow fadeInUp animated" data-wow-delay="0.8s">
            <div class="ind-about__block-content-text-add">001</div>
            <div class="ind-about__block-content-text-title">PIT-STOP</div>
            <div class="ind-about__block-content-text-item">«Пит-Стоп» — сеть автосервисов, где работают профессионалы, которые решат любую проблему, связанную с ремонтом шин, либо ремонтом, восстановлением и покраской литых дисков. </div>
          </div>
          <div class="ind-about__block-content-add wow fadeInUp animated" data-wow-delay="0.8s">
            <p>Мы рады вам предложить услуги наших точек, находящихся в разных местах Москвы: Марьино, Ленинградское шоссе, Можайское шоссе, Рязанский проспект, Ярославское шоссе.
              <button class="ind-about__block-content-add-btn"><a href="#">Посмотреть на карте</a></button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="ind-slider"> 
    <div class="containers"> 
      <div class="ind-slider__block"> 
        <div class="ind-slider__block-add wow fadeInLeft animated" data-wow-delay="0.8s">002</div>
        <div class="ind-slider__block-title wow fadeInLeft animated" data-wow-delay="0.8s">Шиномонтаж и покраска дисков Пит-Стоп</div>
        <ul class="ind-slider__block-tabs wow fadeInLeft animated" data-wow-delay="0.8s">
          <li class="ind-slider__block-tabs-item ind-slider__block-tabs-item-active" id="headerSliderTabsElement-1">Покраска</li>
          <li class="ind-slider__block-tabs-item" id="headerSliderTabsElement-2">Шиномонтаж</li>
          <li class="ind-slider__block-tabs-item" id="headerSliderTabsElement-3">Другие услуги</li>
        </ul>
        <div class="ind-slider__block-slider" id="headerSliderTabsSlider-1">
          <div class="swiper indexSliderCars-1">
            <div class="swiper-wrapper">
              <?php
              //Покраска
              $uslugi = array(

              'post_type' => 'uslugi',
              'posts_per_page' => 10,
              'order' => 'ASC',
              'tax_query' => array(
                array(
                    'taxonomy' => 'taxonomy',
                    'field'    => 'slug',
                    'terms'    => 'pokraska',
                ),
              ),
              );
              $my_query = new WP_Query( $uslugi );
              if( $my_query->have_posts() ){
              while( $my_query->have_posts() ) {
                $my_query->the_post();
              ?>
              <div class="swiper-slide wow fadeInUp animated" data-wow-delay="<?php echo $key-0.8; ?>s">
                <div class="ind-slider__block-slider-item">
                  <div class="ind-slider__block-slider-item-img"> <img src="<?php the_post_thumbnail_url(); ?>" alt="img"></div>
                  <div class="ind-slider__block-slider-item-text"> 
                    <div class="ind-slider__block-slider-item-title"><?php the_title(); ?></div>
                    <div class="ind-slider__block-slider-item-text"><?php the_excerpt(); ?></div><a class="ind-slider__block-slider-item-link" href="#">
                       <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5978 0V2.38704H13.5932L0 14.3474L1.82215 16.0303L15.4154 4.0699V14.2248H18V0H2.5978Z" fill="white"/>
</svg></a>
                  </div>
                </div>
              </div>
              <?php }wp_reset_postdata();} ?>

            </div>
          </div>
          <div class="swiper-controls display-n" id="headerSliderTabsControlsSlider-1">
            <div class="swiper-button-next">
              <div class="swiper-button-next-arrow"></div>
            </div>
            <div class="swiper-button-prev">
              <div class="swiper-button-prev-arrow"></div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="ind-slider__block-slider display-n" id="headerSliderTabsSlider-2">
          <div class="swiper indexSliderCars-2">
            <div class="swiper-wrapper">
              <?php
              //Шиномонтаж
              $uslugi = array(

              'post_type' => 'uslugi',
              'posts_per_page' => 10,
              'order' => 'ASC',
              'tax_query' => array(
                array(
                    'taxonomy' => 'taxonomy',
                    'field'    => 'slug',
                    'terms'    => 'shinomontaj',
                ),
              ),
              );
              $my_query = new WP_Query( $uslugi );
              if( $my_query->have_posts() ){
              while( $my_query->have_posts() ) {
                $my_query->the_post();
              ?>
              <div class="swiper-slide">
                <div class="ind-slider__block-slider-item">
                  <div class="ind-slider__block-slider-item-img"> <img src="<?php the_post_thumbnail_url(); ?>" alt="img"></div>
                  <div class="ind-slider__block-slider-item-text"> 
                    <div class="ind-slider__block-slider-item-title"><?php the_title(); ?></div>
                    <div class="ind-slider__block-slider-item-text"><?php the_excerpt(); ?></div><a class="ind-slider__block-slider-item-link" href="#">
                       <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5978 0V2.38704H13.5932L0 14.3474L1.82215 16.0303L15.4154 4.0699V14.2248H18V0H2.5978Z" fill="white"/>
</svg></a>
                  </div>
                </div>
              </div>
              <?php }wp_reset_postdata();} ?>
            </div>
          </div>
          <div class="swiper-controls display-n" id="headerSliderTabsControlsSlider-2">
            <div class="swiper-button-next">
              <div class="swiper-button-next-arrow"></div>
            </div>
            <div class="swiper-button-prev">
              <div class="swiper-button-prev-arrow"></div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="ind-slider__block-slider display-n" id="headerSliderTabsSlider-3">
          <div class="swiper indexSliderCars-3">
            <div class="swiper-wrapper">
              <?php
              //другие услуги
              $uslugi = array(

              'post_type' => 'uslugi',
              'posts_per_page' => 10,
              'order' => 'ASC',
              'tax_query' => array(
                array(
                    'taxonomy' => 'taxonomy',
                    'field'    => 'slug',
                    'terms'    => 'other',
                ),
              ),
              );
              $my_query = new WP_Query( $uslugi );
              if( $my_query->have_posts() ){
              while( $my_query->have_posts() ) {
                $my_query->the_post();
              ?>
              <div class="swiper-slide"> 
                <div class="ind-slider__block-slider-item">
                  <div class="ind-slider__block-slider-item-img"> <img src="<?php the_post_thumbnail_url(); ?>" alt="img"></div>
                  <div class="ind-slider__block-slider-item-text"> 
                    <div class="ind-slider__block-slider-item-title"><?php the_title(); ?></div>
                    <div class="ind-slider__block-slider-item-text"><?php the_excerpt(); ?></div><a class="ind-slider__block-slider-item-link" href="#">
                       <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5978 0V2.38704H13.5932L0 14.3474L1.82215 16.0303L15.4154 4.0699V14.2248H18V0H2.5978Z" fill="white"/>
</svg></a>
                  </div>
                </div>
              </div>
<?php }wp_reset_postdata();} ?>

            </div>
          </div>
          <div class="swiper-controls display-n" id="headerSliderTabsControlsSlider-3">
            <div class="swiper-button-next">
              <div class="swiper-button-next-arrow"></div>
            </div>
            <div class="swiper-button-prev">
              <div class="swiper-button-prev-arrow"></div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="ind-slider__block-btns"> 
          <button class="ind-slider__block-btn wow fadeInUp animated" data-wow-delay="0.8s"><a href="#">Все услуги</a></button>
        </div>
      </div>
    </div>
  </section>
  <section class="ind-price"> 
    <div class="containers"> 
      <div class="ind-price__block"> 
        <div class="ind-price__block-add wow fadeInLeft animated" data-wow-delay="0.8s">003</div>
        <div class="ind-price__block-title wow fadeInLeft animated" data-wow-delay="0.8s">Расчет стоимости</div>
        <div class="ind-price__block-titles wow fadeInLeft animated" data-wow-delay="0.8s">Вид покраски</div>
        <div class="ind-price__block-dye wow fadeInLeft animated" data-wow-delay="0.8s">
          <div class="ind-price__block-dye-radio">
            <input class="ind-price__block-dye-radio__input" name="dye" type="radio" id="radio_1" checked>
            <label class="ind-price__block-dye-radio__label" for="radio_1">Порошковая покраска</label>
          </div>
          <div class="ind-price__block-dye-radio">
            <input class="ind-price__block-dye-radio__input" name="dye" type="radio" id="radio_2">
            <label class="ind-price__block-dye-radio__label" for="radio_2">Порошковая покраска "Эксклюзив"</label>
          </div>
          <div class="ind-price__block-dye-radio">
            <input class="ind-price__block-dye-radio__input" name="dye" type="radio" id="radio_3">
            <label class="ind-price__block-dye-radio__label" for="radio_3">Алмазная шлифовка</label>
          </div>
        </div>
        <div class="ind-price__block-adds wow fadeInUp animated" data-wow-delay="0.8s">
          <select id="type">
            <option value=""></option>
            <option value="Литой">Литой</option>
            <option value="Штампованный">Штампованный</option>
          </select>
          <select id="count">
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <select id="radios">
            <option value=""></option>
            <option value="R13">R13</option>
            <option value="R14">R14</option>
            <option value="R15">R15</option>
            <option value="R16">R16</option>
            <option value="R17">R17</option>
            <option value="R18">R18</option>
            <option value="R19">R19</option>
            <option value="R20">R20</option>
            <option value="R21">R21</option>
            <option value="R22">R22</option>
            <option value="R23">R23</option>
            <option value="R24">R24</option>
          </select>
        </div>
        <div class="ind-price__block-plus wow fadeInLeft animated" data-wow-delay="0.8s">
          <p>Дополнительные работы </p>
        </div>
        <div class="ind-price__block-catalog display-n"> 
          <div class="ind-price__block-catalog-checkbox"> 
            <div class="ind-price__block-catalog-checkbox-item"> 
              <div class="ind-price__block-catalog-checkbox-title">Покрытие лаком</div>
              <div class="ind-price__block-catalog-checkbox-price">700 ₽</div>
              <div class="ind-price__block-catalog-checkbox-block">
                <input class="ind-price__block-catalog-checkbox-block-checkbox" type="checkbox" id="indexPriceCheckbox-1">
                <label for="indexPriceCheckbox-1"></label>
              </div>
            </div>
            <div class="ind-price__block-catalog-checkbox-item"> 
              <div class="ind-price__block-catalog-checkbox-title">Покраска канта диска</div>
              <div class="ind-price__block-catalog-checkbox-price">1 750 ₽</div>
              <div class="ind-price__block-catalog-checkbox-block">
                <input class="ind-price__block-catalog-checkbox-block-checkbox" type="checkbox" id="indexPriceCheckbox-2">
                <label for="indexPriceCheckbox-2"></label>
              </div>
            </div>
          </div>
          <div class="ind-price__block-catalog-select"> 
            <div class="ind-price__block-catalog-select-item"> 
              <div class="ind-price__block-catalog-select-title">Устранение царапин и сколов</div>
              <div class="ind-price__block-catalog-select-price">700 ₽</div>
              <div class="ind-price__block-catalog-select-block"> 
                <select id="remove">
                  <option value="Нет">Нет</option>
                  <option value="Нет">Нет</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <div class="ind-price__block-catalog-select-item"> 
              <div class="ind-price__block-catalog-select-title">Правка диска</div>
              <div class="ind-price__block-catalog-select-price">700 ₽</div>
              <div class="ind-price__block-catalog-select-block"> 
                <select id="disk">
                  <option value="Нет">Нет</option>
                  <option value="Нет">Нет</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <div class="ind-price__block-catalog-select-item"> 
              <div class="ind-price__block-catalog-select-title">Монтаж / демонтаж</div>
              <div class="ind-price__block-catalog-select-price">700 ₽</div>
              <div class="ind-price__block-catalog-select-block"> 
                <select id="mounting">
                  <option value="Нет">Нет</option>
                  <option value="Нет">Нет</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <div class="ind-price__block-catalog-select-item"> 
              <div class="ind-price__block-catalog-select-title">Балансировка</div>
              <div class="ind-price__block-catalog-select-price">700 ₽</div>
              <div class="ind-price__block-catalog-select-block"> 
                <select id="balance">
                  <option value="Нет">Нет</option>
                  <option value="Нет">Нет</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <div class="ind-price__block-catalog-select-item"> 
              <div class="ind-price__block-catalog-select-title">Съем / установка</div>
              <div class="ind-price__block-catalog-select-price">700 ₽</div>
              <div class="ind-price__block-catalog-select-block"> 
                <select id="shooting">
                  <option value="Нет">Нет</option>
                  <option value="Нет">Нет</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <div class="ind-price__block-catalog-select-item"> 
              <div class="ind-price__block-catalog-select-title">Доставка</div>
              <div class="ind-price__block-catalog-select-price">700 ₽</div>
              <div class="ind-price__block-catalog-select-block"> 
                <select id="delivery">
                  <option value="Нет">Нет</option>
                  <option value="Нет">Нет</option>
                  <option value="В одну сторону">В одну сторону</option>
                  <option value="Туда - обратно">Туда - обратно</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="ind-price__block-banner wow fadeInUp animated" data-wow-delay="0.8s">
          <h3>Итого:</h3>
          <p>4690₽</p>
          <button class="ind-price__block-banner-btn"> <a href="#">Заказать</a></button>
        </div>
      </div>
    </div>
  </section>
  <section class="ind-abouts"> 
    <div class="containers"> 
      <div class="ind-abouts__block"> 
        <div class="ind-abouts__block-img wow fadeInDown animated" data-wow-delay="0.8s"><img src="<?php bloginfo('template_directory'); ?>/img/abouter.png" alt="img"></div>
        <div class="ind-abouts__block-content wow fadeInUp animated" data-wow-delay="0.8s">
          <div class="ind-abouts__block-content-text">
            <div class="ind-abouts__block-content-text-add">004</div>
            <div class="ind-abouts__block-content-text-title">PIT-STOP</div>
            <div class="ind-abouts__block-content-text-item">Мы знаем и любим своё дело, и вкладываем в свою работу максимум профессионализма и компетенции. Помимо услуг по шиномонтажу у нас активно развивается направление порошковой окраски дисков, где мы достигаем выдающихся результатов. Все наши работы строго регламентируются, чтобы предоставить максимальное качество вне зависимости от сложности ремонта.</div>
          </div>
          <div class="ind-abouts__block-content-add">
            <p>В процессе ремонта дисков и других деталей мы используем аргонную сварку, с помощью которой исправляем, казалось бы, совсем безнадежные поломки. Причем, в месте сварки прочность диска не отличается от оригинального.</p>
            <p>Для шиномонтажа, ремонта и окраски мы используем профессиональное оборудование, качественные краски и материалы, что позволяет достигать высоких результатов.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="ind-shop">
    <div class="containers"> 
      <div class="ind-shop__block"> 
        <div class="ind-shop__block-add wow fadeInLeft animated" data-wow-delay="0.8s">005</div>
        <div class="ind-shop__block-title wow fadeInLeft animated" data-wow-delay="0.8s">Магазин</div>
        <div class="ind-shop__block-catalog"> 
          <div class="swiper indexShop">
            <div class="swiper-wrapper">

              <?php
              //Товары
              $loop = new WP_Query( array(
              'post_type' => 'product',
              'posts_per_page' => 10,
              'orderby' => 'menu_order',
              'order' => 'ASC',
              ));

              while ( $loop->have_posts() ): $loop->the_post(); ?>
              <div class="swiper-slide wow fadeInUp animated" data-wow-delay="0.8s">
                <div class="ind-shop__block-catalog-item">
                  <div class="ind-shop__block-catalog-item-img"> <img src="<?php the_post_thumbnail_url(); ?>" alt="img"></div>
                  <div class="ind-shop__block-catalog-item-text"> 
                    <h3><?php the_title(); ?></h3>
                    <p><?php woocommerce_template_loop_price(); ?></p>
                  </div>
                </div>
              </div>
              <?php endwhile; wp_reset_postdata(); ?>


            </div>
          </div>
          <div class="swiper-controls wow fadeInRight animated" data-wow-delay="2.8s">
            <div class="swiper-button-next">
              <div class="swiper-button-next-arrow"></div>
            </div>
            <div class="swiper-button-prev">
              <div class="swiper-button-prev-arrow"></div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="ind-examples">
    <div class="containers"> 
      <div class="ind-examples__block"> 
        <div class="ind-examples__block-add wow fadeInLeft animated" data-wow-delay="0.8s">006</div>
        <div class="ind-examples__block-title wow fadeInLeft animated" data-wow-delay="0.8s">Примеры наших работ</div>
        <ul class="ind-examples__block-tabs wow fadeInDown animated" data-wow-delay="0.8s">
          <li class="ind-examples__block-tabs-item ind-examples__block-tabs-item-active" id="indexExampleTabsElement-1">Все</li>
          <li class="ind-examples__block-tabs-item" id="indexExampleTabsElement-2">Покраска</li>
          <li class="ind-examples__block-tabs-item" id="indexExampleTabsElement-3">Полировка</li>
          <li class="ind-examples__block-tabs-item" id="indexExampleTabsElement-4">Ремонт дисков</li>
          <li class="ind-examples__block-tabs-item" id="indexExampleTabsElement-5">Аргоновая сварка</li>
        </ul>
        <ul class="ind-examples__block-catalog wow fadeInUp animated" id="indexExampleTabsBlock-1" data-wow-delay="0.8s">
          <?php
              $gallery_first = array(

              'post_type' => 'our_work',
              'posts_per_page' => 12,
              'order' => 'ASC'
              );
        
              $gallery_first_ = new WP_Query( $gallery_first );
              if( $gallery_first_->have_posts() ){
              while( $gallery_first_->have_posts() ) {
                $gallery_first_->the_post();
              
              ?>
          <li class="ind-examples__block-catalog-item diskSlidersAboutItemsElement-<?php the_ID(); ?>"><img src="<?php the_post_thumbnail_url(); ?>" alt="img"></li>
        <?php } wp_reset_postdata(); } ?>
          
        </ul>

        <ul class="ind-examples__block-catalog display-n" id="indexExampleTabsBlock-2">


          <?php
              $pokraska_gallery = array(

              'post_type' => 'our_work',
              'posts_per_page' => 12,
              'order' => 'ASC',
              'tax_query' => array(
                array(
                    'taxonomy' => 'cats',
                    'field'    => 'slug',
                    'terms'    => 'pokraska',
                ),
              ),
              );
              $pokraska_count = 2;
              $gallery_query_2 = new WP_Query( $pokraska_gallery );
              if( $gallery_query_2->have_posts() ){
              while( $gallery_query_2->have_posts() ) {
                $gallery_query_2->the_post();
                $pokraska_count++;
              ?>
          <li class="ind-examples__block-catalog-item diskSlidersAboutItemsElement-<?php the_ID(); ?>"><img src="<?php the_post_thumbnail_url(); ?>" alt="img"></li>
          <?php }wp_reset_postdata();} ?>



        </ul>
        <ul class="ind-examples__block-catalog display-n" id="indexExampleTabsBlock-3">
          <?php
              $polirovka_gallery = array(

              'post_type' => 'our_work',
              'posts_per_page' => 12,
              'order' => 'ASC',
              'tax_query' => array(
                array(
                    'taxonomy' => 'cats',
                    'field'    => 'slug',
                    'terms'    => 'polirovka',
                ),
              ),
              );
              $polirovka_count = 2;
              $gallery_query_3 = new WP_Query( $polirovka_gallery );
              if( $gallery_query_3->have_posts() ){
              while( $gallery_query_3->have_posts() ) {
                $gallery_query_3->the_post();
                $polirovka_count++;
              ?>
          <li class="ind-examples__block-catalog-item diskSlidersAboutItemsElement-<?php the_ID(); ?>"><img src="<?php the_post_thumbnail_url(); ?>" alt="img"></li>
          <?php }wp_reset_postdata();} ?>

        </ul>
        <ul class="ind-examples__block-catalog display-n" id="indexExampleTabsBlock-4">
           <?php
              $remont_gallery = array(

              'post_type' => 'our_work',
              'posts_per_page' => 12,
              'order' => 'ASC',
              'tax_query' => array(
                array(
                    'taxonomy' => 'cats',
                    'field'    => 'slug',
                    'terms'    => 'remont-diskov',
                ),
              ),
              );
              $gallery_query_4 = new WP_Query( $remont_gallery );
              if( $gallery_query_4->have_posts() ){
              while( $gallery_query_4->have_posts() ) {
                $gallery_query_4->the_post();
              ?>
          <li class="ind-examples__block-catalog-item diskSlidersAboutItemsElement-<?php the_ID(); ?>"><img src="<?php the_post_thumbnail_url(); ?>" alt="img"></li>
          <?php } wp_reset_postdata(); } ?>
        </ul>
        <ul class="ind-examples__block-catalog display-n" id="indexExampleTabsBlock-5">
          <?php
              $svarka = array(

              'post_type' => 'our_work',
              'posts_per_page' => 12,
              'order' => 'ASC',
              'tax_query' => array(
                array(
                    'taxonomy' => 'cats',
                    'field'    => 'slug',
                    'terms'    => 'remont-diskov',
                ),
              ),
              );
              $gallery_query_5 = new WP_Query( $svarka );
              if( $gallery_query_5->have_posts() ){
              while( $gallery_query_5->have_posts() ) {
                $gallery_query_5->the_post();
              ?>
          <li class="ind-examples__block-catalog-item diskSlidersAboutItemsElement-<?php the_ID(); ?>"><img src="<?php the_post_thumbnail_url(); ?>" alt="img"></li>
          <?php } wp_reset_postdata(); } ?>
        </ul>
      </div>
    </div>
  </section>



<!-- Our Works Gallery -->
  <div class="modelIndexExamplesSlider display-n">
    <div class="modelIndexExamplesSlider-close">
       <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39 13L13 39" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 13L39 39" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </div>
    <div class="modelIndexExamplesSlider__slider"> 
      <div class="swiper modelIndexExamplesSliderBlock">
        <div class="swiper-wrapper">

          <?php
              $gallery_script = array(

              'post_type' => 'our_work',
              'posts_per_page' => 999,
              'order' => 'ASC'
              );
              $count = 0;
              $gallery_script_ = new WP_Query( $gallery_script );
              if( $gallery_script_->have_posts() ){
              while( $gallery_script_->have_posts() ) {
                $gallery_script_->the_post();
                $count++;
              ?>
          <div class="swiper-slide"> 
            <div class="modelIndexExamplesSlider__slider-item"> <img src="<?php the_post_thumbnail_url(); ?>" alt="img"></div>
          </div>

          <script>
            $('.diskSlidersAboutItemsElement-<?php the_ID(); ?>').on('click', function() {
            $('.modelIndexExamplesSlider').removeClass('display-n')
            $('body').css('overflow', 'hidden')

            let modelIndexExamplesSliderBlockCount = <?php echo $count-1; ?>;
            var modelIndexExamplesSliderBlock = new Swiper(".modelIndexExamplesSliderBlock", {
                // loop: true,
                navigation: {
                    nextEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-next",
                    prevEl: ".modelIndexExamplesSlider__slider   .swiper-controls .swiper-button-prev",
                },
                // pagination: {
                //     el: ".disk-slider__block-wrapper .swiper-controls .swiper-pagination",
                // },
                keyboard: true,
                slidesPerView: 1,
                spaceBetween: 0,
                initialSlide: modelIndexExamplesSliderBlockCount,
            });
            });
          </script>
          <?php }wp_reset_postdata();} ?>
        </div>
      </div>
      <div class="swiper-controls"> 
        <div class="swiper-button-next">
           <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.53033 5.46967C6.82322 5.76256 6.82322 6.23744 6.53033 6.53033L1.75736 11.3033C1.46447 11.5962 0.989593 11.5962 0.696699 11.3033C0.403806 11.0104 0.403806 10.5355 0.696699 10.2426L4.93934 6L0.696699 1.75736C0.403806 1.46447 0.403806 0.989593 0.696699 0.696699C0.989593 0.403806 1.46447 0.403806 1.75736 0.696699L6.53033 5.46967ZM5 5.25H6V6.75H5V5.25Z" fill="black"/>
</svg>
        </div>
        <div class="swiper-button-prev">
           <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.53033 5.46967C6.82322 5.76256 6.82322 6.23744 6.53033 6.53033L1.75736 11.3033C1.46447 11.5962 0.989593 11.5962 0.696699 11.3033C0.403806 11.0104 0.403806 10.5355 0.696699 10.2426L4.93934 6L0.696699 1.75736C0.403806 1.46447 0.403806 0.989593 0.696699 0.696699C0.989593 0.403806 1.46447 0.403806 1.75736 0.696699L6.53033 5.46967ZM5 5.25H6V6.75H5V5.25Z" fill="black"/>
</svg>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>

<?php
get_footer();
