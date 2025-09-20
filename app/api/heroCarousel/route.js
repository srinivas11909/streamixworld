import  connectToDatabase from '@/lib/db';
import Slide from '@/models/heroCarousel';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongoose';  // Mongoose already has ObjectId

// GET Request to Fetch All Slides
export async function GET() {
  try {
    // Connect to the database
    await connectToDatabase();
    const slides = await Slide.find(); // Mongoose handles the find operation
    return NextResponse.json({ slides }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Failed to fetch slides' }, { status: 500 });
  }
}

// POST Request to Create a New Slide
export async function POST(req) {
  try {
    const { title, description, backgroundImage, backgroundColor, textAlign, ctaText, ctaLink } = await req.json();

    // Ensure either backgroundImage or backgroundColor is provided
    if (!backgroundImage && !backgroundColor) {
      return NextResponse.json(
        { message: 'Please provide either a background image or background color.' },
        { status: 400 }
      );
    }

    // Create a new slide instance
    const newSlide = new Slide({
      title,
      description,
      backgroundImage,
      backgroundColor,
      textAlign,
      ctaText,
      ctaLink,
    });

    // Save the new slide to the database
    await newSlide.save();

    return NextResponse.json({ message: 'Slide created', slideId: newSlide._id }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Failed to create slide' }, { status: 500 });
  }
}

// PUT Request to Update an Existing Slide
export async function PUT(req) {
  try {
    const { id, title, description, backgroundImage, backgroundColor, textAlign, ctaText, ctaLink } = await req.json();

    // Find the slide by ID and update it
    const updatedSlide = await Slide.findByIdAndUpdate(
      id,
      {
        title,
        description,
        backgroundImage,
        backgroundColor,
        textAlign,
        ctaText,
        ctaLink,
      },
      { new: true } // Return the updated document
    );

    if (!updatedSlide) {
      return NextResponse.json({ message: 'Slide not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Slide updated', updatedSlide }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Failed to update slide' }, { status: 500 });
  }
}

// DELETE Request to Delete a Slide
export async function DELETE(req) {
  try {
    const { id } = await req.json();  // We expect the `id` in the body, not the query string

    // Find and delete the slide by ID
    const deletedSlide = await Slide.findByIdAndDelete(id);

    if (!deletedSlide) {
      return NextResponse.json({ message: 'Slide not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Slide deleted' }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Failed to delete slide' }, { status: 500 });
  }
}
