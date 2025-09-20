import mongoose from 'mongoose';

// Define the slide schema
const slideSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    backgroundImage: { type: String, default: '' },
    backgroundColor: { type: String, default: '' },
    textAlign: {
      type: String,
      enum: ['center', 'left', 'right', 'top', 'bottom'],
      default: 'center', // Default value if not specified
    },
    ctaText: { type: String, default: '' }, // Optional
    ctaLink: { type: String, default: '' }, // Optional
  },
  { timestamps: true }
);

// Create and export the model
const Slide = mongoose.models.Slide || mongoose.model('Slide', slideSchema);

export default Slide;
