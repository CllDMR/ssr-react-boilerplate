import React from "react";
import PropTypes from "prop-types";
import Layout from "../layouts/Basic";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

class Page extends React.Component {
  static getInitialProps(ctx) {
    return {};
  }
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <Layout>
        <div className={classes.container}>
          <h1 style={{ color: "white" }}>EXAMPLE</h1>
        </div>
      </Layout>
    );
  }
}

Page.propTypes = {
  classes: PropTypes.object.isRequired
};

const temp = withStyles(styles)(Page);

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(temp);
