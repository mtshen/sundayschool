import Birthday from '@/views/common/birthday/index.vue';
import BirthdayManageMobile from '@/views/mobile/birthday/manage.vue';

const routerConf = [
  {
    path: 'birthday',
    name: 'birthday',
    pcComponent: Birthday,
    mobileComponent: Birthday,
  },
  {
    path: 'BirthdayManage',
    name: 'BirthdayManage',
    pcComponent: BirthdayManageMobile,
    mobileComponent: BirthdayManageMobile,
  },
];

export default routerConf;
