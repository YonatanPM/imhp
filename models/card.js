import mongoose, { Schema, models } from "mongoose";

const cardSchema = new Schema({
  service: { type: String, required: true },
  gener: { type: String, required: true },
  url: { type: String, required: true },
  image: { type: String, required: true },
});

const Card = models.Card || mongoose.model("Card", cardSchema);
export default Card;
