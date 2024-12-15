import {avto, gardenEquipment, decor, toys, pets, stationery, health, kitchen, sofa, camping, cooking, garden, gardenTools, plumbing, plate, finishingMaterials, bath, household, } from '../assets/icons/category/import'

export const category = [
    {
      id: "a",
      title: "Автомобильные товары",
      svg: avto,
      list: [
        {
          id: "a1",
          subTitle: "Канистры",
          link: "kanistry",
        },
        {
          id: "a2",
          subTitle: "Перевозка груза",
          link: "perevozka-gruza",
        },
        {
          id: "a3",
          subTitle: "Уход за автомобилем",
          link: "ukhod-za-avtomobilem",
        },
      ],
    },
    {
      id: "b",
      title: "Дачное водоснабжение и поливы",
      svg: gardenEquipment,
      list: [
        {
          id: "b1",
          subTitle: "Лейки",
          link: "leyki",
        },
        {
          id: "b2",
          subTitle: "Опрыскиватели",
          link: "opryskivateli",
        },
        {
          id: "b3",
          subTitle: "Садовые емкости для воды",
          link: "sadovyye-emkosti-dlya-vody",
        },
        {
          id: "b4",
          subTitle: "Системы автополива",
          link: "sistemy-avtopoliva",
        },
        {
          id: "b5",
          subTitle: "Шланги садовые",
          link: "shlangi-sadovyye",
        },
      ],
    },
    {
      id: "c",
      title: "Декор интерьера",
      svg: decor,
      list: [
        {
          id: "c1",
          subTitle: "Вазы",
          link: "vazy",
        },
        {
          id: "c2",
          subTitle: "Коврики",
          link: "kovriki",
        },
        {
          id: "c3",
          subTitle: "Корзины и органайзеры",
          link: "korziny-i-organayzery",
        },
        {
          id: "c4",
          subTitle: "Ящики почтовые",
          link: "yashchiki-pochtovyye",
        },
      ],
    },
    {
      id: "d",
      title: "Детские товары",
      svg: toys,
      list: [
        {
          id: "d1",
          subTitle: "Детские ванночки",
          link: "detskiye-vannochki",
        },
        {
          id: "d2",
          subTitle: "Детские туалеты",
          link: "detskiye-tualety",
        },
        {
          id: "d3",
          subTitle: "Игрушки",
          link: "igrushki",
        },
        {
          id: "d4",
          subTitle: "Ледянки и санки",
          link: "ledyanki-i-sanki",
        },
        {
          id: "d5",
          subTitle: "Посуда для кормления",
          link: "posuda-dlya-kormleniya",
        },
        {
          id: "d6",
          subTitle: "Текстиль для детей",
          link: "tekstil-dlya-detey",
        },
      ],
    },
    {
      id: "e",
      title: "Зоотовары",
      svg: pets,
      list: [
        {
          id: "e1",
          subTitle: "Аксессуары для кормления",
          link: "aksessuary-dlya-kormleniya",
        },
        {
          id: "e2",
          subTitle: "Для выгула",
          link: "dlya-vygula",
        },
        {
          id: "e3",
          subTitle: "Когтеточки и домики",
          link: "kogtetochki-i-domiki",
        },
        {
          id: "e4",
          subTitle: "Лотки и наполнители",
          link: "lotki-i-napolniteli",
        },
        {
          id: "e5",
          subTitle: "Переноска для питомца",
          link: "perenoska-dlya-pitomtsa",
        },
      ],
    },
    {
      id: "f",
      title: "Канцелярия и рукоделие",
      svg: stationery,
      list: [
        {
          id: "f1",
          subTitle: "Вышивка",
          link: "vyshivka",
        },
        {
          id: "f2",
          subTitle: "Канцелярские ножи и ножницы",
          link: "kantselyarskiye-nozhi-i-nozhnitsy",
        },
        {
          id: "f3",
          subTitle: "Органайзеры для хранения",
          link: "organayzery-dlya-khraneniya",
        },
        {
          id: "f4",
          subTitle: "Рисование и лепка",
          link: "risovaniye-i-lepka",
        },
      ],
    },
    {
      id: "g",
      title: "Красота и здоровье",
      svg: health,
      list: [
        {
          id: "g1",
          subTitle: "Маникюр и педикюр",
          link: "manikyur-i-pedikyur",
        },
        {
          id: "g2",
          subTitle: "Органайзеры для хранения",
          link: "organayzery-dlya-khraneniya",
        },
        {
          id: "g3",
          subTitle: "Средства гигиены",
          link: "sredstva-gigiyeny",
        },
      ],
    },
    {
      id: "h",
      title: "Кухонные принадлежности",
      svg: kitchen,
      list: [
        {
          id: "h1",
          subTitle: "Бумага, фольга и пакеты для выпечки",
          link: "bumaga-folga-i-pakety-dlya-vypechki",
        },
        {
          id: "h2",
          subTitle: "Дуршлаги и сито",
          link: "durshlagi-i-sito",
        },
        {
          id: "h3",
          subTitle: "Зажигалки для плиты",
          link: "zazhigalki-dlya-plity",
        },
        {
          id: "h4",
          subTitle: "Закаточные машинки и аксессуары",
          link: "zakatochnyye-mashink-i-aksessuary",
        },
        {
          id: "h5",
          subTitle: "Заточки для ножей и ножниц",
          link: "zatochki-dlya-nozhey-i-nozhnits",
        },
        {
          id: "h6",
          subTitle: "Кухонная утварь",
          link: "kukhonnaya-utvar",
        },
        {
          id: "h7",
          subTitle: "Ножи и разделочные доски",
          link: "nozhi-i-razdelochnyye-doski",
        },
        {
          id: "h8",
          subTitle: "Открывалки",
          link: "otkryvalki",
        },
        {
          id: "h9",
          subTitle: "Порядок на кухне",
          link: "poryadok-na-kukhne",
        },
        {
          id: "h10",
          subTitle: "Прихватки и руковицы",
          link: "prikhvatki-i-rukovitsy",
        },
        {
          id: "h11",
          subTitle: "Терки и измельчители",
          link: "terki-i-izmelchiteli",
        },
        {
          id: "h12",
          subTitle: "Фильтры для воды",
          link: "filtry-dlya-vody",
        },
        {
          id: "h13",
          subTitle: "Хранение для продуктов и напитков",
          link: "khraneniye-dlya-produktov-i-napitkov",
        },
        {
          id: "h14",
          subTitle: "Щипцы, лопатки и половники для кухни",
          link: "shchiptsy-lopatki-i-polovniki-dlya-kukhni",
        },
      ],
    },
    {
      id: "i",
      title: "Мебель",
      svg: sofa,
      list: [
        {
          id: "i1",
          subTitle: "Корпусная мебель",
          link: "korpusnaya-mebel",
        },
        {
          id: "i2",
          subTitle: "Мебель для хранения",
          link: "mebel-dlya-khraneniya",
        },
        {
          id: "i3",
          subTitle: "Стулья и табуреты",
          link: "stulia-i-taburety",
        },
      ],
    },
    {
      id: "j",
      title: "Отдых и пикник",
      svg: camping,
      list: [
        {
          id: "j1",
          subTitle: "Грили, барбекю и коптильни",
          link: "grili-barbekyu-i-koptilni",
        },
        {
          id: "j2",
          subTitle: "Посуда для пикника",
          link: "posuda-dlya-piknika",
        },
        {
          id: "j3",
          subTitle: "Термопосуда",
          link: "termoposuda",
        },
        {
          id: "j4",
          subTitle: "Термосумки и аксессуары",
          link: "termosumki-i-aksessuary",
        },
        {
          id: "j5",
          subTitle: "Уголь, дрова и средства для розжига",
          link: "ugol-drova-i-sredstva-dlya-rozzhiga",
        },
      ],
    },
    {
      id: "k",
      title: "Посуда для приготовления",
      svg: cooking,
      list: [
        {
          id: "k1",
          subTitle: "Кастрюли",
          link: "kastryuli",
        },
        {
          id: "k2",
          subTitle: "Ковши и маленькие кастрюльки",
          link: "kovshi-i-malenkiye-kastryulki",
        },
        {
          id: "k3",
          subTitle: "Посуда для духовки",
          link: "posuda-dlya-dukhovki",
        },
        {
          id: "k4",
          subTitle: "Посуда для микроволновой печи",
          link: "posuda-dlya-mikrovolnovoy-pechi",
        },
        {
          id: "k5",
          subTitle: "Сковороды",
          link: "skovorody",
        },
        {
          id: "k6",
          subTitle: "Формы для приготовления",
          link: "formy-dlya-prigotovleniya",
        },
        {
          id: "k7",
          subTitle: "Чайники и кофейники",
          link: "chayniki-i-kofeyniki",
        },
      ],
    },
    {
      id: "l",
      title: "Сад и огород",
      svg: garden,
      list: [
        {
          id: "l1",
          subTitle: "Биотуалеты, дачные умывальники и души",
          link: "biotualety-dachnyye-umyvalniki-i-dushi",
        },
        {
          id: "l2",
          subTitle: "Горшки и кашпо",
          link: "gorshki-i-kashpo",
        },
        {
          id: "l3",
          subTitle: "Грунты, дренажи и удобрения",
          link: "grunty-drenazhi-i-udobreniya",
        },
        {
          id: "l4",
          subTitle: "Опоры и подвязки для растений",
          link: "opory-i-podvyazki-dlya-rasteniy",
        },
        {
          id: "l5",
          subTitle: "Садовые сетки",
          link: "sadovyye-setki",
        },
        {
          id: "l6",
          subTitle: "Теплицы, парники и укрывные материалы",
          link: "teplitsy-parniki-i-ukryvnyye-materialy",
        },
      ],
    },
    {
      id: "m",
      title: "Садовые инструменты",
      svg: gardenTools,
      list: [
        {
          id: "m1",
          subTitle: "Инструменты для обработки почвы",
          link: "instrumenty-dlya-obrabotki-pochvy",
        },
        {
          id: "m2",
          subTitle: "Инструменты для посадки и сбора урожая",
          link: "instrumenty-dlya-posadki-i-sbora-urozhaya",
        },
        {
          id: "m3",
          subTitle: "Садовая техника",
          link: "sadovaya-tekhnika",
        },
        {
          id: "m4",
          subTitle: "Садовые режущие инструменты",
          link: "sadovyye-rezhushchiye-instrumenty",
        },
      ],
    },
    {
      id: "n",
      title: "Сантехника",
      svg: plumbing,
      list: [
        {
          id: "n1",
          subTitle: "Для очистки труб",
          link: "dlya-ochistki-trub",
        },
        {
          id: "n2",
          subTitle: "Емкости для воды",
          link: "emkosti-dlya-vody",
        },
        {
          id: "n3",
          subTitle: "Раковины и мойки",
          link: "rakoviny-i-moyki",
        },
      ],
    },
    {
      id: "o",
      title: "Столовая посуда",
      svg: plate,
      list: [
        {
          id: "o1",
          subTitle: "Бокалы и стаканы",
          link: "bokaly-i-stakany",
        },
        {
          id: "o2",
          subTitle: "Графины и кувшины",
          link: "grafiny-i-kuvshiny",
        },
        {
          id: "o3",
          subTitle: "Кружки",
          link: "kruzhki",
        },
        {
          id: "o4",
          subTitle: "Кухонный текстиль",
          link: "kukhonnyy-tekstil",
        },
        {
          id: "o5",
          subTitle: "Сервировка стола",
          link: "servirovka-stola",
        },
        {
          id: "o6",
          subTitle: "Столовые приборы",
          link: "stolovyye-pribory",
        },
        {
          id: "o7",
          subTitle: "Тарелки и блюда",
          link: "tarelki-i-blyuda",
        },
      ],
    },
    {
      id: "p",
      title: "Строительство и ремонт",
      svg: finishingMaterials,
      list: [
        {
          id: "p1",
          subTitle: "Двери и фурнитура",
          link: "dveri-i-furnitura",
        },
        {
          id: "p2",
          subTitle: "Крепежь для деревянных конструкций",
          link: "krepezh-dlya-derevyannykh-konstruktsiy",
        },
        {
          id: "p3",
          subTitle: "Крепеж",
          link: "krepezh",
        },
        {
          id: "p4",
          subTitle: "Лестницы и стремянки",
          link: "lestnitsy-i-stremyanki",
        },
        {
          id: "p5",
          subTitle: "Малярные и отделочные инструменты",
          link: "malyarnyye-i-otdelochnyye-instrumenty",
        },
        {
          id: "p6",
          subTitle: "Окна и фурнитура",
          link: "okna-i-furnitura",
        },
        {
          id: "p7",
          subTitle: "Электромонтаж и проводка",
          link: "elektromontazh-i-provodka",
        },
      ],
    },
    {
      id: "q",
      title: "Товары для ванной и бани",
      svg: bath,
      list: [
        {
          id: "q1",
          subTitle: "Аксессуары для банной печи",
          link: "aksessuary-dlya-bannoy-pechi",
        },
        {
          id: "q2",
          subTitle: "Аксессуары для ванной",
          link: "aksessuary-dlya-vannoy",
        },
        {
          id: "q3",
          subTitle: "Аксессуары для туалета",
          link: "aksessuary-dlya-tualeta",
        },
        {
          id: "q4",
          subTitle: "Ванные принадлежности",
          link: "vannyye-prinadlezhnosti",
        },
        {
          id: "q5",
          subTitle: "Органайзеры и флаконы",
          link: "organayzery-i-flakony",
        },
        {
          id: "q6",
          subTitle: "Текстиль для ванны",
          link: "tekstil-dlya-vanny",
        },
      ],
    },
    {
      id: "r",
      title: "Хозтовары",
      svg: household,
      list: [
        {
          id: "r1",
          subTitle: "Защита от вредителей",
          link: "zashchita-ot-vrediteley",
        },
        {
          id: "r2",
          subTitle: "Моющие средства",
          link: "moyushchiye-sredstva",
        },
        {
          id: "r3",
          subTitle: "Салфетки, тряпки и губки для уборки",
          link: "salfetki-tryapki-i-gubki-dlya-uborki",
        },
        {
          id: "r4",
          subTitle: "Стирка и глажка",
          link: "stirka-i-glazhka",
        },
        {
          id: "r5",
          subTitle: "Сумки и пакеты",
          link: "sumki-i-pakety",
        },
        {
          id: "r6",
          subTitle: "Тазы и ведра",
          link: "tazy-i-vedra",
        },
        {
          id: "r6",
          subTitle: "Торговое оборудование",
          link: "torgovoye-oborudovaniye",
        },
        {
          id: "r6",
          subTitle: "Уход за одеждой и обувью",
          link: "ukhod-za-odezhdoy-i-obuvyu",
        },
        {
          id: "r6",
          subTitle: "Щетки, швабры и веники",
          link: "shchetki-shvabry-i-veniki",
        },
      ],
    },
  ];
  