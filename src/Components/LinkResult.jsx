import axios from "axios";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

// Define a functional component called LinkResult that takes a prop inputValue
const LinkResult = ({ inputValue }) => {
  // Initialize state variables
  const [shortenLink, setShortenLink] = useState(""); // Stores the shortened URL
  const [copied, setCopied] = useState(false); // Tracks whether the URL is copied to the clipboard
  const [loading, setLoading] = useState(false); // Tracks the loading state while making API requests
  const [error, setError] = useState(false); // Tracks any errors that occur during the API request

  // Define an asynchronous function fetchData to make an API request and shorten the URL
  const fetchData = async () => {
    try {
      setLoading(true); // Set loading state to true while fetching data
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
      setShortenLink(res.data.result.full_short_link); // Set the shortened URL in state
    } catch (error) {
      setError(error); // If an error occurs during the API request, set the error state
    } finally {
      setLoading(false); // Set loading state back to false after API request is complete
    }
  }

  // Use useEffect to trigger the fetchData function when the inputValue prop changes
  useEffect(() => {
    if (inputValue.length) {
      fetchData(); // Call fetchData when the inputValue is not empty
    }
  }, [inputValue]);

  // Use useEffect to reset the copied state after 1 second when it changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup function to clear the timer
  }, [copied]);

  // Render loading message if loading state is true
  if (loading) {
    return <p className="noData">Loading...</p>;
  }
  
  // Render an error message if error state is true
  if (error) {
    return <p className="noData">Something went wrong</p>;
  }

  // Render the shortened URL and copy button if shortenLink is available
  return (
    <>
      {shortenLink && (
        <div className="result">
          <p>{shortenLink}</p>
          <CopyToClipboard
            text={shortenLink}
            onCopy={() => setCopied(true)}
          >
            <button className={copied ? "copied" : ""}>Copy to Clipboard</button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
}


export default LinkResult;
