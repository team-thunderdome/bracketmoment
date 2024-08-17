import ResultsTitle from './ResultsTitle.js'
import Header from './Header.js'
import LeaderboardButton from './LeaderboardButton.js';
import StatSection from './StatSection.js'
import './ResultsPage.css'

const ResultsPage = () => {
    return (
      <div>
        <Header />
        <ResultsTitle />
        <StatSection />
        <div class="leader-button">
            <LeaderboardButton /></div>
      </div>
    );
  };

  export default ResultsPage;