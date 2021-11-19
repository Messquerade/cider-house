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

  render() {
    let currentVisibleState = null;
    let buttonText = null;
    if (this.state.selectedCider != null) {
      currentVisibleState = <CiderDetail />;
      buttonText = "Back to List";
    } else if (this.state.formVisibleOnPage) {
      currentVisibleState = <NewCiderForm />;
      buttonText = "Back to List";
    } else {
      currentVisibleState = <CiderList />;
      buttonText = "Add New Cider";
    }

    return (
      <>
        {currentVisibleState}
        <button className="btn">{buttonText}</button>
      </>
    );
  }
}

export default CiderControl;