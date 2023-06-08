import Vue from "vue";

export const store = Vue.observable({
  isNavOpen: false,
  openDialog: false,

  reviewsInfo:[
    {
      id:1,
      text:'ООО «Радонеж» выражает благодарность компании ООО «Атмосерера» в лице — директора Дуплищева Ю.В. за добросовестную работу по монтажу, автоматизации и пуско-наладке вентиляционных систем. За время совместной деятельности ООО «Атмосферс» зарекомендовало себя как надежный партнер, способный качественно решать поставленные задачи. Также отмечаем большой опыт и высокую организацию при проведении работ. Мы довольны результатами Вашей работы и надеемся на дальнейшее сотрудничество!' 
    },
    {
      id:2,
      text:'ЗАО «Техкрим» выражает благодарность компании ООО «Атмосфера» за плодотворное и взаимовыгодное сотрудничество по поставке и монтажу вентиляционного оборудования и оборудования для кондиционирования. Благодарим всех сотрудников компании за высокий профессионализм, ответственное отношение к своему делу и умение находить верные решения в сложных ситуациях! Надеемся на дальнейшее благотворное сотрудничество с вами!'
    },
    {
      id:3,
      text:'ООО НПЦ «Пружина» выражает благодарность вентиляционной компании «Атмосфера» за профессионализм, высокое качество исполнения работ с учетом пожеланий заказчика. Следует также отметить высокий уровень организации проведения работ и гибкость, проявляемую при принятии решений, требующих быстроты и оперативности. Выполненные для нас работы компанией «Атмосфера», позволяют характеризовать её как надежного делового партнера. Основываясь на опыте совместной работы надеемся на длительное сотрудничество!'
    },
    {
      id:4,
      text:'Фабрика корпусной мебели «Мебельсон», выражает свою благодарность ООО «Атмосфера» за своевременную поставку и монтаж оборудования, а также, предоставления высококлассного сервиса по сезонному обслуживанию кондиционеров и систем вентиляции.'
    },  
  ],

  airСonditioners: [

    {
      id: 1,
      imgSrc: "Split-System-Ballu-Olympio-Edge-BSO-09HN8_22Y",
      nameConddition: "Сплит-система Ballu Olympio Edge BSO-09HN8_22Y",
      summCondition: "28 690 ₽",
      ratedCoolingCapacity: "2.64 кВт",
      ratedHeatingCapacity: "2.64 кВт",
      noiseLevelInsideBlock: "23 дБ",
      maxNoiseLevel: "52 дБ",
      effectiveForRooms: "~26 м2",
      guaranteePeriod: "3 года"
    },

    {
      id: 2,
      imgSrc: "Split-System-Ballu-Olympio-Edge-BSO-12HN8_22Y",
      nameConddition: "Сплит-система Ballu Olympio Edge BSO-12HN8_22Y",
      summCondition: "36 590 ₽",
      ratedCoolingCapacity: "3.66 кВт",
      ratedHeatingCapacity: "3.66 кВт",
      noiseLevelInsideBlock: "26 дБ",
      maxNoiseLevel: "56 дБ",
      effectiveForRooms: "~35 м2",
      guaranteePeriod: "3 года"
    },

    {
      id: 3,
      imgSrc: "Split-System-Ballu-Olympio-Edge-BSO-18HN8_22Y",
      nameConddition: "Сплит-система Ballu Olympio Edge BSO-18HN8_22Y",
      summCondition: "58 790 ₽",
      ratedCoolingCapacity: "5.28 кВт",
      ratedHeatingCapacity: "5.57 кВт",
      noiseLevelInsideBlock: "30 дБ",
      maxNoiseLevel: "59 дБ",
      effectiveForRooms: "~52 м2",
      guaranteePeriod: "3 года"
    },

    {
      id: 4,
      imgSrc: "Split-System-Ballu-Lagoon-BSD-09HN8_22Y",
      nameConddition: "Сплит-система Ballu Lagoon BSD-09HN8_22Y",
      summCondition: "31 680 ₽",
      ratedCoolingCapacity: "2.78 кВт",
      ratedHeatingCapacity: "2.78 кВт",
      noiseLevelInsideBlock: "26 дБ",
      maxNoiseLevel: "52 дБ",
      effectiveForRooms: "~28 м2",
      guaranteePeriod: "3 года"
    },

    {
      id: 5,
      imgSrc: "Split-System-Zanussi-Barocco-ZACS-09-HBN1",
      nameConddition: "Сплит-система Zanussi Barocco ZACS-09 HB/N1",
      summCondition: "29 190 ₽",
      ratedCoolingCapacity: "2.64 кВт",
      ratedHeatingCapacity: "2.79 кВт",
      noiseLevelInsideBlock: "23 дБ",
      maxNoiseLevel: "48 дБ",
      effectiveForRooms: "~25 м2",
      guaranteePeriod: "3 года"
    },

    {
      id: 6,
      imgSrc: "Split-System-Zanussi-Barocco-ZACS-07-HBN1",
      nameConddition: "Сплит-система Zanussi Barocco ZACS-07 HB/N1",
      summCondition: "26 090 ₽",
      ratedCoolingCapacity: "2.2 кВт",
      ratedHeatingCapacity: "2.2 кВт",
      noiseLevelInsideBlock: "23 дБ",
      maxNoiseLevel: "48 дБ",
      effectiveForRooms: "~20 м2",
      guaranteePeriod: "3 года"
    },
    
  ]  

});

export const mutations = {
  toggleNav() {
    store.isNavOpen = !store.isNavOpen
  },
  openDialogWindow() {
    store.openDialog = !store.openDialog
  }
};