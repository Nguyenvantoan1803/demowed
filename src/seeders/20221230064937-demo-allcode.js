'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Allcodes', [{
      key:'R1',
      type: 'ROLE',
      value_en:'Admin',
      value_vn:'Quản trị viên',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      key:'R2',
      type: 'ROLE',
      value_en:'Doctor',
      value_vn:'Bác sĩ',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      key:'R3',
      type: 'ROLE',
      value_en:'Patient',
      value_vn:'Bệnh nhân',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      key:'S1',
      type: 'STATUS',
      value_en:'New',
      value_vn:'Lịch hẹn mới',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      key:'S2',
      type: 'STATUS',
      value_en:'Confirmed',
      value_vn:'Đã xác nhận',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      key:'S3',
      type: 'STATUS',
      value_en:'Done',
      value_vn:'Đã khám xong',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      key:'S4',
      type: 'STATUS',
      value_en:'Cancel',
      value_vn:'Đã hủy',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      key:'T1',
      type: 'TIME',
      value_en:'8:00 AM - 9:00 AM',
      value_vn:'8:00 - 9:00',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      key:'T2',
      type: 'TIME',
      value_en:'8:00 AM - 9:00 AM',
      value_vn:'9:00 - 10:00',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      key:'T3',
      type: 'TIME',
      value_en:'10:00 AM - 11:00 AM',
      value_vn:'10:00 - 11:00',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      key:'T4',
      type: 'TIME',
      value_en:'11:00 AM - 0:00 PM',
      value_vn:'11:00 - 12:00',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      key:'T5',
      type: 'TIME',
      value_en:'1:00 PM - 2:00 PM',
      value_vn:'13:00 - 14:00',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      key:'T6',
      type: 'TIME',
      value_en:'2:00 PM - 3:00 PM',
      value_vn:'14:00 - 15:00',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      key:'T7',
      type: 'TIME',
      value_en:'3:00 PM - 4:00 PM',
      value_vn:'15:00 - 16:00',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      key:'T8',
      type: 'TIME',
      value_en:'4:00 PM - 5:00 PM',
      value_vn:'16:00 - 17:00',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      key:'P0',
      type: 'POSITION',
      value_en:'None',
      value_vn:'Bác sĩ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      key:'P1',
      type: 'POSITION',
      value_en:'Master',
      value_vn:'Thạc sĩ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      key:'P2',
      type: 'POSITION',
      value_en:'Doctor',
      value_vn:'Tiến sĩ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      key:'P3',
      type: 'POSITION',
      value_en:'Associate Professor',
      value_vn:'Phó giáo sư',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      key:'P4',
      type: 'POSITION',
      value_en:'Professor',
      value_vn:'Giáo sư',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      key:'M',
      type: 'GENDER',
      value_en:'Male',
      value_vn:'Nam',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      key:'F',
      type: 'GENDER',
      value_en:'Female',
      value_vn:'Nữ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      key:'O',
      type: 'GENDER',
      value_en:'Other',
      value_vn:'Khác',
      createdAt: new Date(),
      updatedAt: new Date()
    },


  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
