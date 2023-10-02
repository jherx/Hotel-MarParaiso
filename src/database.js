import mongoose, { connect } from 'mongoose';
const URI = 'mongodb://localhost/hmp_db'

connect(URI)
  .then(db => console.log('bd conectada'))
  .catch(err => console.error(err));

  export default mongoose;
