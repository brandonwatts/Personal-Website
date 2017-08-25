import React, {Component} from "react";
import NavBar from './NavBar.jsx';
import LeadIn from './LeadIn.jsx';
import InfoSection from './InfoSection.jsx';
import PortfolioLink from './PortfolioLink.jsx';
import AppFooter from './AppFooter.jsx'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div >
      <LeadIn />
      <InfoSection />
      <PortfolioLink />
      <AppFooter />
    </div>
    );
  }
}
