import React from 'react';
import CiderList from './CiderList';
import NewCiderForm from './NewCiderForm';
import CiderDetail from './CiderDetail';

class CiderControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCiderList: [],
      selectedCider: null
    }
  }

  handleNewCiderToList = (newCider) => {
    const newMainCiderList = this.state.mainCiderList.concat(newCider);
    this.setState({
      mainCiderList: newMainCiderList,
      formVisibleOnPage: false
    });
  }

  handleCiderSelection = (id) => {
    const selectedCider = this.state.mainCiderList.find(cider => cider.id === id);
    this.setState({selectedCider: selectedCider});
  }

  handleBuyPint = (id) => {
    let selectedCider = this.state.mainCiderList.find(cider => cider.id === id);
    selectedCider.quantity --;
    const newMainCiderList = this.state.mainCiderList.map((cider) => {return cider.id === id ? selectedCider : cider});
    this.setState({mainCiderList: newMainCiderList});
  }
  
  handleClick = () => {
    if (this.state.selectedCider != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCider: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  render() {
    let currentVisibleState = null;
    let buttonText = null;
    if (this.state.selectedCider != null) {
      currentVisibleState = <CiderDetail cider={this.state.selectedCider}/>;
      buttonText = "Back to List";
    } else if (this.state.formVisibleOnPage) {
      currentVisibleState = <NewCiderForm onNewCiderCreation={this.handleNewCiderToList}/>;
      buttonText = "Back to List";
    } else {
      currentVisibleState = <CiderList ciderList={this.state.mainCiderList} onBuyPint={this.handleBuyPint} onCiderSelect={this.handleCiderSelection}/>;
      buttonText = "Add New Cider";
    }

    return (
      <>
        {currentVisibleState}
        <button className="btn" onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default CiderControl;