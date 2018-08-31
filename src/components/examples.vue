<template>
    <section id="portfolio">

        <div class="row">

            <div class="twelve columns collapsed">

                <h1>Некоторые из моих работ</h1>

                <!-- portfolio-wrapper -->
                <div id="portfolio-wrapper" class="bgrid-quarters s-bgrid-thirds cf">

                    <div class="columns portfolio-item">
                        <div class="item-wrap">

                            <a href="#modal-01" title="">
                                <img alt="" src="images/portfolio/weather.png">
                                <div class="overlay">
                                    <div class="portfolio-item-meta">
                                        <h5>Погода</h5>
                                        <p>Собирает погоду с нескольких сайтов, можно посмотреть на сайте или получить по запросу в Telegram</p>
                                    </div>
                                </div>
                                <div class="link-icon"><i class="icon-plus"></i></div>
                            </a>

                        </div>
                    </div>  <!-- item 1 end -->

                    <div class="columns portfolio-item">
                        <div class="item-wrap">

                            <a href="#modal-02" title="">
                                <img alt="" src="images/portfolio/tour.png">
                                <div class="overlay">
                                    <div class="portfolio-item-meta">
                                        <h5>Маршруты</h5>
                                        <p>Построение и сохранение маршрутов и планов поездок</p>
                                    </div>
                                </div>
                                <div class="link-icon"><i class="icon-plus"></i></div>
                            </a>

                        </div>
                    </div> <!-- item 2 end -->

                    <div class="columns portfolio-item">
                        <div class="item-wrap">

                            <a href="#modal-03" title="">
                                <img alt="" src="images/portfolio/samotour.png">
                                <div class="overlay">
                                    <div class="portfolio-item-meta">
                                        <h5>Сайт для Турагентств</h5>
                                        <p>Сайт, на котором турагентство может провести полные действия для туриста.</p>
                                    </div>
                                </div>
                                <div class="link-icon"><i class="icon-plus"></i></div>
                            </a>

                        </div>
                    </div> <!-- item 3 end -->

                    <div class="columns portfolio-item">
                        <div class="item-wrap">

                            <a href="#modal-04" title="">
                                <img alt="" src="images/portfolio/infcalc.png">
                                <div class="overlay">
                                    <div class="portfolio-item-meta">
                                        <h5>Калькулятор инфляции</h5>
                                        <p>Адаптивная верстка страницы, без js-логики</p>
                                    </div>
                                </div>
                                <div class="link-icon"><i class="icon-plus"></i></div>
                            </a>

                        </div>
                    </div> <!-- item 4 end -->

                    <div class="columns portfolio-item">
                        <div class="item-wrap">

                            <a href="#modal-05" title="">
                                <img alt="" src="images/portfolio/mobio.png">
                                <div class="overlay">
                                    <div class="portfolio-item-meta">
                                        <h5>Лендинг для камеры</h5>
                                        <p>Страница, рассказывающая о прелестях Panasonic HX-A500</p>
                                    </div>
                                </div>
                                <div class="link-icon"><i class="icon-plus"></i></div>
                            </a>

                        </div>
                    </div> <!-- item 5 end -->

                    <div class="columns portfolio-item">
                        <div class="item-wrap">

                            <a href="#modal-06" title="">
                                <img alt="" src="images/portfolio/iricom.png">
                                <div class="overlay">
                                    <div class="portfolio-item-meta">
                                        <h5>Фриланс верстка</h5>
                                        <p>Простая верстка</p>
                                    </div>
                                </div>
                                <div class="link-icon"><i class="icon-plus"></i></div>
                            </a>

                        </div>
                    </div> <!-- item 6 end -->

                    <!--<div class="columns portfolio-item">
                        <div class="item-wrap">

                            <a href="#modal-06" title="">
                                <img alt="" src="images/portfolio/flickr.png">
                                <div class="overlay">
                                    <div class="portfolio-item-meta">
                                        <h5>Поиск по Flickr</h5>
                                        <p>Простой поиск по картинкам на сайте flickr.com</p>
                                    </div>
                                </div>
                                <div class="link-icon"><i class="icon-plus"></i></div>
                            </a>

                        </div>
                    </div> &lt;!&ndash; item 6 end &ndash;&gt;

                    <div class="columns portfolio-item">
                        <div class="item-wrap">

                            <a href="http://tarty.ga/iricom/firstjob" title="">
                                <img alt="" src="images/portfolio/iricom.png">
                                <div class="overlay">
                                    <div class="portfolio-item-meta">
                                        <h5>Фриланс верстка</h5>
                                        <p>Простая верстка</p>
                                    </div>
                                </div>
                                <div class="link-icon"><i class="icon-plus"></i></div>
                            </a>

                        </div>
                    </div> &lt;!&ndash; item 7 end &ndash;&gt;

                    <div class="columns portfolio-item">
                        <div class="item-wrap">

                            <a href="http://tarty.ga/mdi" title="">
                                <img alt="" src="images/portfolio/mdi.png">
                                <div class="overlay">
                                    <div class="portfolio-item-meta">
                                        <h5>Таблица</h5>
                                        <p>Простая таблица</p>
                                    </div>
                                </div>
                                <div class="link-icon"><i class="icon-plus"></i></div>
                            </a>

                        </div>
                    </div> &lt;!&ndash; item 8 end &ndash;&gt;-->

                </div> <!-- portfolio-wrapper end -->

            </div> <!-- twelve columns end -->


            <!-- Modal Popup
             --------------------------------------------------------------- -->

            <div id="modal-01" class="popup-modal mfp-hide">

                <img class="scale-with-grid" src="images/portfolio/modals/weather.png" alt="" />

                <div class="description-box">
                    <h4>Погода, собранная с нескольких источников</h4>
                    <p>Собирает погоду с нескольких сайтов, можно добавлять новые, доступен сайт и Telegram бот</p>
                    <span class="categories"><i class="fa fa-tag"></i>Angular, Node, Telegram-api</span>
                </div>

                <div class="link-box">
                    <a href="http://weather.tarty.ga">Детали</a>
                    <a class="popup-modal-dismiss">Закрыть</a>
                </div>

            </div><!-- modal-01 End -->

            <div id="modal-02" class="popup-modal mfp-hide">

                <img class="scale-with-grid" src="images/portfolio/modals/tour.png" alt="" />

                <div class="description-box">
                    <h4>Маршруты для поездок на мотоцикле</h4>
                    <p>Можно запланировать поездку, рассчитать ее километраж и длительность, с учетом ночевок и остановок для осмотра достопримечательностей
                        и сохранить ее в базу.</p>
                    <span class="categories"><i class="fa fa-tag"></i>Angular, Node, Mongodb, yandexmap-api</span>
                </div>

                <div class="link-box">
                    <a href="http://tour.tarty.ga">Детали</a>
                    <a class="popup-modal-dismiss">Закрыть</a>
                </div>

            </div><!-- modal-02 End -->

            <div id="modal-03" class="popup-modal mfp-hide">

                <img class="scale-with-grid" src="images/portfolio/modals/samotour.png" alt="" />

                <div class="description-box">
                    <h4>Сайт для турагенств</h4>
                    <p>Малые и крупные турагенства могут полность провести оформление туриста:
                        база клиентов, общение с клиентами, заявки на тур, платежи по турам, календарь,
                        печать отчетов и документов.</p>
                    <span class="categories"><i class="fa fa-tag"></i>ExtJS, jQuery, froala editor</span>
                </div>

                <div class="link-box">
                    <a href="https://online.samo-touragent.ru">Детали</a>
                    <a class="popup-modal-dismiss">Закрыть</a>
                </div>

            </div><!-- modal-03 End -->

            <div id="modal-04" class="popup-modal mfp-hide">

                <img class="scale-with-grid" src="images/portfolio/modals/infcalc.png" alt="" />

                <div class="description-box">
                    <h4>Калькулятор инфляции</h4>
                    <p>Небольшой лендинг, на чистом html+css. Адаптирован для мобильных устройств.</p>
                    <span class="categories"><i class="fa fa-tag"></i>Html, Css</span>
                </div>

                <div class="link-box">
                    <a href="http://tarty.ga/infcalc">Детали</a>
                    <a class="popup-modal-dismiss">Закрыть</a>
                </div>

            </div><!-- modal-04 End -->

            <div id="modal-05" class="popup-modal mfp-hide">

                <img class="scale-with-grid" src="images/portfolio/modals/infcalc.png" alt="" />

                <div class="description-box">
                    <h4>Лендинг для iPhones.ru</h4>
                    <p>Небольшой лендинг, на чистом html+css.</p>
                    <span class="categories"><i class="fa fa-tag"></i>Html, Css</span>
                </div>

                <div class="link-box">
                    <a href="http://tarty.ga/mobio">Детали</a>
                    <a class="popup-modal-dismiss">Закрыть</a>
                </div>

            </div><!-- modal-05 End -->

            <div id="modal-06" class="popup-modal mfp-hide">

                <img class="scale-with-grid" src="images/portfolio/modals/iricom.png" alt="" />

                <div class="description-box">
                    <h4>Пример Верстки</h4>
                    <p></p>
                    <span class="categories"><i class="fa fa-tag"></i>Html, Css</span>
                </div>

                <div class="link-box">
                    <a href="http://tarty.ga/iricom/firstjob">Детали</a>
                    <a class="popup-modal-dismiss">Закрыть</a>
                </div>

            </div><!-- modal-05 End -->


        </div> <!-- row End -->

    </section>
</template>

<script>
export default {
  name: 'examples'
}
</script>

<style scoped>

</style>
