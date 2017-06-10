import mongoose from 'mongoose';
import connection from '../database';

// mongoose setup
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const GameSchema = new Schema({
  objectId: ObjectId,
  shareId: String,
  name: String,
  players: Array,
  adminId: String,
}, { timestamps: true });

export const Game = connection.database.model('Game', GameSchema);

export function toGameDTO(result) {
  return {
    id: result._id, // eslint-disable-line no-underscore-dangle
    shareId: result.shareId,
    name: result.name,
    players: result.players,
    createdAt: result.createdAt,
    updatedAt: result.updatedAt,
  };
}
