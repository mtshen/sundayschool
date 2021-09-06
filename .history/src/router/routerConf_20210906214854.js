import Birthday from '@/views/common/birthday/index.vue';
import BirthdayManage from '@/views/common/birthday/manage.vue';

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
    pcComponent: BirthdayManage,
    mobileComponent: BirthdayManage,
  },
];

export default routerConf;
