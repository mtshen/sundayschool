import Birthday from '@/views/common/birthday/index.vue';
import BirthdayManagePc from '@/views/pc/birthday/manage.vue';
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
    pcComponent: BirthdayManagePc,
    mobileComponent: BirthdayManageMobile,
  },
];

export default routerConf;
