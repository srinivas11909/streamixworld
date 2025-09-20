"use client"
import { useState } from 'react';

export default function AddSlideForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [textAlign, setTextAlign] = useState('center');
  const [ctaText, setCtaText] = useState('');
  const [ctaLink, setCtaLink] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Either backgroundImage or backgroundColor should be provided
    if (!backgroundImage && !backgroundColor) {
      setError('Please provide either a background image or a background color.');
      return;
    }

    const newSlide = {
      title,
      description,
      backgroundImage,
      backgroundColor,
      textAlign,
      ctaText,
      ctaLink,
    };

    try {
      const response = await fetch('/api/heroCarousel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSlide),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Slide added successfully!');
        // Reset form after successful submission
        setTitle('');
        setDescription('');
        setBackgroundImage('');
        setBackgroundColor('');
        setTextAlign('center');
        setCtaText('');
        setCtaLink('');
        setError('');
      } else {
        alert(result.message || 'Something went wrong');
      }
    } catch (error) {
      alert('Error while submitting form. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="text"
        value={backgroundImage}
        onChange={(e) => setBackgroundImage(e.target.value)}
        placeholder="Background Image URL (Optional)"
      />
      <input
        type="text"
        value={backgroundColor}
        onChange={(e) => setBackgroundColor(e.target.value)}
        placeholder="Background Color (Optional)"
      />
      <select
        value={textAlign}
        onChange={(e) => setTextAlign(e.target.value)}
      >
        <option value="center">Center</option>
        <option value="left">Left</option>
        <option value="right">Right</option>
        <option value="top">Top</option>
        <option value="bottom">Bottom</option>
      </select>
      <input
        type="text"
        value={ctaText}
        onChange={(e) => setCtaText(e.target.value)}
        placeholder="CTA Text (Optional)"
      />
      <input
        type="url"
        value={ctaLink}
        onChange={(e) => setCtaLink(e.target.value)}
        placeholder="CTA Link (Optional)"
      />
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      <button type="submit">Add Slide</button>
    </form>
  );
}
