import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";
import HashtagList from "./components/hashtag/HashtagList";
import { useFeedbackItemsStore } from "./stores/feedbackItemsStore";
import { useEffect } from "react";

const App = () => {
  const fetchFeebackItems = useFeedbackItemsStore(
    (state) => state.fetchFeedbackItems
  );

  useEffect(() => {
    fetchFeebackItems();
  }, [fetchFeebackItems]);

  return (
    <div className="app">
      <Footer />
      <Container />
      <HashtagList />
    </div>
  );
};

export default App;
