// Npm Modules
import React, { PureComponent } from 'react';
import propTypes from 'prop-types';

// Local Modules
import AddEmployeeFormModal from '../AddEmployeeFormModal/AddEmployeeFormModal';

// Local css imports
import './AddEmployeeButton.css';

class AddEmployeeButton extends PureComponent {
  state = { visible: false };

  shouldModalShow() {
    this.setState({ visible: true });
  }

  closeModal = () => {
    this.setState({ visible: false });
    this.props.playSouds();
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.shouldModalShow()} className="button">
          + Employee
        </button>

        {this.state.visible && (
          <AddEmployeeFormModal
            globalAlerts={this.props.globalAlerts}
            visible={this.state.visible}
            closeModal={this.closeModal}
            getEmployees={this.props.getEmployees}
            apiURL={this.props.apiURL}
          />
        )}
      </React.Fragment>
    );
  }
}

AddEmployeeButton.propTypes = {
  globalAlerts: propTypes.func,
  playSouds: propTypes.func,
  getEmployees: propTypes.func,
};

export default AddEmployeeButton;
