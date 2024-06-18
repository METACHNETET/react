import { makeObservable, observable, action } from 'mobx'



class DataStore {


    //מערך שירותים
    services = [];
    //התחברות  כמנהל
    isLogin = false;
    //מערך פגישות
    appointments = [];
    isAppointment = true;
    //פרטי עסק
    businessDatas = {};





    constructor() {
        makeObservable(this, {

            // --------------Login--------------------
            isLogin: observable,
            setIsLogin: action,
            // --------------services-----------------
            services: observable,
            setServices: action,
            addNewService: action,
            // servicesArray: computed,
            //--------------Appointment----------------
            appointments: observable,
            setAppointment: action,
            addNewAppointment: action,
            isAppointment: observable,
            checkAppointment: action,
            //--------------BusinessData--------------
            businessDatas: observable,
            setBusinessData: action,
        })
    }

    setIsLogin(status) {
        this.isLogin = status
    }

    setServices = (data) => {

        //  this.services = [...this.services, data];
        this.services = [...servicees, ...data];

    };

    addNewService = (service) => {
        this.services = [...this.services, service];
    }

    setAppointment = (data) => {

        console.log(data);
        const sortedData = [...data].sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
        this.appointments = sortedData;


    }

    addNewAppointment = (appointment) => {
        this.appointments = [...this.appointments, appointment];
    }

    checkAppointment = (status) => {
        this.isAppointment = status;
    }


    setBusinessData = (data) => {
        console.log(data, "dataaaaa")
        if (Object.entries(data).keys.length) {
            this.businessDatas = defaultBusinessData;
        }
        else {
            this.businessDatas = data;
        }

        console.log(this.businessDatas)

    }



}

export default new DataStore();


const defaultBusinessData = {
    img:"",
    businessName: 'חוויות ',
    address: ' חיפה',
    phone: '034567654',
    logo: ""

};

const servicees = [{
    name: "טרמפולינה ",
    descripition: "לכל הגילאים",
    price:"20",
    img: "https://www.yambambam.co.il/wp-content/uploads/2014/01/MG_2994-1030x686.jpg"

}, {
    name: "טרמפולינה מבצר ",
    descripition: " גילאים 5-10",
    price:"50",
    img:"https://www.yambambam.co.il/wp-content/uploads/2013/12/MG_3118-Small.jpg" 
},
{
    name: " קיר טיפוס  ",
    descripition: "12+ ",
    price:"60",
    img: "https://www.yambambam.co.il/wp-content/uploads/2013/10/MG_3165-686x1030.jpg"

},
{
    name: "השור הזועם ",
    descripition: "5-10",
    price:"42",
    img: "https://www.yambambam.co.il/wp-content/uploads/2014/02/10001344_10202580131317418_1334238215_n.jpg"

},

{

    name: "שערות סבתא ",
    descripition: " לאוהבי המתוק ",
    price:"7",
    img: "https://rega-matok.co.il/wp-content/uploads/cotton03a-2.jpg"

},{
    name: "טרמפולינה ",
    descripition: "לכל הגילאים",
    price:"20",
    img: "https://www.yambambam.co.il/wp-content/uploads/2014/01/MG_2994-1030x686.jpg"

}, {
    name: "טרמפולינה מבצר ",
    descripition: " גילאים 5-10",
    price:"50",
    img:"https://www.yambambam.co.il/wp-content/uploads/2013/12/MG_3118-Small.jpg" 
},
{
    name: " קיר טיפוס  ",
    descripition: "12+ ",
    price:"60",
    img: "https://www.yambambam.co.il/wp-content/uploads/2013/10/MG_3165-686x1030.jpg"

},]