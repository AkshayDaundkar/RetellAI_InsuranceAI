import mongoose from 'mongoose';

const querySchema = new mongoose.Schema({
  queryText: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'resolved', 'closed'],
    default: 'pending',
  },
}, { timestamps: true });

const Query = mongoose.model('Query', querySchema);

export default Query;