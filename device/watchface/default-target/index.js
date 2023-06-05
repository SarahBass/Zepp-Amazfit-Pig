try {
    (() => {
        const __$$app$$__ = __$$hmAppManager$$__.currentApp;
        function getApp() {
            return __$$app$$__.app;
        }
        function getCurrentPage() {
            return __$$app$$__.current && __$$app$$__.current.module;
        }
        const __$$module$$__ = __$$app$$__.current;
        const h = new DeviceRuntimeCore.WidgetFactory(new DeviceRuntimeCore.HmDomApi(__$$app$$__, __$$module$$__));
        const {px} = __$$app$$__.__globals__;
        const logger = Logger.getLogger('watchface6');
        __$$module$$__.module = DeviceRuntimeCore.WatchFace({
            init_view() {
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 0,
                    y: 0,
                    w: 416,
                    h: 416,
                    src: '2.png',
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_TIME, {
                    hour_zero: 0,
                    hour_startX: 77,
                    hour_startY: 43,
                    hour_array: [
                        '3.png',
                        '4.png',
                        '5.png',
                        '6.png',
                        '7.png',
                        '8.png',
                        '9.png',
                        '10.png',
                        '11.png',
                        '12.png'
                    ],
                    hour_space: 0,
                    hour_unit_sc: '13.png',
                    hour_unit_tc: '13.png',
                    hour_unit_en: '13.png',
                    hour_align: hmUI.align.LEFT,
                    minute_zero: 1,
                    minute_array: [
                        '3.png',
                        '4.png',
                        '5.png',
                        '6.png',
                        '7.png',
                        '8.png',
                        '9.png',
                        '10.png',
                        '11.png',
                        '12.png'
                    ],
                    minute_follow: 1,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_DATE, {
                    year_startX: 160,
                    year_startY: 370,
                    year_sc_array: [
                        '14.png',
                        '15.png',
                        '16.png',
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png'
                    ],
                    year_tc_array: [
                        '14.png',
                        '15.png',
                        '16.png',
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png'
                    ],
                    year_en_array: [
                        '14.png',
                        '15.png',
                        '16.png',
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png'
                    ],
                    year_align: hmUI.align.LEFT,
                    year_zero: 1,
                    year_space: 0,
                    year_is_character: false,
                    month_startX: 37,
                    month_startY: 149,
                    month_en_array: [
                        '24.png',
                        '25.png',
                        '26.png',
                        '27.png',
                        '28.png',
                        '29.png',
                        '30.png',
                        '31.png',
                        '32.png',
                        '33.png',
                        '34.png',
                        '35.png'
                    ],
                    month_align: hmUI.align.LEFT,
                    month_zero: 0,
                    month_follow: 0,
                    month_space: 0,
                    month_is_character: true,
                    day_startX: 266,
                    day_startY: 149,
                    day_sc_array: [
                        '14.png',
                        '15.png',
                        '16.png',
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png'
                    ],
                    day_tc_array: [
                        '14.png',
                        '15.png',
                        '16.png',
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png'
                    ],
                    day_en_array: [
                        '14.png',
                        '15.png',
                        '16.png',
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png'
                    ],
                    day_unit_sc: '36.png',
                    day_unit_tc: '36.png',
                    day_unit_en: '36.png',
                    day_align: hmUI.align.LEFT,
                    day_zero: 0,
                    day_follow: 0,
                    day_space: 0,
                    day_is_character: false,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_ANIM, {
                    x: 141,
                    y: 159,
                    anim_path: '',
                    anim_prefix: 'first_anim_rsmhd',
                    anim_ext: 'png',
                    anim_fps: 1,
                    anim_size: 7,
                    display_on_restart: false,
                    repeat_count: 0,
                    anim_status: hmUI.anim_status.START,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_TIME, {
                    hour_zero: 0,
                    hour_startX: 46,
                    hour_startY: 158,
                    hour_array: [
                        '3.png',
                        '4.png',
                        '5.png',
                        '6.png',
                        '7.png',
                        '8.png',
                        '9.png',
                        '10.png',
                        '11.png',
                        '12.png'
                    ],
                    hour_space: 12,
                    hour_align: hmUI.align.RIGHT,
                    minute_zero: 1,
                    minute_startX: 228,
                    minute_startY: 158,
                    minute_array: [
                        '3.png',
                        '4.png',
                        '5.png',
                        '6.png',
                        '7.png',
                        '8.png',
                        '9.png',
                        '10.png',
                        '11.png',
                        '12.png'
                    ],
                    minute_space: 0,
                    minute_align: hmUI.align.LEFT,
                    minute_follow: 0,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_AOD
                });
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 170,
                    y: 158,
                    w: 60,
                    h: 100,
                    src: '41.png',
                    show_level: hmUI.show_level.ONLY_AOD
                });
                hmUI.createWidget(hmUI.widget.IMG_WEEK, {
                    x: 98,
                    y: 271,
                    week_en: [
                        '42.png',
                        '43.png',
                        '44.png',
                        '45.png',
                        '46.png',
                        '47.png',
                        '48.png'
                    ],
                    show_level: hmUI.show_level.ONLY_AOD
                });
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 150,
                    y: 300,
                    src: '49.png',
                    show_level: hmUI.show_level.ONLY_AOD
                });
                hmUI.createWidget(hmUI.widget.IMG_CLICK, {
                    x: 142,
                    y: 220,
                    w: 0,
                    h: 0,
                    src: '37.png',
                    type: hmUI.data_type.HEART,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_CLICK, {
                    x: 141,
                    y: 280,
                    w: 0,
                    h: 0,
                    src: '38.png',
                    type: hmUI.data_type.STEP,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_CLICK, {
                    x: 141,
                    y: 190,
                    w: 0,
                    h: 0,
                    src: '39.png',
                    type: hmUI.data_type.CAL,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_CLICK, {
                    x: 141,
                    y: 250,
                    w: 0,
                    h: 0,
                    src: '40.png',
                    type: hmUI.data_type.BATTERY,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
            },
            onInit() {
                logger.log('index page.js on init invoke');
            },
            build() {
                this.init_view();
                logger.log('index page.js on ready invoke');
            },
            onDestroy() {
                logger.log('index page.js on destroy invoke');
            }
        });
        ;
    })();
} catch (e) {
    console.log('Mini Program Error', e);
    e && e.stack && e.stack.split(/\n/).forEach(i => console.log('error stack', i));
    ;
}