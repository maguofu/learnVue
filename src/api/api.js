var dev = {
  getMenus: 'http://localhost:8081/api/gets/menus',
  innersearch: 'http://localhost:8081/api/gets/updateexercisedetailexerciseid',
}

var api = dev;

if (process.env.NODE_ENV == 'production') {
  api = build;
}

export default api