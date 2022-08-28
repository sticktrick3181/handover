import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Card, Button } from "semantic-ui-react";
import Layout from "../components/Layout";
class CampaignIndex extends Component {
  //allows us to execute the React code when the component is already placed in the DOM (Document Object Model).
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }
  renderCampaigns() {
    const items = this.props.campaigns.map((add) => {
      return {
        header: add,
        description: <a>View Address</a>,
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }
  render() {
    return (
      <Layout>
        <div>
          <link
            async
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
          />
          <h3>Open Campaigns</h3>
          {this.renderCampaigns()}
          <Button content="Create Campaign" icon="add circle" primary />
        </div>
      </Layout>
    );
  }
}
export default CampaignIndex;
