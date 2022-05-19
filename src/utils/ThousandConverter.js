const _thousandConverter = rupiah => {
  let bilangan = rupiah;
  let reverse = bilangan.toString().split('').reverse().join(''),
    ribuan = reverse.match(/\d{1,3}/g);
  ribuan = ribuan.join('.').split('').reverse().join('');
  return `Rp. ${ribuan}.-`;
};

export default _thousandConverter;
