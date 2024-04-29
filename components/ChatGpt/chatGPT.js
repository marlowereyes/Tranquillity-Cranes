// Import necessary libraries
import { useState, useEffect } from 'react';

// Define ChatGPT component
export default function ChatGPT() {
  // Define state to store the motivational quote
  const [motivationalQuote, setMotivationalQuote] = useState('');

  // Function to fetch a random motivational quote
  const fetchMotivationalQuote = async () => {
    try {
      // You need to replace 'YOUR_API_ENDPOINT' with the actual endpoint of your motivational quote API
      const response = await fetch('YOUR_API_ENDPOINT');
      const data = await response.json();
      
      // Assuming the API returns an object with a 'quote' property containing the quote text
      if (data && data.quote) {
        setMotivationalQuote(data.quote);
      }
    } catch (error) {
      console.error('Error fetching motivational quote:', error);
    }
  };

  // Fetch a motivational quote when the component mounts
  useEffect(() => {
    fetchMotivationalQuote();
  }, []);

  return (
    <div>
      <h2>Motivational Quote:</h2>
      <p>{motivationalQuote}</p>
    </div>
  );
}
