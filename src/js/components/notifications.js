class NotificationsButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    // TODO: Make the Badge a component with dynamic data
    return (
      <a className="notifications__button js-notifications__button" href="#"  onClick={this.props.toggleDropdown}>
        <span className="notifications__button-badge">88</span>
        <i className="icon-world-globe"></i>
      </a>
    );
  }
}

class NotificationsDropdown extends React.Component {

  // What states does this have?
  // Loading Data
  // Presenting data
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    }
  }

  render() {

    return (
      <ul className="notifications__dropdown">
        <NotificationsDropdownListItem />
      </ul>
    );
  }
}

function NotificationsDropdownListItem(props) {

  return (
    <li className="notifications__dropdown-list-item">
        <a className="notifications__dropdown-link" href="">
            <img className="notifications__dropdown-avatar" src="https://via.placeholder.com/50" alt="#" />
            <div className="notifications__dropdown-link-content">
              <span className="text--strong text--blue">Mary Price, Suoma Narjus and 3 others</span> liked your <span className="text--strong">post</span>: "Acme Inc dynamically scales ni…"
            </div>
        </a>
    </li>
  );
}

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showDropdown: false};

    // Need to bind this to event handler for the child button
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showDropdown: !state.showDropdown
    }));
  }

  render() {

    const jsShow = this.state.showDropdown ? "js-show" : "" ;
    const classes = `${jsShow} notifications`;

    // Send a new data prop to the child button
    return (
      <div className={classes}>
        <NotificationsButton toggleDropdown={this.handleToggleClick} />
        <NotificationsDropdown />
      </div>
    );
  }
}

ReactDOM.render(
  <Notifications />,
  document.querySelector('#main-header')
);
